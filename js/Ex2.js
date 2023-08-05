function executar() {
  console.log(`2. Converter uma nota de 0 a 100 em conceito A, B, C, D ou F;`);

  function verificaConceito(nota) {
    if (nota >= 0 && nota <= 20) {
      return "F";
    } else if (nota >= 21 && nota <= 40) {
      return "D";
    } else if (nota >= 41 && nota <= 60) {
      return "C";
    } else if (nota >= 61 && nota <= 80) {
      return "B";
    } else {
      return "A";
    }
  }

  let nota;

  do {
    nota = prompt(`Digite uma nota de 0 a 100`);
  } while (isNaN(nota) && nota > 100);

  console.log(`O conceito da nota "${nota}" é ${verificaConceito(nota)}.`);
}

var Ex2 = document.getElementById("Ex2");
Ex2.addEventListener("click", executar);
