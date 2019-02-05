class Carousel {
    constructor(carousel) {
        console.log(carousel);

        this.leftButton = carousel.querySelector(".left-button");
        this.rightButton = carousel.querySelector(".right-button");
        this.cards = carousel.querySelectorAll(".card");
        this.currentIndex = 0; 
    
        this.leftButton.addEventListener("click", () => this.moveLeft());
        this.rightButton.addEventListener("click", () => this.moveRight());

        this.cards.forEach(image => image.style.display = "none");
        this.cards[this.currentIndex].style.display = "block"; 


    }

    moveLeft(){
        
        this.currentIndex -= 1;
        
        if (this.currentIndex < 0){
            this.currentIndex = this.cards.length-1;

            this.cards.forEach(image => image.style.display = "none");
            this.cards[this.currentIndex].style.display = "block"; 
            
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

newCarousel1 = new Carousel(carousel1);
newCarousel2 = new Carousel(carousel2);

let mq = window.matchMedia("(max-width: 500px)");

mq.addListener(newCarousel1.activateCarousel(mq));
mq.addListener(newCarousel2.activateCarousel(mq));

