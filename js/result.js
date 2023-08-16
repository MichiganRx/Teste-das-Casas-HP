const params = new URLSearchParams(window.location.search);

const questionario1 = params.get('questionario1');
const questionario2 = params.get('questionario2');
const questionario3 = params.get('questionario3');
const questionario4 = params.get('questionario4');
const questionario5 = params.get('questionario5');
const questionario6 = params.get('questionario6');
const questionario7 = params.get('questionario7');

const questoes = [questionario1, questionario2, questionario3, questionario4, questionario5, questionario6, questionario7];

let grifinoria = {
    casa: 'grifinoria',
    value: 0,
};
let sonserina = {
    casa: 'sonserina',
    value: 0,
};
let lufalufa = {
    casa: 'lufalufa',
    value: 0,
};
let corvinal = {
    casa: 'corvinal',
    value: 0,
};

questoes.map(item => {
    switch(item) {
        case 'grifinoria': 
            grifinoria.value++;
            break;
        case 'sonserina': 
            sonserina.value++;
            break;
        case 'lufalufa': 
        lufalufa.value++;
            break;
        case 'corvinal': 
        corvinal.value++;
            break;
    }
});

let casas = [grifinoria, sonserina, lufalufa, corvinal];

casas.sort(function(a, b) {
    var tituloA = a.value;
    var tituloB = b.value;

    if (tituloA < tituloB) {
        return -1;
    }
    if (tituloA > tituloB) {
        return 1;
    }
    return 0;
});

const resultadoSonserina = document.getElementById("sonserina");
const resultadoLufaLufa = document.getElementById("lufa-lufa");
const resultadoCorvinal = document.getElementById("corvinal");
const resultadoGrifinoria = document.getElementById("grifinoria");

casas =  casas.reverse();
const option = casas[0];

const casasClasses = {
    'sonserina': resultadoSonserina,
    'lufalufa': resultadoLufaLufa,
    'corvinal': resultadoCorvinal,
    'grifinoria': resultadoGrifinoria
  };
  
  for (const casa in casasClasses) {
    if (option.casa === casa) {
      casasClasses[casa].classList.remove("display-none");
    } else {
      casasClasses[casa].classList.add("display-none");
    }
  }
  