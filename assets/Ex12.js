console.log(`12. Estrutura de Repetição: for...of com indexação. Imprimir os elementos de um array com suas posições usando for...of com indexação;`);

let array = ['😁', '🤣', '😍', '😎', '🤠'];

for (const [index, value] of array.entries()) {
    console.log(`Elemento ${value} na posição ${index}`);
}