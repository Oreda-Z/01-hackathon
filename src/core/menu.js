export class Menu {
  constructor(selector) {
    this.el = document.querySelector(selector)

    document.body.addEventListener("contextmenu", event => {
      event.preventDefault();
      // menu.style.top = `${event.clientY}px`;
      // menu.style.left = `${event.clientX}px`;
      // menu.classList.add("active");
    })

    document.body.addEventListener('click', event => {
      if (event.target.offsetParent !== this.el) {
        this.close()
      }
    })
  }

  open() {
    throw new Error(`"open" method should be implemented in Menu"`)
  }

  close() {
    throw new Error(`"close" method should be implemented in Menu"`)
  }

  add() {
    throw new Error(`"add" method should be implemented in Menu"`)
  }
}