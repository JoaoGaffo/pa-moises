const readline = require("readline").createInterface({
  //abre o terminal
  input: process.stdin,
  output: process.stdout,
});

readline.question("Temperatura: ", (temperatura) => {
  readline.question("Nivel de barulho: ", (barulho) => {
    readline.question("Horario: ", (horario) => {
      temperatura = Number(temperatura);
      barulho = Number(barulho);
      horario = Number(horario);

      if ((temperatura > 35 || barulho > 80) && horario <= 24) {
        console.log("O dragao acordou");
      } else {
        console.log("O dragao continua dormindo");
      }

      readline.close();
    });
  });
});