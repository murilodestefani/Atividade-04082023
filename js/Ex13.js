function executar() {
  console.log(
    `13. Estrutura de Repetição: while com incremento personalizado. Imprimir os números de 1 a 10 pulando de 2 em 2 usando while com incremento personalizado;`
  );

  let numero = 1;

  while (numero <= 10) {
    console.log(numero);
    numero += 2;
  }
}

var Ex13 = document.getElementById("Ex13");
Ex13.addEventListener("click", executar);
