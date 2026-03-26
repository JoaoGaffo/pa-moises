const readline = require("readline").createInterface({
  //abre o terminal
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual é o final da placa do seu carro?:", (placa) => {
  placa = Number(placa);

  if (placa === 1 || placa === 2) {
    console.log(`O rodízio do seu carro é em todas as segundas-feiras`);
  } else if (placa === 3 || placa === 4) {
    console.log(`O rodízio do seu carro é em todas as terças-feiras`);
  } else if (placa === 5 || placa === 6) {
    console.log(`O rodízio do seu carro é em todas as quartas-feiras`);
  } else if (placa === 7 || placa === 8) {
    console.log(`O rodízio do seu carro é em todas as quintas-feiras`);
  } else {
    console.log(`O rodízio do seu carro é em todas as sextas-feiras`);
  }
  readline.close();
});