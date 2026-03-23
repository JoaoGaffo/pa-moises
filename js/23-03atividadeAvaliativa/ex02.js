const readline = require("readline").createInterface({
  //abre o terminal
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual é o seu salário base?", (salario_base) => {
  readline.question("Qual o valor total das suas vendas?", (vendas) => {
    salario_base = Number(salario_base);
    vendas = Number(vendas);

    if (vendas > 3000) {
      const calcular_salario = (salario_base * 10/100 + salario_base)

      console.log(
        `Parabéns! As suas vendas foram maiores que 3.000 reais, então esse mês você irá receber ${calcular_salario} reais`,
      );
    } else {
      console.log(
        `Como as suas vendas foram menores ou iguais que o valor de 3.000 reais, você irá receber apenas ${salario_base} reais`,
      );
    }

    readline.close()
  });
});
