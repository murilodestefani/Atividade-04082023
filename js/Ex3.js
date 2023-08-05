function executar() {
  console.log(
    `3. Verificar se um número é divisível por 3 e 5 ao mesmo tempo;`
  );

  function verificaDivisao(numero) {
    if (numero % 3 == 0 && numero % 5 == 0) {
      return "é divisível";
    } else {
      return "não é divisível";
    }
  }

  let numero;

  do {
    numero = prompt("Digite um número");
  } while (isNaN(numero));

  console.log(`O número ${numero} ${verificaDivisao(numero)}.`);
}

var Ex3 = document.getElementById("Ex3");
Ex3.addEventListener("click", executar);