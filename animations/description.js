const textToType = ["Otávio Augusto", "FullStack Developer"];
const typingContainer = document.getElementById("typing-container");
let index = 0;

function typeText() {
  if (index < textToType.length) {
    let text = textToType[index];
    let textIndex = 0;

    function addLetter() {
      if (textIndex <= text.length) {
        typingContainer.innerHTML = text.substring(0, textIndex);
        textIndex++;
        setTimeout(addLetter, 100); // Ajuste a velocidade da digitação aqui
      } else {
        setTimeout(eraseLetter, 1000); // Espera 1 segundo e inicia a exclusão de letras
      }
    }

    function eraseLetter() {
      if (textIndex >= 0) {
        typingContainer.innerHTML = text.substring(0, textIndex);
        textIndex--;
        setTimeout(eraseLetter, 100); // Ajuste a velocidade da exclusão aqui
      } else {
        index++;
        setTimeout(typeText, 1000); // Espera 1 segundo e passa para o próximo item da lista
      }
    }

    addLetter();
  } else {
    index = 0; // Reseta o índice para repetir a animação
    setTimeout(typeText, 1000); // Espera 1 segundo e inicia a animação novamente
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeText();
});
