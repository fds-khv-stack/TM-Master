const ticker = document.querySelector(".ticker div");
if (ticker) {
  ticker.innerHTML += ticker.innerHTML;
}

const tiltCard = document.querySelector("[data-tilt]");
if (tiltCard) {
  window.addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 8;
    const y = (event.clientY / window.innerHeight - 0.5) * -8;
    tiltCard.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  });
}

const tools = document.querySelectorAll(".tool");
window.addEventListener("scroll", () => {
  const shift = window.scrollY * 0.08;
  tools.forEach((tool, index) => {
    tool.style.translate = `${Math.sin(shift / 20 + index) * 14}px ${shift * (index % 2 ? -0.16 : 0.12)}px`;
  });
}, { passive: true });
