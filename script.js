  // Handle sorting buttons click to open new window
document.addEventListener("DOMContentLoaded", () => {
  const sortButtons = document.querySelectorAll(".sort-button");
  sortButtons.forEach(button => {
    button.addEventListener("click", () => {
      const url = button.getAttribute("data-url");
      window.open(url, "_blank");
    });
  });
});
