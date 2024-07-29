const formulario = document.querySelector(".formulario-caixa");
const aparecer = document.querySelector(".mascara-formulario");
 

function mostrarForm() {
  formulario.style.left = "50%";
  formulario.style.transform = "translateX(-50%)";
  aparecer.style.visibility = "visible";
}

function esconderForm() { 
  formulario.style.left = "-200px"; 
  formulario.style.transform = "translateX(0)";
  aparecer.style.visibility = "hidden";
  
}
