function executar() {
  console.log(
    `14. Estrutura de Repetição: do...while com confirmação de saída. Mostrar uma mensagem ao usuário e pedir para ele informar se deseja fechar a mensagem ou não;`
  );

  let sair = false;

  do {
    let acao = prompt(`Para fechar a mensagem digite sair:`);

    if (acao == "sair") {
      sair = true;
    }
  } while (sair == false);
}

var Ex14 = document.getElementById("Ex14");
Ex14.addEventListener("click", executar);
