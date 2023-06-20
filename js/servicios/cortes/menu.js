document.addEventListener("DOMContentLoaded", function(){
    const listElements = document.querySelectorAll(".menu-wrapper--show");
    const list = document.querySelector(".menu-content");
    const menu = document.querySelector(".menu__hamburguer");
  
    const addClick = () => {
      listElements.forEach((element) => {
        element.addEventListener("click", () => {
          let subMenu = element.children[1];
          let height = 0;
  
          if (subMenu.clientHeight === 0) {
            height = subMenu.scrollHeight;
          }
  
          subMenu.style.height = `${height}px`;
        });
      });
    };
  
    const deleteStyleHeight = () => {
      listElements.forEach((element) => {
        if (element.children[1].getAttribute("style")) {
          element.children[1].removeAttribute("style");
        }
      });
    };
  
    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) {
        deleteStyleHeight();
        if (list.classList.contains("menu-content--show"))
          list.classList.remove("menu-content--show");
      } else {
        addClick();
      }
    });
  
    if (window.innerWidth <= 800) {
      addClick();
    }
  
    menu.addEventListener("click", () =>
      list.classList.toggle("menu-content--show")
    );
});