"use strict"
// let ident = 
// function ocultar(){
//     document.getElementById('obj1').style.display = 'none';
//     }

document.querySelectorAll(".color").forEach(el => {
    el.addEventListener("click", e => {
      const id = e.target.getAttribute("id");
      // console.log("Se ha clickeado el id "+id);
      const boxToDelete = document.querySelector(`#${id}`);
      boxToDelete.style.display = "none";
      // console.log(boxToDelete);
      setTimeout(function(){ 
        document.querySelector(`#${id}`).style.display='block'; }, 3000);
      
    });
  });