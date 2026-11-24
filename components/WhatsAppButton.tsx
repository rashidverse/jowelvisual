"use client";

import { useEffect, useState } from "react";
import { WHATSAPP } from "@/data/site";
import { WhatsAppIcon } from "./icons";

/** "Click to Chat for WhatsApp" plugin, style-2, bottom-right, corner entry animation. */
export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const open = () => {
    const url = `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.text)}`;
    window.open(url, "_blank", "noopener");
  };

  return (
    <div
      className="ht-ctc ht-ctc-chat ctc-analytics ctc_wp_desktop style-2 ht_ctc_entry_animation ht_ctc_an_entry_corner "
      id="ht-ctc-chat"
      role="button"
      tabIndex={0}
      aria-label="WhatsApp"
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: visible ? "block" : "none",
        position: "fixed",
        bottom: 8,
        right: 15,
        cursor: "pointer",
        zIndex: 99999999,
      }}
    >
      <div className="ht_ctc_style ht_ctc_chat_style">
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} className="ctc-analytics ctc_s_2">
          <p
            className="ctc-analytics ctc_cta ctc_cta_stick ht-ctc-cta ht-ctc-cta-hover "
            style={{
              padding: "0px 16px",
              lineHeight: 1.6,
              fontSize: 15,
              backgroundColor: "#25D366",
              color: "#ffffff",
              borderRadius: 10,
              margin: "0 10px",
              display: hover ? "block" : "none",
              order: 0,
            }}
          >
            Live chat
          </p>
          <WhatsAppIcon />
        </div>
      </div>
    </div>
  );
}
