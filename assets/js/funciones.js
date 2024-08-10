export function getid(id) {
   return document.getElementById(id);
 }
 export function value(id){
   return document.getElementById(id).value;
 }
 
 export function ToastSuccess(text, duration = 8000, style = {background: "linear-gradient(to right, #0a8a01, #16e300)"}) {
   Toastify({
      text: text,
      duration: duration,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: style,
      onClick: function () {}
   }).showToast();
  }
 
  export function ToastError(text, duration = 10000, style = {background: "linear-gradient(to right, #d40101, #ff5959)"}) {
   Toastify({
      text: text,
      duration: duration,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: style,
      onClick: function () {}
   }).showToast();
  }
 
  export function ToastWarning(text, duration = 8000, style = {background: "linear-gradient(90deg, rgba(204,157,0,1) 40%, rgba(255,231,0,1) 70%)"}) {
   Toastify({
      text: text,
      duration: duration,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: style,
      onClick: function () {}
   }).showToast();
  }
 
  export function ToastInfo(text, duration = 8000, style = {background: "linear-gradient(to right, #1d9bfc, #8ae1ff)"}) {
   Toastify({
      text: text,
      duration: duration,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: style,
      onClick: function () {}
   }).showToast();
  }
 
 export function BotonSuccess(idBoton) {
     // Selecciona el botón por su identificador
    let boton = document.getElementById(idBoton);
 
    // Cambia el fondo del botón a un color aleatorio
    boton.style.backgroundColor = "#00ffe2";
    boton.style.color = "#25273c";
 }
 export function BotonError(idBoton) {
    // Selecciona el botón por su identificador
    let boton = document.getElementById(idBoton);
 
    // Cambia el fondo del botón a un gradiente lineal
    boton.style.background = "linear-gradient(to right, #d40101, #ff5959)";
    boton.style.color = "white";
 }
 
 /**
  * Descarga un archivo en el navegador.
  * El argumento debe ser la ruta de un archivo hasta el final con su extensión.
  * @param {string} archivo La ruta relativa o absoluta seguida de el nombre del archivo con extensión.
  */
 export function descargarArchivo(archivo) {
    var link = document.createElement("a");
    link.href = archivo;
    link.download = ''; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // delete link;
  }
 
 