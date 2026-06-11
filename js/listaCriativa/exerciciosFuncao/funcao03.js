function gerarNome() {
  let inicio = ["Tha", "Ze", "Lu", "Mor", "Kai"];
  let fim = ["rion", "kron", "mera", "dor", "lan"];

  let parte1 = inicio[Math.floor(Math.random() * inicio.length)];
  let parte2 = fim[Math.floor(Math.random() * fim.length)];

  return parte1 + parte2;
}

console.log(gerarNome());