function executar() {
  console.log(`1. Verificar se um caractere é uma vogal ou consoante;`);

  function verificarCaractere(caractere) {
    caractere = caractere.toLowerCase();

    if (caractere >= "a" && caractere <= "z") {
      if (
        caractere === "a" ||
        caractere === "e" ||
        caractere === "i" ||
        caractere === "o" ||
        caractere === "u"
      ) {
        return "Vogal";
      } else {
        return "Consoante";
      }
    }
  }

  let caractereTeste;

  do {
    caractereTeste = prompt("Digite uma letra");
  } while (!isNaN(caractereTeste));

  console.log(
    `O caractere "${caractereTeste}" é uma ${verificarCaractere(
      caractereTeste
    )}.`
  );
}

var Ex1 = document.getElementById("Ex1");
Ex1.addEventListener("click", executar);
