function executar() {
  console.log(
    `7. Estrutura de Repetição: for...of (para strings). Iterar sobre os caracteres de uma string usando for...of;`
  );

  let palavra;

  do {
    palavra = prompt("Digite uma palavra");
  } while (!isNaN(palavra));

  for (const letra of palavra) {
    console.log(`Letra: ${letra}`);
  }
}

var Ex7 = document.getElementById("Ex7");
Ex7.addEventListener("click", executar);
