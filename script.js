const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeAcvtiveClasses();
    panel.classList.add("active");
  });
});

function removeAcvtiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
