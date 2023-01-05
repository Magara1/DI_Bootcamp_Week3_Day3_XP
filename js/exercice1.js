
/*****   Exercises XP : 
 * 
 * @author : Magara Etychien N'gouan
 * 
 * Description :  Exercise 1 : Change The Article
 *      
 * 
 * Date : 05 Janvier 2023
 * 
 * ***/

//part I

//In your Javascript file, using setTimeout, call a function after 2 seconds.
//The function will alert “Hello World”.

setTimeout(function() {
    alert("Hello World");
}, 2000);

//Part II

//1.In your Javascript file, using setTimeout, call a function after 2 seconds.
//2.The function will add a new paragraph <p>Hello World</p> to the <div id="container">.


let idset = document.getElementById("container");

setTimeout(()=>{
    let paragraph =document.createElement("p")
    paragraph.innerHTML = "Hello World";

   // idset.appendChild(paragraph);

},2000)

/****   Part III
 * 
  In your Javascript file, using setInterval, call a function every 2 seconds.
The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
The interval will be cleared (ie. clearInterval), when the user will click on the button.
Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

**** */

let stopPara = setInterval(addParagraph, 2000)

let compteur = 0;

function addParagraph(){
    compteur++
    if (compteur <=5 ) {
        let paragraph =document.createElement("p")
        paragraph.innerHTML = "Hello World";
        idset.appendChild(paragraph);
    } else {
        clearInterval(stopPara);
    }
}

//creation de la fonction stop
function stopFunction(){
    clearInterval(stopPara);
}