const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite a senha:", (senha) => {
  senha = Number(senha);

  while (senha == 1234) {
    readline.question("Digite a senha:", (senha) => {
      senha = Number(senha);
    });
  }
  readline.close();
});
