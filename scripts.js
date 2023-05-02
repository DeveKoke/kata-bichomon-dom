console.log(document.title);
//  * 1
document.getElementById("gen-1").innerHTML = 'Generasión Pokimon';

//  * 2
document.getElementsByClassName("infocard-list")[0].style.backgroundColor = 'pink';
'green';

//  * 3
var URLactual = window.location;
console.log(URLactual);

//  * 4

//  * 5
const imagenes = document.querySelectorAll(".img-sprite");
for (let i = 0; i < imagenes.length; i++) {

    console.log(imagenes[i].src);  
}

//  * 6
const images = document.querySelectorAll(".img-sprite");
for (let i = 0; i < images.length; i++) {

    imagenes[i].src = 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif';  
}

// * 7
let flyingType = document.getElementsByClassName("infocard-lg-data text-muted")
for (let i = 0; i < flyingType.length; i++) {
        flyingType[i].style.backgroundColor = 'blue';
}


