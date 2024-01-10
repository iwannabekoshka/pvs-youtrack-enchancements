function handleElementAdded(mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      const boardsElem = document.querySelector('[data-test="added-boards"]');

      if (!boardsElem) {
        continue;
      }

      const existingTextElement =
        boardsElem.parentElement.querySelector(".added-boards-text");

      if (existingTextElement) {
        continue;
      }

      boardsElem.style.display = "none";

      const textElem = document.createElement("div");
      textElem.className = "added-boards-text";
      textElem.textContent = "Здесь были доски 🐱";
      boardsElem.parentElement.appendChild(textElem);

      observer.disconnect();
    }
  }
}

const observer = new MutationObserver(handleElementAdded);
observer.observe(document.body, { childList: true, subtree: true });
