const readline = require("readline").createInterface({
  //abre o terminal
  input: process.stdin,
  output: process.stdout,
});

readline.question("Qual o valor que você deseja converter (R$)?", (valor) => {
  readline.question(
    "Para qual moeda você deseja converter o valor: Dólar (USD), Euro (EUR) ou Libras Esterlinas (GBP)?",
    (moeda) => {
      valor = Number(valor);

      if ((moeda = "USD")) {
        const USD = valor * 5.27;
        USD = int(USD);

        console.log(`Convertendo ${valor} Reais para dólar: ${USD}`);
      
    } else if ((moeda = "EUR")) {
        const EUR = valor * 6.04;
        EUR = int(EUR);

        console.log(`Convertendo ${valor} Reais para euro: ${EUR}`);
        
      } else if ((moeda = "GBP")) {
        const GBP = valor * 6.04;
        GBP = int(GBP);

        console.log(
          `Convertendo ${valor} Reais para libras esterlinas: ${GBP}`,
        );
      }
      readline.close();
    },
  );
});
