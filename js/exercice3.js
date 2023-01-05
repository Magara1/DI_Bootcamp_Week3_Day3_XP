
/*****   Exercises XP : 
 * 
 * @author : Magara Etychien N'gouan
 * 
 * Description : Exercise 3: Drag & Drop
 *      
 * 
 * Date : 05 Janvier 2023
 * 
 * ***/

function allowDrop(event){
    event.preventDefault();
}


function allowEnter(event) {
    event.target.classList.add('over');
  }

function allowLeave(event) {
    event.target.classList.remove('over');
}

function dragStart(event) {

console.log("target:",  event.target)
console.log("id: ",  event.target.id ) 
event.dataTransfer.setData("text", event.target.id);
   
}

    function dragDrop(event) {

    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    console.log("data: ",  data) 
    
    let box = document.getElementById("box")
    event.target.appendChild(box); }
