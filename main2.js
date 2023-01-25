// 2.1 Inserta dinamicamente en un html un div vacio con javascript

const newDiv = document.createElement("div");
document.body.appendChild(newDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const newDivContainP = document.createElement("div");
document.body.appendChild(newDivContainP);

const newP = document.createElement("p");
newDivContainP.appendChild(newP);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

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


// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const titulo = document.querySelector(".fn-insert-here");
titulo.insertAdjacentHTML("afterbegin", "Wubba Lubba dub dub");


// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const listaDesordenada = document.createElement("ul");
document.body.appendChild(listaDesordenada);

for (const app of apps) {
    const lista = document.createElement("li");
    listaDesordenada.appendChild(lista);
    lista.insertAdjacentHTML("afterbegin", app);
}


// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const removeData = document.querySelectorAll(".fn-remove-me");
for (const data of removeData) {
    data.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.





// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
