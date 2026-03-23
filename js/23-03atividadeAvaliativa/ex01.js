const readline = require("readline").createInterface({
  //abre o terminal
  input: process.stdin,
  output: process.stdout,
});

readline.question("Quantos graus celsius está fazendo hoje?", (c) => {

    const celsius_para_fahrenheit = (c * 9/5 + 32);

    console.log(`Se hoje esá fazendo ${c} graus celsius, então está fazendo ${celsius_para_fahrenheit} graus fahrenheit!`)

    readline.close()
})