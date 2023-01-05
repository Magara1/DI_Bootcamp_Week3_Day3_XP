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

/*

Copy the code above, to a structured HTML file.
In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.

*/

let idcontainer= document.getElementById("container");
let idanimate = document.getElementById("animate");

let positioninitialeX =0;

let finalwidth = idcontainer.offsetWidth - idanimate.offsetWidth

console.log(finalwidth);

let animation;

function myMove(){

    animation =  setInterval(AnimationDiv,1)
}

function AnimationDiv(){
    
    positioninitialeX++

    if(positioninitialeX <= finalwidth){
        console.log(positioninitialeX);
        idanimate.style.left = positioninitialeX + "px";
    } else{
        clearInterval( animation);
    }
}
