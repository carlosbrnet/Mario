const formulario = document.querySelector(".formulario-caixa");
const fundoEscuro = document.querySelector(".mascara-formulario");
 

function mostrarForm() {  // Evento aplicado no BOTÃO
  formulario.style.left = "50%";
  formulario.style.transform = "translateX(-50%)";
  fundoEscuro.style.visibility = "visible";
}

function esconderForm() {  // Evento aplicado no FUNDO ESCURO
  formulario.style.left = "-200px"; 
  formulario.style.transform = "translateX(0)";
  fundoEscuro.style.visibility = "hidden";
  
  
}
