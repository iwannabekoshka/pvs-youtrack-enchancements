function handleElementAdded(mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type !== "childList") {
      continue;
    }

    const boardsElem = document.querySelector('[data-test="added-boards"]');
    if (boardsElem) {
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

    const boardTags = document.querySelectorAll(
      `.yt-issue-tags__tag__name__text`
    );
    if (boardTags.length > 0) {
      const overdueTags = Array.from(boardTags).filter((tag) =>
        tag.textContent.includes("Overdue")
      );
      overdueTags.forEach((tag) => {
        tag.closest("a").style.backgroundColor = "#008eff";
        tag.closest(".yt-issue-tags__tag").style.backgroundColor = "#008eff";

        tag.textContent = "due date is coming";
        tag.style.textWrap = "wrap";
        tag.style.display = "flex";

        const overlordImg = document.createElement("img");
        overlordImg.src =
          "https://cdn.7tv.app/emote/603cb5fcc20d020014423c6d/1x.webp";
        overlordImg.width = "24";
        overlordImg.style.marginLeft = "5px";
        tag.append(overlordImg)
      });
    }

    const taskTags = document.querySelectorAll(
      `[data-test="ring-tag"]`
    );
    if (taskTags.length > 0) {
      const overdueTags = Array.from(taskTags).filter((tag) =>
        tag.textContent.includes("Overdue")
      );
      overdueTags.forEach((tag) => {
        tag.closest("a").style.backgroundColor = "#008eff";

        tag.textContent = "ding-dong, due date is coming";
        tag.style.textWrap = "wrap";

        const overlordImg = document.createElement("img");
        overlordImg.src =
          "https://cdn.7tv.app/emote/603cb5fcc20d020014423c6d/1x.webp";
        overlordImg.width = "24";
        overlordImg.style.marginLeft = "5px";
        tag.append(overlordImg)
      });
    } 
  }
}

const observer = new MutationObserver(handleElementAdded);
observer.observe(document.body, { childList: true, subtree: true });
