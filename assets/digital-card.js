document.getElementById("year").textContent = new Date().getFullYear();

const heroVideo = document.querySelector(".hero-video");
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  heroVideo?.pause();
}

async function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const field = document.createElement("textarea");
  field.value = value;
  field.setAttribute("readonly", "");
  field.style.position = "fixed";
  field.style.opacity = "0";
  document.body.appendChild(field);
  field.select();
  document.execCommand("copy");
  field.remove();
}

document.querySelectorAll(".copy-action").forEach((button) => {
  button.addEventListener("click", async () => {
    const originalLabel = button.textContent.trim();
    const status = document.querySelector(".copy-status");

    try {
      await copyText(button.dataset.copy);
      button.textContent = "Copied";
      if (status) status.textContent = `${button.dataset.message}.`;
    } catch {
      if (status) status.textContent = `Copy failed. Use ${button.dataset.copy}.`;
    }

    window.setTimeout(() => {
      button.textContent = originalLabel;
      if (status) status.textContent = "";
    }, 1800);
  });
});
