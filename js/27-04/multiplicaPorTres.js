const prompt = require('prompt-sync')();
const alert = console.log;

function multiplicarPorTres(numero) {
    return numero * 3;
}

let valor = prompt('Digite um número: ');
let numero = Number(valor);

    let resultado = multiplicarPorTres(numero);
    
    alert('O triplo é: ' + resultado);
