const readline = require("readline").createInterface({
  //abre o terminal
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite sua idade: ", (idade) => {
  readline.question("Possui pedra magica? (sim/nao): ", (pedra) => {
    idade = Number(idade);

    if (idade > 16 && pedra.toLowerCase() == "sim") {
      console.log("Pode entrar no portal");
    } else {
      console.log("Acesso negado");
    }

    readline.close();
  });
});