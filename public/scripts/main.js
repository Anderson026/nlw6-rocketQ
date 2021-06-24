// importando a modal
import Modal from "./modal.js";
// importando o modal para uma variável
const modal = Modal();

// pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
  // adicionar a escuta
  button.addEventListener("click", event => {
// abrir a modal

    modal.open();
  });
});

// pegar quando o marcar como lido for clicado
