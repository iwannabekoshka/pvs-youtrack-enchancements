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

    const tags = document.querySelectorAll(`[data-test="ring-tag"]`);
    const overdueTag = Array.from(tags).find(tag => tag.textContent.includes("Overdue"));
    overdueTag.style.backgroundColor = "#008eff";
    overdueTag.textContent = "ding-dong, due date is coming";

    const overlordImg = document.createElement("img");
    overlordImg.src = "https://cdn.7tv.app/emote/603cb5fcc20d020014423c6d/1x.webp";
    overlordImg.width = "24";
    overlordImg.style.marginLeft = "5px";
    overdueTag.append(overlordImg);
  }
}

const observer = new MutationObserver(handleElementAdded);
observer.observe(document.body, { childList: true, subtree: true });
