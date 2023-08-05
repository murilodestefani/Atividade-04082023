console.log(`11. Estrutura de Repetição: while com múltiplas condições. Encontrar o menor número divisível por 2, 3 e 5 usando while com múltiplas condições;`);

let numero = 1;

while (!(numero % 2 == 0 && numero % 3 == 0 && numero % 5 == 0)) {
    numero++;
}

console.log(`O menor número divisível por 2, 3 e 5 é o "${numero}"`);