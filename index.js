"use strict"

const DIM = 4;

window.addEventListener("load", function () {
   GeneraTabella();
});

function GeneraTabella() {
   const wrapper = document.getElementById("wrapper");
   for (let i = 0; i < DIM; i++) {
      for (let j = 0; j < DIM; j++) {
         const div = document.createElement("div");
         div.classList.add("cella");
         div.id = `div-${i}-${j}`;
         wrapper.appendChild(div);
      }
   }
   genera2();
   genera2();

   window.addEventListener("keydown", esegui);
}

function esegui(event) {
   switch (event.key) {
      case "ArrowUp":
         arrowUpClicked();
         break;
      case "ArrowDown":
         arrowDownClicked();
         break;
      case "ArrowLeft":
         arrowLeftClicked();
         break;
      case "ArrowRight":
         arrowRightClicked();
         break;
      default:
         alert("Premi una delle freccie");
         return;
   }
}

function generaNumero(min, max) {
   return Math.floor((max - min) * Math.random()) + min;
}

function genera2() {
   let cellaI, cellaJ;
   do {
      cellaI = generaNumero(0, DIM);
      cellaJ = generaNumero(0, DIM);
   } while (document.getElementById(`div-${cellaI}-${cellaJ}`).innerText == " ");
   document.getElementById(`div-${cellaI}-${cellaJ}`).innerText = "2";
}

function arrowUpClicked() {
   let spostamenti = false;
   for (let i = DIM - 1; i > 0; i--) {
      for (let j = DIM - 1; j > -1; j--) {
         let z = DIM - 1;
         while (z > i) {
            if (document.getElementById(`cella-${z - 1}-${j}`).innerText == "") {
               document.getElementById(`cella-${z - 1}-${j}`).innerText = document.getElementById(`cella-${z}-${j}`).innerText;
               document.getElementById(`cella-${z}-${j}`).innerText = "";
            }
            else if (document.getElementById(`cella-${z}-${j}`).innerText == document.getElementById(`cella-${z - 1}-${j}`).innerText) {
               document.getElementById(`cella-${z - 1}-${j}`).innerText = parseInt(document.getElementById(`cella-${z}-${j}`).innerText) * 2;
               document.getElementById(`cella-${z}-${j}`).innerText = "";
               punti += parseInt(document.getElementById(`cella-${z - 1}-${j}`).innerText);
               document.getElementsByTagName("span")[0].innerText = punti;
               spostamenti = true;
            }
            z--;
         }
         z = i;
         while (z > 0) {
            if (document.getElementById(`cella-${z - 1}-${j}`).innerText == "") {
               document.getElementById(`cella-${z - 1}-${j}`).innerText = document.getElementById(`cella-${z}-${j}`).innerText;
               document.getElementById(`cella-${z}-${j}`).innerText = "";
            }
            else if (document.getElementById(`cella-${z}-${j}`).innerText == document.getElementById(`cella-${z - 1}-${j}`).innerText) {
               document.getElementById(`cella-${z - 1}-${j}`).innerText = parseInt(document.getElementById(`cella-${z}-${j}`).innerText) * 2;
               document.getElementById(`cella-${z}-${j}`).innerText = "";
               punti += parseInt(document.getElementById(`cella-${z - 1}-${j}`).innerText);
               document.getElementsByTagName("span")[0].innerText = punti;
               spostamenti = true;
            }
            z--;
         }
      }
   }

   if (!spostamenti) {
      let lose = checkLose();
      if (lose) {
         return;
      }
   }

   genera2();
}

function arrowDownClicked() {
   let spostamenti = false;
   for (let i = 0; i < DIM - 1; i++) {
      for (let j = 0; j < DIM; j++) {
         let z = 0;
         while (z < i) {
            if (document.getElementById(`cella-${z + 1}-${j}`).innerText == "") {
               document.getElementById(`cella-${z + 1}-${j}`).innerText = document.getElementById(`cella-${z}-${j}`).innerText;
               document.getElementById(`cella-${z}-${j}`).innerText = "";
               spostamenti = true;
            }
            else if (document.getElementById(`cella-${z}-${j}`).innerText == document.getElementById(`cella-${z + 1}-${j}`).innerText) {
               document.getElementById(`cella-${z + 1}-${j}`).innerText = parseInt(document.getElementById(`cella-${z}-${j}`).innerText) * 2;
               document.getElementById(`cella-${z}-${j}`).innerText = "";
               punti = parseInt(document.getElementById(`cella-${z + 1}-${j}`).innerText);
               document.getElementsByTagName("span")[0].innerText = punti;
               spostamenti = true;
            }
            z++;
         }
         z = i;
         while (z < DIM - 1) {
            if (document.getElementById(`cella-${z + 1}-${j}`).innerText == "") {
               document.getElementById(`cella-${z + 1}-${j}`).innerText = document.getElementById(`cella-${z}-${j}`).innerText;
               document.getElementById(`cella-${z}-${j}`).innerText = "";
               spostamenti = true;
            }
            else if (document.getElementById(`cella-${z}-${j}`).innerText == document.getElementById(`cella-${z + 1}-${j}`).innerText) {
               document.getElementById(`cella-${z + 1}-${j}`).innerText = parseInt(document.getElementById(`cella-${z}-${j}`).innerText) * 2;
               document.getElementById(`cella-${z}-${j}`).innerText = "";
               punti += parseInt(document.getElementById(`cella-${z + 1}-${j}`).innerText);
               document.getElementsByTagName("span")[0].innerText = punti;
               spostamenti = true;
            }
            z++;
         }
      }
   }

   if (!spostamenti) {
      let lose = checkLose();
      if (lose) {
         return;
      }
   }

   genera2();
}

function arrowLeftClicked() {
   let spostamenti = false;
   for (let i = DIM - 1; i > -1; i--) {
      for (let j = DIM - 1; j > 0; j--) {
         let z = DIM - 1;
         while (z > j) {
            if (document.getElementById(`cella-${i}-${z - 1}`).innerText == "") {
               document.getElementById(`cella-${i}-${z - 1}`).innerText = document.getElementById(`cella-${i}-${z}`).innerText;
               document.getElementById(`cella-${i}-${z}`).innerText = "";
               spostamenti = true;
            }
            else if (document.getElementById(`cella-${i}-${z}`).innerText == document.getElementById(`cella-${i}-${z - 1}`).innerText) {
               document.getElementById(`cella-${i}-${z - 1}`).innerText = parseInt(document.getElementById(`cella-${i}-${z}`).innerText) * 2;
               document.getElementById(`cella-${i}-${z}`).innerText = "";
               punti += parseInt(document.getElementById(`cella-${i}-${z - 1}`).innerText);
               document.getElementsByTagName("span")[0].innerText = punti;
               spostamenti = true;
            }
            z--;
         }
         z = j;
         while (z > 0) {
            if (document.getElementById(`cella-${i}-${z - 1}`).innerText == "") {
               document.getElementById(`cella-${i}-${z - 1}`).innerText = document.getElementById(`cella-${i}-${z}`).innerText;
               document.getElementById(`cella-${i}-${z}`).innerText = "";
               spostamenti = true;
            }
            else if (document.getElementById(`cella-${i}-${z}`).innerText == document.getElementById(`cella-${i}-${z - 1}`).innerText) {
               document.getElementById(`cella-${i}-${z - 1}`).innerText = parseInt(document.getElementById(`cella-${i}-${z}`).innerText) * 2;
               document.getElementById(`cella-${i}-${z}`).innerText = "";
               punti += parseInt(document.getElementById(`cella-${i}-${z - 1}`).innerText);
               document.getElementsByTagName("span")[0].innerText = punti;
               spostamenti = true;
            }
            z--;
         }
      }
   }

   if (!spostamenti) {
      let lose = checkLose();
      if (lose) {
         return;
      }
   }

   genera2();
}

function arrowRightClicked() {
   let spostamenti = false;
   for (let i = 0; i < DIM; i++) {
      for (let j = 0; j < DIM - 1; j++) {
         let z = 0;
         while (z < j) {
            if (document.getElementById(`cella-${i}-${z + 1}`).innerText == "") {
               document.getElementById(`cella-${i}-${z + 1}`).innerText = document.getElementById(`cella-${i}-${z}`).innerText;
               document.getElementById(`cella-${i}-${z}`).innerText = "";
               spostamenti = true;
            }
            else if (document.getElementById(`cella-${i}-${z}`).innerText == document.getElementById(`cella-${i}-${z + 1}`).innerText) {
               document.getElementById(`cella-${i}-${z + 1}`).innerText = parseInt(document.getElementById(`cella-${i}-${z}`).innerText) * 2;
               document.getElementById(`cella-${i}-${z}`).innerText = "";
               punti += parseInt(document.getElementById(`cella-${i}-${z + 1}`).innerText);
               document.getElementsByTagName("span")[0].innerText = punti;
               spostamenti = true;
            }
            z++;
         }
         z = j;
         while (z < DIM - 1) {
            if (document.getElementById(`cella-${i}-${z + 1}`).innerText == "") {
               document.getElementById(`cella-${i}-${z + 1}`).innerText = document.getElementById(`cella-${i}-${z}`).innerText;
               document.getElementById(`cella-${i}-${z}`).innerText = "";
               spostamenti = true;
            }
            else if (document.getElementById(`cella-${i}-${z}`).innerText == document.getElementById(`cella-${i}-${z + 1}`).innerText) {
               document.getElementById(`cella-${i}-${z + 1}`).innerText = parseInt(document.getElementById(`cella-${i}-${z}`).innerText) * 2;
               document.getElementById(`cella-${i}-${z}`).innerText = "";
               punti += parseInt(document.getElementById(`cella-${i}-${z + 1}`).innerText);
               document.getElementsByTagName("span")[0].innerText = punti;
               spostamenti = true;
            }
            z++;
         }
      }
   }

   if (!spostamenti) {
      let lose = checkLose();
      if (lose) {
         return;
      }
   }

   genera2();
}