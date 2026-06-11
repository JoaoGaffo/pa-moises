const readline = require("readline").createInterface({
  //abre o terminal
  input: process.stdin,
  output: process.stdout,
});

const numeroSecreto = 7;

function jogar() {
  readline.question("Digite um numero: ", (numero) => {
    numero = Number(numero);

    if (numero == numeroSecreto) {
      console.log("Acertou");
      readline.close();
    } else {
      console.log("Errou");
      jogar();
    }
  });
}

jogar();