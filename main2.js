// 2.1 Inserta dinamicamente en un html un div vacio con javascript

const newDiv = document.createElement("div");
document.body.appendChild(newDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const newDivContainP = document.createElement("div");
document.body.appendChild(newDivContainP);

const newP = document.createElement("p");
newDivContainP.appendChild(newP);

// 2.3 Inserta dinamicamente en un html un div que contenga una p con javascript.

const newDiv2 = document.createElement("div"); //creo elemento <div>
document.body.appendChild(newDiv2); //añado elemento div al DOM

for (let i = 0; i < 6; i++) {  
    const newP2 = document.createElement("p"); 
    newDiv2.appendChild(newP2);
}

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const newPtres = document.createElement("p");
document.body.appendChild(newPtres);
newPtres.insertAdjacentText("afterbegin", "Soy Dinámico");


