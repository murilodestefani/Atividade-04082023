console.log(`15. Escreva um algoritmo que solicite um número inteiro positivo ao usuário e verifique se ele é um número primo. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo;`);

let numero, x = 1, divisor = 0;

do {
    numero = prompt (`Digite um número`);

} while (isNaN(numero) || numero < 0);

while (x <= numero) {
    if (numero % x == 0) {
        divisor++;
    }
    x++;
}

if (divisor == 2) {
    console.log(`${numero} é primo.`);
} else {
    console.log(`${numero} não é primo.`);
}