const { interceptors } = require("undici-types");

const readline = require("readline").createInterface({
  //abre o terminal
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite o valor que você quer retirar:", function (quantia) {
  quantia = Int(quantia);

  let cinquenta = quantia / 50;
    quantia = quantia%50;

  let vinte = quantia / 20;
    quantia = quantia%20;

  let dez = quantia / 10;
    quantia = quantia%10;

    console.log(`Você irá receber: ${cinquenta} notas de cinquenta,  ${vinte} notas de 20,  ${dez} notas de dez`)

  readline.close();
});
  