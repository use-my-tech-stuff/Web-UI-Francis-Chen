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

let wq = window.matchMedia("(max-width: 500px)");

function deactivateDropDownMenu() {

    // true or false // check conditions 

    let MenuDropped = menu.querySelector("ul").classList.contains("menu-dropdown");
    let searchBarGone = document.querySelector(".middle-column").classList.contains("hideSearch")
    let topHeaderGone = document.querySelector(".header").classList.contains("colorwhite");
    
    // check if media query is larger than 500px
    
    if (!window.matchMedia("(max-width: 500px)").matches) {

        // check if classlist already contains these classes 
        if (MenuDropped & searchBarGone & topHeaderGone) {

            // if so, we shall remove!
            menu.querySelector("ul").classList.remove("menu-dropdown");
            document.querySelector(".middle-column").classList.remove("hideSearch");
            document.querySelector(".header").classList.remove("colorwhite");
            
        }        
    }
}

deactivateDropDownMenu();
wq.addListener(deactivateDropDownMenu);