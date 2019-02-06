class Menu {

    constructor(menu) {
        this.clickableMenu = menu.querySelector(".fa.fa-bars");
        this.menuItems = menu.querySelector("nav");
    
        this.clickableMenu.addEventListener("click", () => this.onClick());
    }

    onClick(){
        console.log("click.");
        console.log(this.menuItems);
        console.log(this.menuItems.classList);
        this.menuItems.setAttribute("display", "inline");
        this.menuItems.classList.toggle("menu-dropdown");
    }
}

let menu = document.querySelector(".menu");
let a_menu = new Menu(menu);