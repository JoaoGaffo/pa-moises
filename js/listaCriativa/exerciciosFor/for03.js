for (let i = 1; i <= 50; i++) {
  let linha = "";
  let quantidade = Math.floor(Math.random() * 10) + 1;

  for (let j = 1; j <= quantidade; j++) {
    linha += "☄";
  }

  console.log(linha);
}