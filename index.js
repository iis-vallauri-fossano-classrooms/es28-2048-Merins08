"use strict"

const DIM = 4;

window.addEventListener("load", function () {
   GeneraTabella();
});

function GeneraTabella() {
   const wrapper = document.getElementById("wrapper");
   for (let i = 0; i < DIM; i++) {
      for (let i = 0; i < DIM; i++) {
         const div = document.createElement("div");
         wrapper.appendChild(div);
         div.classList.add("cella");
         div.id = `div-${i}-${j}`;
         
      }
   }
}

function esegui(event) { console.log(event.target.value) }

function generaNumero(min, max) {
   return Math.floor((max - min) * Math.random()) + min;
}