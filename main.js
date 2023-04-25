const {gets, print} = require('./funcoes-auxiliares');

const numeroSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numeroSorteados.push(numeroSorteado);
}

print(numeroSorteados);