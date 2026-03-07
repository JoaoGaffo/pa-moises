//Medição da área do triângulo

const readline = require("readline").createInterface({
  //abre o terminal
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite a alturas do triângulo:", (altura) => {
  readline.question("Digite a largura do triângulo:", (largura) => {

    const resultado = (Number(altura) + Number(largura)) / 2;

    console.log(`A área do triângulo é: ${resultado})`);
    readline.close();
  });
});


