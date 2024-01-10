function handleElementAdded(mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type !== "childList") {
      continue;
    }

    const boardsElem = document.querySelector('[data-test="added-boards"]');

    if (!boardsElem) {
      continue;
    }

    const existingTextElement =
      boardsElem.parentElement.querySelector(".added-boards-text");

    if (existingTextElement) {
      return;
    }

    boardsElem.style.display = "none";

    const textElem = document.createElement("div");
    textElem.className = "added-boards-text";
    textElem.textContent = "Здесь были доски 🐱";
    textElem.style.color = "hotpink";
    boardsElem.parentElement.appendChild(textElem);
  }
}

const observer = new MutationObserver(handleElementAdded);
observer.observe(document.body, { childList: true, subtree: true });
