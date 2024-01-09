hideBoardsElem();

function hideBoardsElem() {
  const observer = new MutationObserver((mutationRecords) => {
    mutationRecords.forEach((mutation) => {
      const addedNodes = [...mutation.addedNodes];

      const contentElem = addedNodes.find(
        (node) => node.dataset && node.dataset.test === "ticket-content"
      );
      if (contentElem) {
        const boardsElem = contentElem.querySelector(
          `[data-test=board-editor]`
        );
        boardsElem.style.display = "none";
      }
    });
  });

  observer.observe(document.querySelector("body"), {
    subtree: true,
    childList: true,
  });
}
