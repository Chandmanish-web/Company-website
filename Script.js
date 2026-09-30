document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("button").forEach((button) => {
    const originalText = button.textContent;
    const changedText = button.dataset.changedText || "Clicked!";

    button.addEventListener("click", () => {
      button.textContent = button.textContent === changedText ? originalText : changedText;
    });
  });
});