"use strict";

// This is a static site: these actions prepare drafts, not deliver messages.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contactForm");
  if (!form) return;

  const status = document.querySelector("#formStatus");
  const destinationEmail = "thinkficialengineeringnetwork@gmail.com";
  const destinationWhatsApp = "2349082965308";
  const fields = ["name", "email", "phone", "message"];

  function validateAndRead() {
    for (const id of fields) {
      const field = form.elements.namedItem(id);
      field.setCustomValidity("");
      if (!field.value.trim())
        field.setCustomValidity("Please complete this field.");
    }

    if (!form.reportValidity()) return null;
    return Object.fromEntries(
      fields.map((id) => [id, form.elements.namedItem(id).value.trim()]),
    );
  }

  form.addEventListener("input", (event) => {
    if (
      event.target instanceof HTMLInputElement ||
      event.target instanceof HTMLTextAreaElement
    ) {
      event.target.setCustomValidity("");
    }
  });

  function buildMessage(data) {
    return (
      `Hello Thinkficial Engineering Network,\n\n` +
      `I am contacting you through your website.\n\n` +
      `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\n` +
      `Message:\n${data.message}`
    );
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = validateAndRead();
    if (!data) return;

    const subject = encodeURIComponent("TEN Website Enquiry");
    const body = encodeURIComponent(buildMessage(data));
    status.textContent =
      "Your email application will open. Please review and send the draft yourself.";
    window.location.href = `mailto:${destinationEmail}?subject=${subject}&body=${body}`;
  });

  document.querySelector("#whatsappBtn")?.addEventListener("click", () => {
    const data = validateAndRead();
    if (!data) return;

    const message = encodeURIComponent(buildMessage(data));
    status.textContent =
      "WhatsApp will open with a prepared message. Please press Send there.";
    const url = `https://wa.me/${destinationWhatsApp}?text=${message}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
});
