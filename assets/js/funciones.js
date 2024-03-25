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

 export function ToastWarning(text, duration = 8000, style = {background: "linear-gradient(90deg, rgba(162,104,0,1) 11%, rgba(242,167,10,1) 48%)"}) {
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


