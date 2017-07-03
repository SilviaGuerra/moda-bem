var foto = document.getElementsByClassName("fotos_item");
var cerrar = document.getElementsByClassName("fotos_cerrar");

for(i= 0; i < foto.length; i++){
  foto[i].addEventListener("click", borrar);
}

function borrar(){
  this.style.display = "none";
}

var regresar = document.getElementById("restaurar");
regresar.addEventListener("click", restaurar);

function restaurar(){
  for(i = 0; i<foto.length; i++){
    foto[i].style.display = "inline";
  }
}
