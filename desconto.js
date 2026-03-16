const readline = require("readline").createInterface({
  //abre o terminal
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite o preço do produto:", (preco) => {

    preco = Number(preco)

  if (preco >= 500) {
    
    const porcentagem = (preco * (20 / 100))
    console.log(
      `Você recebeu um desconto de 20%! O preço final é: ${preco - porcentagem}`,
    );
  } else if (preco >= 400) {
    const porcentagem = (preco * (15 / 100))
    console.log(
      `Você recebeu um desconto de 15%! O preço final é: ${preco - porcentagem}`,
    );
  } else if (preco >= 200) {
    const porcentagem = (preco * (10 / 100))
    console.log(
      `Você recebeu um desconto de 10%! O preço final é: ${preco - porcentagem}`,
    );
  } else {
    console.log(
      `Você não recebeu desconto! O preço final é: ${preco}`,
    );
  }
  readline.close();
});
