let jogador = 100;
let inimigo = 100;

do {
  jogador -= Math.floor(Math.random() * 20) + 1;
  inimigo -= Math.floor(Math.random() * 20) + 1;

  console.log("Jogador: " + jogador);
  console.log("Inimigo: " + inimigo);
} while (jogador > 0 && inimigo > 0);

if (jogador > inimigo) {
  console.log("Jogador venceu");
} else {
  console.log("Inimigo venceu");
}