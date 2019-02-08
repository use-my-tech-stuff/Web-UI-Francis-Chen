let arrayOfText = "camera";
let speed = 50;
searchBox = document.querySelector(".typable");
    
function typeOnSearchBox(arr) {
    searchBox = document.querySelector(".typable");
    console.log(searchBox);
    searchBox.value = "";
    arr.forEach(typer);
}

function typer(word){


}

typer(arrayOfText);