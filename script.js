const formulario = document.querySelector(".formulario-caixa");
const fundoEscuro = document.querySelector(".mascara-formulario");
 

function mostrarForm() {
  formulario.style.left = "50%";
  formulario.style.transform = "translateX(-50%)";
  fundoEscuro.style.visibility = "visible";
}

function esconderForm() { 
  formulario.style.left = "-200px"; 
  formulario.style.transform = "translateX(0)";
  fundoEscuro.style.visibility = "hidden";
  
}
