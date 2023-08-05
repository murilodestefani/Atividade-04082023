function executar() {
  console.log(`5. Verificar se um número é positivo, negativo ou zero;`);

  function verificaNumeor(numero) {
    if (numero > 0) {
      return "positivo";
    } else if (numero < 0) {
      return "negativo";
    } else {
      return "igual a zero";
    }
  }

  let numero;

  do {
    numero = prompt("Digite um número");
  } while (isNaN(numero));

  console.log(`O número é ${verificaNumeor(numero)}`);
}

var Ex5 = document.getElementById("Ex5");
Ex5.addEventListener("click", executar);