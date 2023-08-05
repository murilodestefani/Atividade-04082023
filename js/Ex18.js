function executar() {
  console.log(
    `18. Jogo de Adivinhação - Escreva um algoritmo que gera um número aleatório entre 1 e 100 e permite que o usuário adivinhe qual é esse número. O jogo deve fornecer  icas ao usuário, indicando se o número correto é maior ou  enor do que a tentativa atual. O jogo deve continuar até que o usuário acerte o número`
  );

  let numero,
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;

  do {
    numero = prompt(`Digite um número`);

    if (numero == numeroAleatorio) {
      alert(`Parabéns! Você acertou o número ${numeroAleatorio}`);
      break;
    } else if (numero < numeroAleatorio) {
      alert(`Você errou! O número ${numero} é menor que o número aleatório`);
    } else if (numero > numeroAleatorio) {
      alert(`Você errou! O número ${numero} é maior que o número aleatório`);
    } else {
      alert(`Você deve digitar um número`);
    }
  } while (numero != numeroAleatorio);
}

var Ex18 = document.getElementById("Ex18");
Ex18.addEventListener("click", executar);
