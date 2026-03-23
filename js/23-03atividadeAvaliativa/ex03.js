const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Para calcular o seu IMC, informe o seu peso (kg): ", (peso) => {
    readline.question("Agora informe a sua altura (m) utilizando ponto para separar as unidades (Ex: 1.60): ", (altura) => {
        
         peso = Number(peso.replace(",", "."));
         altura = Number(altura.replace(",", "."));

        const IMC = peso / (altura * altura);

        if (IMC < 18.5) {
          console.log(`Seu IMC é de ${IMC}, você está abaixo do peso!`);
        } else if (IMC >= 18.5 && IMC <= 24.9) {
          console.log(`Seu IMC é de ${IMC}, você está com um peso normal!`);
        } else if (IMC >= 25 && IMC <= 29.9) {
          console.log(`Seu IMC é de ${IMC}, você está com sobrepeso!`);
        } else {
          console.log(`Seu IMC é de ${IMC}, você está com obesidade!`);
        } 
        readline.close();
      });
  });
