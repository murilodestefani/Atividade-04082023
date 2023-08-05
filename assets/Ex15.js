console.log(`15. Escreva um algoritmo que solicite um número inteiro positivo ao usuário e verifique se ele é um número primo. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo;`);

let numero;

do {
    numero = prompt (`Digite um número`);

    if (numero % 1 == 0 && numero % numero == 0) {
        console.log(`O número ${numero} é primo.`);
        break;
    }
    if (numero % 1 != 0 && numero % numero != 0) {
        console.log(`O número ${numero} não é primo.`);
        break;
    }
} while (isNaN(numero));