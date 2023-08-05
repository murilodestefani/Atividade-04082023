console.log(`10. Estrutura de Repetição: for...in (para arrays). Iterar sobre os índices de um array usando for...in;`);

let array = ['😁', '🤣', '😍', '😎', '🤠'];

for (const index in array) {
    console.log(`O elemento ${array[index]} está no índice ${index}`);
}