//pegando elementos HTML necessários para o game

const numberMax = document.querySelector("#number-max");
const numberMin = document.querySelector("#number-min");
const remainingsAttemps = document.querySelector("#remainings-attemps");
const attempWord = document.querySelector("#attemp-word");
const numberInput = document.querySelector("#number-input");
const guessBtn = document.querySelector("#guess-btn");
const hintText = document.querySelector("#hint-text");
const restartBtn = document.querySelector("#restart-btn");

let min = 1; //valor minímo do número secreto
let max = 100; // valor máximo do número secreto
let secretNumber = Math.floor(Math.random() * (max - min) + min); //gera um número aleatorio
let attemps = 10; // número de tentativas para acertar o número

// mostra o valor minimo para acertar o número
numberMin.textContent = min;
// mostra o valor máximo para acertar o número
numberMax.textContent = max;

//exibe o quantidade de tentativas restantes
remainingsAttemps.textContent = attemps;
//formatação de texto para exibir tentativas
attempWord.textContent = attemps > 1 ? "tentativas" : "tentativa";

//função para verificar o número secreto
function isSecretNumber() {
  if (numberInput.value == secretNumber) {
    hintText.textContent = "parabéns, voçê acertou o número secreto";
    guessBtn.setAttribute("disabled", true); //desativa botão de chute
    restartBtn.removeAttribute("disabled"); //habilita botão de reiniciar
  } else {
    if (numberInput.value > secretNumber) {
      hintText.textContent = "o chute foi maior que o número secreto.";
      attemps--;
    } else {
      hintText.textContent = "o chute foi menor que o número secreto.";
      attemps--;
    }
  }

  if (attemps == 0) {
    hintText.textContent = `que pena, voçê não acertou o número secreto que era: ${secretNumber}`;
    guessBtn.setAttribute("disabled", true);
    restartBtn.removeAttribute("disabled");
  }

  numberInput.value = ""; // limpa o input de chute
  remainingsAttemps.textContent = attemps; // atualiza número de tentativa restantes
  attempWord.textContent = attemps > 1 ? "tentativas" : "tentativa";
}

//função para reiniciar o jogo
function resetGame() {
  min = 1;
  max = 100;
  secretNumber = Math.floor(Math.random() * (max - min) + min);
  attemps = 10;
  guessBtn.removeAttribute("disabled");
  restartBtn.setAttribute("disabled", true);

  numberMin.textContent = min;
  numberMax.textContent = max;
  remainingsAttemps.textContent = attemps;
  attempWord.textContent = attemps > 1 ? "tentativas" : "tentativa";
  //limpa o texto de dica
  hintText.textContent = "";
}

//evento para verificar o número secreto
guessBtn.addEventListener("click", isSecretNumber);

//evento para reiniciar o game
restartBtn.addEventListener("click", resetGame);
