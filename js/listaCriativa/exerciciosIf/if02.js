const readline = require("readline").createInterface({
  //abre o terminal
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite sua classe: ", (classe) => {
  classe = classe.toLowerCase();

  if (classe == "guerreiro") {
    console.log("Arma principal: espada");
  } else if (classe == "mago") {
    console.log("Arma principal: cajado");
  } else if (classe == "arqueiro") {
    console.log("Arma principal: arco");
  } else {
    console.log("Classe desconhecida");
  }

  readline.close();
});