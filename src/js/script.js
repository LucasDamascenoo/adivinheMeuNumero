//gerando o numero aleatorio
let numeroSurpresa = Math.floor(Math.random() * 20) + 1;

//numero do score inicial

let score = 20;

let highScore = 0;

let pontuacao = document.querySelector(".highscore");

// inserindo o numero aleatorio no HTML

// Criando o evento do click, verificando se o numero sorteado é igual ao o input

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").innerHTML = "Insira um número valido";
  } else if (guess === numeroSurpresa) {
    document.querySelector(".message").innerHTML = "Você acertou!!!";
    const insereNumeroSurpresa = document.querySelector(".number");
    insereNumeroSurpresa.innerHTML = numeroSurpresa;
    document.querySelector("body").style.backgroundColor = "#60b347";

    if (score > highScore) {
      highScore = score;

      pontuacao.innerHTML = highScore;
    }
  } else if (guess > numeroSurpresa) {
    if (score > 0) {
      document.querySelector(".message").innerHTML =
        "seu palpite foi maior que o número sorteado!";
      score--;
      document.querySelector(".score").innerHTML = score;
    } else {
      document.querySelector(".message").innerHTML = "Você perdeu o jogo";
    }
  } else {
    document.querySelector(".message").innerHTML =
      "seu palmite foi menor que o número sorteado!";
    document.querySelector(".score").innerHTML = score;
    score--;
  }
});

// resetando o jogo

const again = document.querySelector(".again");

again.addEventListener("click", () => {
  score = 20;
  numeroSurpresa = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".score").innerHTML = score;
  document.querySelector(".number").innerHTML = "?";
  document.querySelector(".message").innerHTML = "Comece a adivinhar...";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});

// highScore.
