const readline = require("readline").createInterface({
  //abre o terminal
  input: process.stdin,
  output: process.stdout,
});

let sobreviventes = [];
let energia = 100;
let inventario = [];

function adicionarSobrevivente() {
  readline.question("Nome do sobrevivente: ", (nome) => {
    sobreviventes.push(nome);
    console.log("Sobrevivente cadastrado");
    menu();
  });
}

function listarSobreviventes() {
  if (sobreviventes.length == 0) {
    console.log("Nenhum sobrevivente cadastrado");
  } else {
    for (let i = 0; i < sobreviventes.length; i++) {
      console.log((i + 1) + " - " + sobreviventes[i]);
    }
  }
  menu();
}

function procurarSobrevivente() {
  readline.question("Nome para procurar: ", (nome) => {
    let encontrado = false;

    for (let i = 0; i < sobreviventes.length; i++) {
      if (sobreviventes[i].toLowerCase() == nome.toLowerCase()) {
        encontrado = true;
      }
    }
    if (encontrado) {
      console.log("Sobrevivente encontrado");
    } else {
      console.log("Sobrevivente nao encontrado");
    }
    menu();
  });
}

function adicionarItem() {
  readline.question("Item encontrado: ", () => {
    menu();
  });
}


menu();