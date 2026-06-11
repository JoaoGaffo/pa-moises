const readline = require("readline").createInterface({
  //abre o terminal
  input: process.stdin,
  output: process.stdout,
});

function menu() {
  console.log("1 - Abastecer");
  console.log("2 - Decolar");
  console.log("3 - Ver combustivel");
  console.log("4 - Sair");

  readline.question("Escolha: ", (opcao) => {
    if (opcao == 4) {
      readline.close();
    } else {
      menu();
    }
  });
}

menu();