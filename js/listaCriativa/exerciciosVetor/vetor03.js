let tempos = [55, 49, 62, 44, 58, 50, 47, 61];

let melhor = tempos[0];
let pior = tempos[0];
let soma = 0;

for (let i = 0; i < tempos.length; i++) {
  if (tempos[i] < melhor) {
    melhor = tempos[i];
  }

  if (tempos[i] > pior) {
    pior = tempos[i];
  }

  soma += tempos[i];
}

console.log("Campeao: " + melhor);
console.log("Ultimo colocado: " + pior);
console.log("Media: " + soma / tempos.length);