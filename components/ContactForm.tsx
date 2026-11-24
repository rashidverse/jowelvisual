"use client";

import { useRef, useState, type FormEvent } from "react";

const FIELDS = [
  { id: "name", type: "text", label: "Name", required: true },
  { id: "email", type: "email", label: "Email", required: true },
  { id: "message", type: "textarea", label: "Message", required: false },
] as const;

/**
 * Elementor Pro form widget b982a97, with its front-end submit flow
 * (elementor-pro/assets/js/form.*.bundle.js): the form fades to 0.45 and gets
 * .elementor-form-waiting while sending, the button is disabled, then the
 * success / error message and per-field errors are shown with Elementor's classes.
 */
export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [waiting, setWaiting] = useState(false);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (waiting) return;

    setWaiting(true);
    setMessage(null);
    setFieldErrors({});

    const data = new FormData(form);
    data.append("action", "elementor_pro_forms_send_form");
    data.append("referrer", location.toString());

    try {
      const res = await fetch("https://formsubmit.co/ajax/jowelvisual@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const json = (await res.json()) as { success?: string | boolean };
      if (res.ok && (json.success === "true" || json.success === true)) {
        form.reset();
        setMessage({ ok: true, text: "Your submission was successful." });
      } else {
        setMessage({ ok: false, text: "Your submission failed because of a server error." });
      }
    } catch {
      setMessage({ ok: false, text: "error" });
    } finally {
      setWaiting(false);
    }
  };

  return (
    <div className="elementor-element elementor-element-b982a97 elementor-button-align-stretch elementor-widget elementor-widget-form">
      <form
        ref={formRef}
        className={`elementor-form${waiting ? " elementor-form-waiting" : ""}`}
        method="post"
        name="New Form"
        aria-label="New Form"
        onSubmit={onSubmit}
        style={{ opacity: waiting ? 0.45 : 1, transition: waiting ? "opacity 0.5s" : "opacity 0.1s" }}
      >
        <input type="hidden" name="post_id" value="42" />
        <input type="hidden" name="form_id" value="b982a97" />
        <input type="hidden" name="referer_title" value="Contact" />
        <input type="hidden" name="queried_id" value="42" />
        <div className="elementor-form-fields-wrapper elementor-labels-">
          {FIELDS.map((f) => {
            const error = fieldErrors[f.id];
            const common = {
              name: `form_fields[${f.id}]`,
              id: `form-field-${f.id}`,
              placeholder: f.label,
              "aria-invalid": error ? ("true" as const) : ("false" as const),
            };
            return (
              <div
                key={f.id}
                className={`elementor-field-type-${f.type} elementor-field-group elementor-column elementor-field-group-${f.id} elementor-col-100${
                  f.required ? " elementor-field-required" : ""
                }${error ? " elementor-error" : ""}`}
              >
                <label htmlFor={`form-field-${f.id}`} className="elementor-field-label elementor-screen-only">
                  {f.label}
                </label>
                {f.type === "textarea" ? (
                  <textarea className="elementor-field-textual elementor-field elementor-size-sm" rows={4} {...common} />
                ) : (
                  <input
                    size={1}
                    type={f.type}
                    className="elementor-field elementor-size-sm elementor-field-textual"
                    required={f.required}
                    {...common}
                  />
                )}
                {error && (
                  <span className="elementor-message elementor-message-danger elementor-help-inline elementor-form-help-inline" role="alert">
                    {error}
                  </span>
                )}
              </div>
            );
          })}
          <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
            <button className="elementor-button elementor-size-md" type="submit" disabled={waiting}>
              <span className="elementor-button-content-wrapper">
                {waiting && (
                  <span className="elementor-button-text elementor-form-spinner">
                    <i className="fa fa-spinner fa-spin" />
                    &nbsp;
                  </span>
                )}
                <span className="elementor-button-text">send enquiry</span>
              </span>
            </button>
          </div>
        </div>
        {message && (
          <div
            className={message.ok ? "elementor-message elementor-message-success elementor-message-svg" : "elementor-message elementor-message-danger"}
            role="alert"
          >
            {message.text}
          </div>
        )}
      </form>
    </div>
  );
}
