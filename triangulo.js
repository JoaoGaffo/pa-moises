const readline = require("readline").createInterface({
  //abre o terminal
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite o primeiro lado do triângulo:", (ladoA) => {
  readline.question("Digite o segundo lado do triângulo:", (ladoB) => {
    readline.question("Digite o terceiro lado do triângulo:", (ladoC) => {
      ladoA = Number(ladoA);
      ladoB = Number(ladoB);
      ladoC = Number(ladoC);

      if ((ladoA = ladoB) & (ladoB = ladoC)) {
        console.log(`O seu triângulo é um triângulo equilátero`);
      } else if ((ladoA =! ladoB) && (ladoB = ladoC) || (ladoB =! ladoC) && (ladoB = ladoA)) {
        console.log(`O seu triângulo é um triângulo isóceles`);
      } else {
        console.log(`O seu triângulo é um triângulo escaleno`);
      } 
      readline.close();
    });
  });
});
