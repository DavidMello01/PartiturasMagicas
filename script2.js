const fs = require('fs');

const banda = localStorage.getItem("banda")
// banda = "metallica"

fs.readFileSync("PartiturasMagicas\artic monkeys", () => {
    // dentro de um vetor as imagens
})

const div = document.querySelector("#teste")

div.innerHTML += {
    `
    <img src="${vetor[0]}" id="teste">//esse ngc estranho ai serve pra fazer o strng ler o vetor  ---- para fzr o css e so botar ID e criar um css normal (cria outro arquivo css se pa fica mais facil de organizar)
    <img src="${vetor[1]}">
    `
}



