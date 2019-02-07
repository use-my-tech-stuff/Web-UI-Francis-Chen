class Menu {

    constructor(menu) {
        this.menu = menu;
        this.clickableMenu = menu.querySelector(".fa.fa-bars");
        this.menuItems = menu.querySelector("ul");
    
        this.clickableMenu.addEventListener("click", () => this.onClick());
    }

    onClick(){
        if (window.matchMedia("(max-width:500px)").matches) {
            this.menuItems.classList.toggle("menu-dropdown");
            document.querySelector(".middle-column").classList.toggle("hideSearch");
            document.querySelector(".header").classList.toggle("colorwhite");
        }
    }
}

let menu = document.querySelector("nav");
let a_menu = new Menu(menu);