class Carousel {
    constructor(carousel) {
        console.log(carousel);

        this.leftButton = carousel.querySelector(".left-button");
        this.rightButton = carousel.querySelector(".right-button");
        this.cards = carousel.querySelectorAll(".card");
        this.currentIndex = 0; 
    
        this.leftButton.addEventListener("click", () => this.moveLeft());
        this.rightButton.addEventListener("click", () => this.moveRight());

        // array method
        if (window.matchMedia("(max-width: 500px)").matches) {
            this.cards.forEach(image => image.style.display = "none");
            this.cards[this.currentIndex].style.display = "block"; 
        }
        else if (window.matchMedia("(max-width: 800px)").matches) {
            this.cards.forEach(image => image.style.display = "none");
            this.cards[this.currentIndex].style.display = "block"; 
            this.cards[this.currentIndex+1].style.display = "block"; 
        }

    }

    moveLeft(){
        
        this.currentIndex -= 1;
        
        if (this.currentIndex < 0){
            this.currentIndex = this.cards.length-1;

            // array method
            this.cards.forEach(image => image.style.display = "none");
            this.cards[this.currentIndex].style.display = "block"; 
            if (window.matchMedia("(min-width: 500px)").matches) {
                if (this.currentIndex - 1 < 0) {
                    this.cards[this.cards.length-1].style.display = "block";
                } else {
                    this.cards[this.currentIndex-1].style.display = "block";
                }
                
            }
        }
        
        this.animate();
    }

    moveRight(){
        
        this.currentIndex += 1;
        
        if (this.currentIndex >= this.cards.length){
            this.currentIndex = 0;
        }

        this.cards.forEach(image => image.style.display = "none");
        this.cards[this.currentIndex].style.display = "block";

        if (window.matchMedia("(min-width: 500px)").matches) {
            if (this.currentIndex + 1 >= this.cards.length) {
                this.cards[0].style.display = "block";   
            }
            else {
                this.cards[this.currentIndex+1].style.display = "block"; 
            }  
        }

        this.animate();
    }
    

    activateCarousel(mediaquery){
        if (mediaquery.matches) {
            this.cards.forEach(image => image.style.display = "none");
            this.cards[this.currentIndex].style.display = "block"; 
            console.log("mobile");
        }
        else {
            this.cards.forEach(image => image.style.display = "inline");
            console.log("non-mobile");
        }
    }

    animate() {
        // question: how to set up time for keyframes, since each browser
        // is running in runtime. 

        // do you set up a timer, with a counter? 
        this.cards[this.currentIndex].style.animationPlayState = "running";

        // https://stackoverflow.com/questions/6121203/how-to-do-fade-in-and-fade-out-with-javascript-and-css
    }

}

let carousel1 = document.querySelector(".main-content");
let carousel2 = document.querySelector(".aboutus");

let newCarousel1 = new Carousel(carousel1);
let newCarousel2 = new Carousel(carousel2);

let mq = window.matchMedia("(max-width: 500px)");
let tq = window.matchMedia("(max-width: 800px)");

function activateCarousel() {

    if (window.matchMedia("(max-width: 500px)").matches) {
        // array method
        newCarousel1.cards.forEach(image => image.style.display = "none");
        newCarousel1.cards[newCarousel1.currentIndex].style.display = "block"; 

        // array method
        newCarousel2.cards.forEach(image => image.style.display = "none");
        newCarousel2.cards[newCarousel2.currentIndex].style.display = "block"; 
        console.log("mobile");
    }
    else if (window.matchMedia("(max-width: 800px)").matches) {
        newCarousel1.cards.forEach(image => image.style.display = "none");
        newCarousel1.cards[newCarousel1.currentIndex].style.display = "block"; 
        if (newCarousel1.currentIndex >= newCarousel1.cards.length) {
            newCarousel1.cards[0].style.display = "block";
        }
        else if (newCarousel1.currentIndex < 0) {
            newCarousel1.cards[newCarousel1.cards.length-1].style.display = "block";
        }
        else {
            newCarousel1.cards[newCarousel1.currentIndex+1].style.display = "block";
        }
        
        // array method
        newCarousel2.cards.forEach(image => image.style.display = "none");
        newCarousel2.cards[newCarousel2.currentIndex].style.display = "block";

        if (newCarousel2.currentIndex >= newCarousel2.cards.length) {
            newCarousel2.cards[0].style.display = "block";
        } 
        else if (newCarousel2.currentIndex < 0) {
            newCarousel2.cards[newCarousel2.cards.length-1].style.display = "block";
        }
        else {
            newCarousel2.cards[newCarousel2.currentIndex+1].style.display = "block";
        }
        

        console.log("tablet");
    }

    else {
        // array method 
        newCarousel1.cards.forEach(image => image.style.display = "inline");
        newCarousel2.cards.forEach(image => image.style.display = "inline");
        console.log("non-mobile");
    }
}

activateCarousel();
mq.addListener(activateCarousel);
tq.addListener(activateCarousel);
