console.log(`17. Escreva um algoritmo que solicite ao usuário dois números inteiros e imprima todos os números pares entre esses dois valores (inclusive eles próprios);`);

let x, y, z;

do {
    x = prompt(`Digite o primeiro número:`);
} while (isNaN(x));

do {
    y = prompt(`Digite o segundo número:`);
} while (isNaN(y));

if (y < x) {
    z = x;
    x = y;
    y = z;
}

for (let i = x; i <= y; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}