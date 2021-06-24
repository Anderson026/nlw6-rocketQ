// exportando a função do modal com os seus métodos
export default function Modal() {
  // seleciona a classe modal-wrapper para usar nas funções
  const modalWrapper = document.querySelector(".modal-wrapper");
  // pega a classe button e cancelar para remover a modal
  const cancelButton = document.querySelector(".button.cancel");
  // evento para fechar a modal
  cancelButton.addEventListener("click", close);

  function open(){
    // funcionalidade para atribuir a classe active para a modal
    modalWrapper.classList.add("active");
  }
  function close() {
    // funcionalidade para remover a classe active da modal
    modalWrapper.classList.remove("active");

  }

  return {
    open,
    close
  }
}

// parei as 1:27:22 do 4 dia da NLW