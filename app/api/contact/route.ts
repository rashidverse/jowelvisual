import nodemailer from "nodemailer";

/*
 * Replaces Elementor Pro's form handler (admin-ajax.php, action elementor_pro_forms_send_form).
 * Responds in the same shape Elementor's front-end expects:
 *   { success: true,  data: { message } }
 *   { success: false, data: { message, errors?: { fieldId: text } } }
 *
 * Email settings (in .env.local):
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE ("true" for port 465)
 *   CONTACT_TO    where enquiries are sent (e.g. jowelvisual@gmail.com)
 *   CONTACT_FROM  optional sender address, defaults to SMTP_USER
 */

export const runtime = "nodejs";

// Elementor Pro default messages (modules/forms/classes/ajax-handler.php)
const MESSAGES = {
  success: "Your submission was successful.",
  error: "Your submission failed because of an error.",
  required: "This field is required.",
  invalid: "Your submission failed because the form is invalid.",
  serverError: "Your submission failed because of a server error.",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = { name: 200, email: 254, message: 5000 };

function fail(message: string, errors?: Record<string, string>, status = 200) {
  return Response.json({ success: false, data: { message, ...(errors ? { errors } : {}) } }, { status });
}

/** Strip CR/LF so header values can't be split. */
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return fail(MESSAGES.invalid);
  }

  const get = (k: string) => {
    const v = form.get(`form_fields[${k}]`);
    return typeof v === "string" ? v.trim() : "";
  };
  const name = get("name");
  const email = get("email");
  const message = get("message");

  const errors: Record<string, string> = {};
  if (!name) errors.name = MESSAGES.required;
  if (!email) errors.email = MESSAGES.required;
  else if (!EMAIL_RE.test(email)) errors.email = "The field accepts only email format.";
  if (name.length > MAX_LEN.name || email.length > MAX_LEN.email || message.length > MAX_LEN.message) {
    return fail(MESSAGES.invalid);
  }
  if (Object.keys(errors).length) return fail(MESSAGES.error, errors);

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE, CONTACT_TO, CONTACT_FROM } = process.env;
  if (!SMTP_HOST || !CONTACT_TO) {
    console.error("[contact] SMTP_HOST / CONTACT_TO not set — enquiry not sent");
    return fail(MESSAGES.serverError);
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 587),
      secure: SMTP_SECURE === "true",
      auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
    });

    const referrer = typeof form.get("referrer") === "string" ? (form.get("referrer") as string) : "";
    await transporter.sendMail({
      from: CONTACT_FROM || SMTP_USER,
      to: CONTACT_TO,
      replyTo: { name: oneLine(name), address: email },
      subject: `New message from "jowelvisual"`,
      // Same body layout as Elementor's default email action ([all-fields] + metadata)
      text: [`Name: ${name}`, `Email: ${email}`, `Message: ${message}`, "", "---", "", `Page URL: ${referrer}`].join("\n"),
    });
  } catch (err) {
    console.error("[contact] sending failed:", err);
    return fail(MESSAGES.error);
  }

  return Response.json({ success: true, data: { message: MESSAGES.success, data: [] } });
}
