const readline = require("readline").createInterface({
  //abre o terminal
  input: process.stdin,
  output: process.stdout,
});

/*readline.question("Digite a primeira nota:", (nota1) => {
  readline.question("Digite a segunda nota:", (nota2) => {
    const média = (Number(nota1) + Number(nota2)) / 2;

    if (média > 6) {
      console.log(`A média é: ${média}, aluno aprovado!)`);
    } else {
      console.log(`A média é: ${média}, aluno reprovado!)`);
    }
    readline.close();
  });
});*/


readline.question("Digite a quantidade de leite em litros:", (leite) => {
  readline.question("Digite a segunda nota:", (nota2) => {
    const média = (Number(leite) + Number(nota2)) / 2;

    if (média > 6) {
      console.log(`A média é: ${média}, aluno aprovado!)`);
    } else {
      console.log(`A média é: ${média}, aluno reprovado!)`);
    }
    readline.close();
  });
});

