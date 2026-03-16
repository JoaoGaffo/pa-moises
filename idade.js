const readline = require("readline").createInterface({
  //abre o terminal
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite a sua idade:", (age) => {
  age = Number(age)
  if (age >= 60) {
    console.log(`Você é um idoso!`);
  } else if (age >= 18) {
    console.log(`Você é um adulto!`);
  } else if (age >= 12) {
    console.log(`Você é um adolescente!`);
  } else {
    console.log(`Você é uma criança!`);
  }
  readline.close();
});
