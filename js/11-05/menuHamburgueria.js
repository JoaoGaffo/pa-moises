const prompt = require("prompt-sync")();
 
const hamburgueria = [];

function exibirMenu() {
  console.log("\n Menu da Hamburgueria");
  console.log("1. Adicionar Hambúrguer");
  console.log("2. Ver Trodos os Hambúrgueres");
  console.log("3. Atualizar Hambúrguer");
  console.log("4. deletar Hambúrguer");
  console.log("5. sair");

  //console.log(exibirMenu);
}

function adicionarHamburguer() {
  const nome = prompt("Nome do hambúrguer:");
  const valor = prompt("Preço do hambúrguer:");
  hamburgueria.push({nome, valor});
  console.log("Hambúrguer adicionado com sucesso!");
}

function verHamburgúers(){
    if (hamburgueria.length === 0) {
     console.log("Nenhum hambúrguer encontrado!");
     return;
    }
}

console.log("\n Lista de Hambúrguers");
for (let i=0; i < hamburgueria.length; i++) {
    let hamburguer = hamburgueria(i);
    console.log(`${i + 1}. Nome ${hamburguer.nome}, Preço: R$ ${hamburguer .valor}`)
}