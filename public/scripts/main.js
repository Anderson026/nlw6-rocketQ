// importando a modal
import Modal from "./modal.js";
// importando o modal para uma variável
const modal = Modal();
// mapeando o h2, p e button para manipular os dados pelo modal
const modalTitle = document.querySelector(".modal h2");
const modalDescription = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");

// pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
  // adicionar a escuta
  button.addEventListener("click", handleClick);
  
});

// quando o botão delete for clicado ele abre o modal
const deleteButton = document.querySelectorAll(".actions a.delete");

deleteButton.forEach(button => {
  button.addEventListener("click", (event) => handleClick(event, false));

});
  
function handleClick(event, check = true) {
  // remove o padrão do link dos botões de marcar como lida e excluir
  event.preventDefault();
  
  const text = check ? "Marcar como lida" : "Excluir";

  modalTitle.innerHTML = `${text} esta pergunta`;
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`;
  modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`;
  // booleano para remover ou adicionar a classe red na página de room.html
  check ? modalButton.classList.remove("red") : modalButton.classList.add("red");
  // abrir a modal
  modal.open();
}

