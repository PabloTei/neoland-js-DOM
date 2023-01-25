// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const showMe = document.querySelector(".showme");
console.log(showMe.textContent); 

// 1.2 Usa querySelector para mostrar por consola el botón con la clase .showme

const pillado = document.querySelector("#pillado");
console.log(pillado.textContent);

// 1.3 Usa querySelector para mostrar por consola todos los p

const showP = document.querySelectorAll("p");
for (const parrafo of showP) {
    console.log(parrafo.textContent);
}


// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const showPokemon = document.querySelectorAll(".pokemon");
for (const item of showPokemon) {
    console.log(item.textContent);
}

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".

const showCharacters = document.querySelectorAll('[data-function= "testMe"]');
for (const iterator of showCharacters) {
    console.log(iterator.textContent);
}

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".

const showThirdCharacter = document.querySelectorAll('[data-function= "testMe"]');
let i = 0;
for (const iterator of showThirdCharacter) {
    i++;
    if (i === 3) {
        console.log(iterator.textContent);
    }
}


/*for (const iterator of showThirdCharacter) {
    if (iterator.textContent === "Rick") {
        console.log(iterator.textContent)
    }
}*/




