function executar() {
  console.log(
    `8. Estrutura de Repetição: while com break. Encontrar o primeiro número divisível por 5 e 7 usando while com break; (pesquisar)`
  );

  let numero = 1;

  while (!(numero % 5 == 0 && numero % 7 == 0)) {
    if (numero % 5 == 0 && numero % 7 == 0) {
      break;
    } else {
      numero++;
    }
  }

  console.log(numero);
}

var Ex8 = document.getElementById("Ex8");
Ex8.addEventListener("click", executar);