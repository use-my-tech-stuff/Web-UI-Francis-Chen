window.addListener("onload", renderText);
let loadingText = document.querySelector(".onloadText");
let speed = 50;

function renderText(){
    if (loadingText.style.opacity != 1)  {
        loadingText.style.opacity += 0.1;
        setTimeout(renderText,speed); 
    }   
}