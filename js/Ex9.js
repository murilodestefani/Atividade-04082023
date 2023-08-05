function executar() {
  console.log(
    `9. Estrutura de Repetição: do...while com continue. Imprimir apenas os números pares de 1 a 10 usando do...while com continue; (pesquisar)`
  );

  let numero = 1;

  do {
    if (numero % 2 != 0) {
      numero++;
      continue;
    }
    console.log(numero);
    numero++;
  } while (numero <= 10);
}

var Ex9 = document.getElementById("Ex9");
Ex9.addEventListener("click", executar);
