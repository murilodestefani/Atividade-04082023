function executar() {
  console.log(
    `6. Estrutura de Repetição: forEach (para arrays). Imprimir os elementos de um array usando forEach;`
  );

  let vetor = ["😁", "🤣", "😍", "😎", "🤠"];

  vetor.forEach(function (item) {
    console.log(item);
  });
}

var Ex6 = document.getElementById("Ex6");
Ex6.addEventListener("click", executar);
