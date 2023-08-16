const proximo1 = document.getElementById("proximo1");
const proximo2 = document.getElementById("proximo2");
const proximo3 = document.getElementById("proximo3");
const proximo4 = document.getElementById("proximo4");
const proximo5 = document.getElementById("proximo5");
const proximo6 = document.getElementById("proximo6");
const anterior2 = document.getElementById("anterior2");
const anterior3 = document.getElementById("anterior3");
const anterior4 = document.getElementById("anterior4");
const anterior5 = document.getElementById("anterior5");
const anterior6 = document.getElementById("anterior6");
const anterior7 = document.getElementById("anterior7");
const questao1 = document.getElementById("questao1");
const questao2 = document.getElementById("questao2");
const questao3 = document.getElementById("questao3");
const questao4 = document.getElementById("questao4");
const questao5 = document.getElementById("questao5");
const questao6 = document.getElementById("questao6");
const questao7 = document.getElementById("questao7");


proximo1.addEventListener("click", changeScreenTwo)
proximo2.addEventListener("click", changeScreenThree)
proximo3.addEventListener("click", changeScreenFour)
proximo4.addEventListener("click", changeScreenFive)
proximo5.addEventListener("click", changeScreenSix)
proximo6.addEventListener("click", changeScreenSeven)

anterior2.addEventListener("click", changeScreenOne)
anterior3.addEventListener("click", changeScreenTwo)
anterior4.addEventListener("click", changeScreenThree)
anterior5.addEventListener("click", changeScreenFour)
anterior6.addEventListener("click", changeScreenFive)
anterior7.addEventListener("click", changeScreenSix)

function changeScreenOne() {
    questao1.classList.remove("display-none");
    questao2.classList.add("display-none");
    questao3.classList.add("display-none");
    questao4.classList.add("display-none");
    questao5.classList.add("display-none");
    questao6.classList.add("display-none");
    questao7.classList.add("display-none");
}

function changeScreenTwo() {
    questao1.classList.add("display-none");
    questao2.classList.remove("display-none");
    questao3.classList.add("display-none");
    questao4.classList.add("display-none");
    questao5.classList.add("display-none");
    questao6.classList.add("display-none");
    questao7.classList.add("display-none");
}

function changeScreenThree() {
    questao1.classList.add("display-none");
    questao2.classList.add("display-none");
    questao3.classList.remove("display-none");
    questao4.classList.add("display-none");
    questao5.classList.add("display-none");
    questao6.classList.add("display-none");
    questao7.classList.add("display-none");
}

function changeScreenFour() {
    questao1.classList.add("display-none");
    questao2.classList.add("display-none");
    questao3.classList.add("display-none");
    questao4.classList.remove("display-none");
    questao5.classList.add("display-none");
    questao6.classList.add("display-none");
    questao7.classList.add("display-none");
}

function changeScreenFive() {
    questao1.classList.add("display-none");
    questao2.classList.add("display-none");
    questao3.classList.add("display-none");
    questao4.classList.add("display-none");
    questao5.classList.remove("display-none");
    questao6.classList.add("display-none");
    questao7.classList.add("display-none");
}

function changeScreenSix() {
    questao1.classList.add("display-none");
    questao2.classList.add("display-none");
    questao3.classList.add("display-none");
    questao4.classList.add("display-none");
    questao5.classList.add("display-none");
    questao6.classList.remove("display-none");
    questao7.classList.add("display-none");
}

function changeScreenSeven() {
    questao1.classList.add("display-none");
    questao2.classList.add("display-none");
    questao3.classList.add("display-none");
    questao4.classList.add("display-none");
    questao5.classList.add("display-none");
    questao6.classList.add("display-none");
    questao7.classList.remove("display-none");
}

// ----------------------POP UP------------------------------------------
const form = document.getElementById('myForm');
const warningPopup = document.getElementById('warningPopup');

form.addEventListener('submit', (event) => {
  const questionarios = form.querySelectorAll('input[type="radio"]:checked');
  
  if (questionarios.length < 7) {
    event.preventDefault();
    showPopup();
  }
});

function showPopup() {
  warningPopup.style.display = 'block';
  setTimeout(() => {
    warningPopup.style.display = 'none';
  }, 3000);
}
