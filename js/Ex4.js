function executar() {
  console.log(`4. Verificar se um número é par ou ímpar;`);

  function verificaParImpar(numero) {
    if (numero % 2 == 0) {
      return "par";
    } else {
      return "ímpar";
    }
  }

  let numero;

  do {
    numero = prompt("Digite um número");
  } while (isNaN(numero));

  console.log(`O número ${numero} é ${verificaParImpar(numero)}`);
}

var Ex4 = document.getElementById("Ex4");
Ex4.addEventListener("click", executar);
