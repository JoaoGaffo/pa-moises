const readline = require("readline").createInterface({
  //abre o terminal
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual o seu salário?", (salario) => {
  salario = Number(salario);

  if (salario > 2000) {
    console.log("Parabéns! Seu crédito foi liberado!");
  } else {
    console.log(
      "Sentimos muito! Não pudemos liberar o seu crédito pois o seu salário é igual ou inferior a 2.000!",
    );
  }

  readline.close();
});
