// script.js
let contadorCliques = 0;

function contarClique() {
  contadorCliques++;

  if (contadorCliques < 5) {
    alert(`Quer aceitar Jesus??? ${contadorCliques}ª chance. Pressione o botão de novo!`);
  } else {
    alert("Procure uma igrja mais próxima. Redirecionando para outra página.");
    // Substitua "outra_pagina.html" pelo nome da sua página de destino
    window.location.href = "outra_pagina.html";
  }
}


