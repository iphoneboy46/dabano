export default function Tabs() {
  const listTabBtn = document.querySelector(".list-tabs-btn");
  // const listTabContent = document.querySelector(".list-tabs-content");

  if (listTabBtn || listTabContent) {
    const itemTabBtns = listTabBtn.querySelectorAll(".item-tabs-btn");
    // const itemTabContents = listTabContent.querySelectorAll(".item-tabs-content");

    itemTabBtns.forEach((itemTabBtn, index) => {
      itemTabBtn.addEventListener("click", () => {
        
        const itemTabBtnActive = listTabBtn.querySelector(".item-tabs-btn.actived");
        // const itemTabContentActive = listTabContent.querySelector(".item-tabs-content.actived");

        itemTabBtnActive.classList.remove("actived");
        // itemTabContentActive.classList.remove("actived");
        itemTabBtn.classList.add("actived");
        // itemTabContents[index].classList.add("actived");
      });
    });
  }
}
