const readline = require("readline").createInterface({
  //abre o terminal
  input: process.stdin,
  output: process.stdout,
});

function pedir() {
  readline.question("Digite a palavra magica: ", (palavra) => {
    if (palavra == "abracadabra") {
      console.log("Acertou");
      readline.close();
    } else {
      pedir();
    }
  });
}

pedir();