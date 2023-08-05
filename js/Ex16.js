function executar() {
  console.log(
    `16. Escreva um algoritmo que imprima uma contagem regressiva de 10 até 1, mostrando cada número no console;`
  );

  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}

var Ex16 = document.getElementById("Ex16");
Ex16.addEventListener("click", executar);
