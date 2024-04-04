import * as lym from "./ActulizacionLyM/modulo_lym.js"; 
import * as funciones_ces from "./CES/modulo_ces.js";   
import * as coppelpay from "./CoppelPay/modulo_coppelpay.js"; 
import * as campanaunica from "./CampanaUnica/modulo_campanaunica.js"; 
import * as referencias from "./ReferenciasIncompletas/modulo_referencias.js"; 
import * as datoserroneos from "./DatosErroneos/modulo_datoserroneos.js";
import * as ConOn from "./ConfirmacionOn/modulo_conon.js"; 
import * as ConOff from "./ConfirmacionOff/modulo_conoff.js"; 
import * as solargentina from "./SolCreditoArgentina/modulo_solargentina.js"; 
import * as monitor from "./Monitor/monitor.js";
import * as accion from "./funciones.js";

//esto es solo para darle estilo al console xD
console.log(
  "%c¿se te perdio algo?🤨",
  `font-size:15px;
background:#006fb9;
color:#FFE86F;
font-family:lucida sans;
padding:0.5rem;`
);

Swal.fire({
  customClass: "swal_width",
  title: "Informacion Que Cura",
  html: `
  <div class="container">
  <p>Alto ahí buen hombre:</p>
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#2196f3" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#fff" d="M22 22h4v11h-4V22zM26.5 16.5c0 1.379-1.121 2.5-2.5 2.5s-2.5-1.121-2.5-2.5S22.621 14 24 14 26.5 15.121 26.5 16.5z"></path>
</svg>
  <p>Este todavia es un sistema en continuo cambio, aun es un sistema en pañales<br>
  Puedes hacer algunos cierres, pero ten encuenta eso, es un sistema que aun le faltan muchas cosas
  </p>
  <p>puedes hacer los cierres sol credito argentina, las del cel(estan en prueba),<br>
  por el momento no puedes hacer el cierre de lym debido a una migracion que se tiene</p>
  <p>Buenas noches o buen dia 😁</p>
  </div>
  `,
  showCancelButton: false,
  showConfirmButton: false,
  showCloseButton: true,
  allowOutsideClick: false,
  heightAuto: false,
  showClass: {
    popup: "animate__animated animate__fadeInDown",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOutUp",
  },
});


// funcion para hacer scroll desde el boton de la flechita para arriba pariente
function scrollToElement(buttonId, elementId) {
  var scrollButton = document.getElementById(buttonId);
  var selected = document.getElementById(elementId);

  scrollButton.addEventListener("click", function () {
    selected.scrollIntoView({ behavior: "smooth" });
  });
}
document.addEventListener("DOMContentLoaded", function () {
  scrollToElement("serviciosbtn", "div1");
  scrollToElement("flechas", "div1");
  scrollToElement("flechaup", "center");
  scrollToElement("monitoresbtn", "div2");
  scrollToElement("logsbtn", "div3");
});
window.onscroll = function () {
  myFunction();
};
const coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// Obtén una referencia al botón o elemento que activará el modo oscuro
const toggleButton = document.getElementById("toggleBtn");

// Agrega un evento de clic al botón para alternar el modo oscuro
toggleButton.addEventListener("click", function () {
  // Verifica si el cuerpo del documento tiene la clase 'dark-mode'
  const body = document.body;
  const isDarkMode = body.classList.contains("dark-mode");
  const luna = document.getElementById("luna");
  const sol = document.getElementById("sol");
  const logo = document.getElementById("logo");
  const logo2 = document.getElementById("logo-white");

  // Si el modo oscuro está activado, desactívalo; de lo contrario, actívalo
  if (isDarkMode) {
    body.classList.remove("dark-mode");
    luna.style.display = "block";
    sol.style.display = "none";
    logo.style.display = "block";
    logo2.style.display = "none";
    console.log("Te uniste al camino de la luz");
  } else {
    body.classList.add("dark-mode");
    luna.style.display = "none";
    sol.style.display = "block";
    logo.style.display = "none";
    logo2.style.display = "block";
    console.log('Bienvenido al lado oscuro');
  }
});

//para saber en como esta configurado el navegador
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (prefersDark) {
  // Agrega la clase o cambia los estilos para activar el modo oscuro
  document.body.classList.add('dark-mode');
  luna.style.display = "none";
    sol.style.display = "block";
    logo.style.display = "none";
    //logo2.style.display = "block";
} else {
  // Elimina la clase o cambia los estilos para activar el modo claro
  document.body.classList.remove('dark-mode');
  luna.style.display = "block";
    sol.style.display = "none";
    logo.style.display = "block";
    //logo2.style.display = "none";
}


accion.getid("btnmostrarmas").addEventListener("click", function () {
  console.log(
    "%c Informacion para curar",
    `color:#006fb9;
  font-family:lucida sans;
  padding:0.5rem;
  background:#FFE86F;
  `
  
  );

  Swal.fire({
    customClass: "info_campain",
    title: "Estatus de las campañas",
    html: `
      <div class="informacion">
      <table class="table_campañas">
            <caption>Se muestran las campañas que se trabajan en Genesys Engage</caption>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre de campaña</th>
                <th scope="col">Archivo .REP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>ABONO ARGENTINA</td>
                <td id="archivorepabono">CL_CUE_ABONOARGENTINA2021_20210721</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>ACTUALIZACION DE DOMICILIOS L&M</td>
                <td id="archivoreplym">CL_SCM_ACTUALIZADOMICILIOS_LYM_20231018</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td >COPPEL PAY</td>
                <td id="archivorepcoppelpay">CL_SCM_COPPEL_PAY_20220725</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>CONFIRMACION OFF</td>
                <td id="">Se trabaja en Go Contact</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>CONFIRMACION ON</td>
                <td id="">Se trabaja en Ucontact</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td >CLUB DE PROTECCION FAMILIAR</td>
                <td id="archivorepfamiliar">CL_CUE_CLUBPROTECCIONFAMILIAR_20200706</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>CLUB DE PROTECCION MOTOS</td>
                <td id="archivorepmotos">CL_CUE_CLUB_MOTOS_20230814</td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>CLUB PROTECCION SALUD</td>
                <td id="archivorepsalud">CL_CUE_CLUB_SALUD_20230814</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>CLUB PROTECCION VIAL</td>
                <td id="archivorepvial">CL_CUE_CLUB_VIAL_20230814</td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>CREDITO AUTOMOTRIZ</td>
                <td id="archivorepautoppel">CL_SE_AUTOPPEL_20230512</td>
              </tr>
              <tr>
                <th scope="row">11</th>
                <td >DATOS ERRONEOS</td>
                <td id="archivoreperroneos">SE TRABAJA EN GO CONTACT</td>
              </tr>
              <tr>
                <th scope="row">12</th>
                <td >DISTRIBUCION ARGENTINA</td>
                <td id="archivorepdistribucion">CL_CUE_DISTRIBUCIONARG_20200715</td>
              </tr>
              <tr>
                <th scope="row">13</th>
                <td>ESTADO DE CUENTA AFORE</td>
                <td id="archivorepafore">CL_CUE_ESTADODECUENTACES_20191104</td>
              </tr>
              <tr>
                <th scope="row">14</th>
                <td>LIGUE DE CREDITO</td>
                <td id="archivorepligue">CL_CUE_LIGUEDECREDITO_20220216</td>
              </tr>
              <tr>
                <th scope="row">15</th>
                <td >MEDALLIA</td>
                <td id="archivorepmedallia">CL_CUE_MEDALLIA_SYG_DIASANTERIORES <br> CL_CUE_MEDALLIA_SYG_20211318</td>
              </tr>
              <tr>
                <th scope="row">16</th>
                <td>NOTIFICACIONES PROACTIVAS</td>
                <td id="num_carga"> <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox="0 0 24 24">
                  <g id="alert_line" fill='none' fill-rule='nonzero'>
                    <path d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z'/>
                    <path fill='red' d='m13.299 3.148 8.634 14.954a1.5 1.5 0 0 1-1.299 2.25H3.366a1.5 1.5 0 0 1-1.299-2.25l8.634-14.954c.577-1 2.02-1 2.598 0ZM12 4.898 4.232 18.352h15.536L12 4.898ZM12 15a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm0-7a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Z'/></g></svg><br>
                    <p>FUERA DE SERVICIO</p></td>
              </tr>
              <tr>
                <th scope="row">17</th>
                <td>OPERACION ARGENTINA</td>
                <td id="archivorepoperacion">CL_CUE_OPERACIONARGENTINA_20231009</td>
              </tr>
              <tr>
                <th scope="row">18</th>
                <td >PRESTAMO ALINEADO</td>
                <td id="archivorepprestamo">CL_CUE_PRESTAMOALINEADO_20190416</td>
              </tr>
              <tr>
                <th scope="row">19</th>
                <td>REFERENCIAS INCOMPLETAS</td>
                <td id="archivorepreferencias">CL_SCM_REFERENCIASINCOMPLETAS_CLIENTES_NUEVOS_20231207 <br> CL_SCM_REFERENCIASINCOMPLETAS_CLIENTES_DIAS_ANTERIORES_20231207</td>
              </tr>
              <tr>
                <th scope="row">20</th>
                <td>SOLICITUD DE CREDITO ARGENTINA</td>
                <td id="archivorepsolicitud">CL_SE_SOLCRED_ARG_OFF_20231116</td>
              </tr>
              <tr>
                <th scope="row">21</th>
                <td >SUPERVISION TELEFONICA ARGENTINA</td>
                <td id="archivorepsupervision">CL_CU_SUPTELEARG_ONOFFLINE <br>CL_CU_SUPTELEARG_OFFLINE <br> CL_CU_SUPTELEARG_ONLINE_</td>
              </tr>
              <tr>
                <th scope="row">22</th>
                <td>TRASPASOS</td>
                <td id="archivoreptraspasos">CL_CUE_TRASPASOSAFORECOPPEL_20210426</td>
              </tr>
            </tbody>
          </table>
      </div>
    `,
    showCancelButton: false,
    showConfirmButton: false,
    showCloseButton: true,
    allowOutsideClick: false,
    heightAuto: false,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
});
/****** CAMPAÑAS ESPECIALES CES ********/
/*  GENERACION */
accion.getid("btn_gen_ces").addEventListener("click", function () {
  console.log(
    "%c Generacion CES",
    `color:#fffff;
  font-family:lucida sans;
  padding:0.5rem;
  background:#e20808;
  `
  );
  Swal.fire({
    customClass: "swal_width",
    title: "Generaciones campañas CES",
    html: `
    <div class="container">
    <div class="fecha" >
    <!--
    <select class="campo_select_ces" id="generacion_ces">
      <option>Abono Argentina</option>
      <option>Operación Argentina</option disabled>
      <option>Distibución Argentina</option>
      <option>Prestamo Alineado</option disabled>
      <option>Traspasos</option>
      <option>Club Proteccion Vial</option disabled>
      <option>Club Proteccion Motos</option disabled>
      <option>Club Proteccion Salud</option disabled>
      <option>Club Proteccion Familiar</option>
      <option>Estado De Cuenta Afore</option>
      <option>Evaluacion De Canalaes Alternos</option disabled>
      </select>
      <input class="campo_fecha_ces" id="fecha_ces_gen" type="date">
      -->
    </div>
   <div class="btns_gen_CES">
   <div>
   <form id="enviar_archivo" enctype="multipart/form-data" method="POST">
    <label class="custum-file-upload" for="file">
      <div class="icon">
      <svg xmlns='http://www.w3.org/2000/svg' width='60px' height='60px' viewBox="0 0 24 24">
      <g id="file_import_line" fill='none' fill-rule='evenodd'>
      <path d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z'/>
      <path fill='currentcolor' d='M13.586 2a2 2 0 0 1 1.284.467l.13.119L19.414 7a2 2 0 0 1 .578 1.238l.008.176V20a2 2 0 0 1-1.85 1.995L18 22h-6v-2h6V10h-4.5a1.5 1.5 0 0 1-1.493-1.356L12 8.5V4H6v8H4V4a2 2 0 0 1 1.85-1.995L6 2h7.586ZM7.707 14.465l2.829 2.828a1 1 0 0 1 0 1.414l-2.829 2.828a1 1 0 1 1-1.414-1.414L7.414 19H3a1 1 0 1 1 0-2h4.414l-1.121-1.121a1 1 0 1 1 1.414-1.415ZM14 4.414V8h3.586L14 4.414Z'/></g></svg>
      </div>
      <div class="text">
        <span id="file-name">Click para subir base</span>
     </div>
        <input type="file" id="file" name="archivo">
    </label>
    
    </form>
    <button class="btn-ces" id="generacion_ces">
     <svg id="img_generacion_ces" width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
     <g id='Icon' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
     <g id='System' transform='translate(-480.000000, -384.000000)' fill-rule='nonzero'>
     <g id='refresh_3_line' transform='translate(480.000000, 384.000000)'>
     <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5935,23.2578 L12.5819,23.2595 L12.5109,23.295 L12.4919,23.2987 L12.4767,23.295 L12.4057,23.2595 C12.3958,23.2564 12.387,23.259 12.3821,23.2649 L12.378,23.2758 L12.3609,23.7031 L12.3659,23.7235 L12.3769,23.7357 L12.4805,23.8097 L12.4953,23.8136 L12.5071,23.8097 L12.6107,23.7357 L12.6233,23.7197 L12.6267,23.7031 L12.6096,23.2758 C12.6076,23.2657 12.601,23.2593 12.5935,23.2578 Z M12.8584,23.1453 L12.8445,23.1473 L12.6598,23.2397 L12.6499,23.2499 L12.6472,23.2611 L12.6651,23.6906 L12.6699,23.7034 L12.6784,23.7105 L12.8793,23.8032 C12.8914,23.8069 12.9022,23.803 12.9078,23.7952 L12.9118,23.7812 L12.8777,23.1665 C12.8753,23.1546 12.8674,23.147 12.8584,23.1453 Z M12.143,23.1473 C12.1332,23.1424 12.1222,23.1453 12.1156,23.1526 L12.1099,23.1665 L12.0758,23.7812 C12.0751,23.7927 12.0828,23.8019 12.0926,23.8046 L12.1083,23.8032 L12.3092,23.7105 L12.3186,23.7024 L12.3225,23.6906 L12.3404,23.2611 L12.3372,23.2485 L12.3278,23.2397 L12.143,23.1473 Z' id='MingCute'></path>
     <path d='M20,9.00002 C20.5523,9.00002 21,9.44774 21,10 L21,11 C21,15.4183 17.4183,19 13,19 L9.41424,19 L10.2071,19.7929 C10.5976,20.1834 10.5976,20.8166 10.2071,21.2071 C9.81658,21.5976 9.18342,21.5976 8.79289,21.2071 L6.29719,18.7114 C6.146015,18.5620667 6.04220806,18.3648167 6.01031199,18.1443606 L6,17.9906 C6.0023,17.7477 6.09114,17.5255 6.23718,17.3534 L6.29289,17.2929 L6.29289,17.2929 L8.79289,14.7929 C9.18342,14.4024 9.81658,14.4024 10.2071,14.7929 C10.5976,15.1834 10.5976,15.8166 10.2071,16.2071 L9.41419,17 L13,17 C16.3137,17 19,14.3137 19,11 L19,10 C19,9.44774 19.4477,9.00002 20,9.00002 Z M15.2071,2.79289 L17.7071,5.29289 C18.0976,5.68342 18.0976,6.31658 17.7071,6.70711 L15.2071,9.20711 C14.8166,9.59763 14.1834,9.59763 13.7929,9.20711 C13.4024,8.81658 13.4024,8.18342 13.7929,7.79289 L14.5858,7.00002 L11,7.00002 C7.68629,7.00002 5,9.68632 5,13 L5,14 C5,14.5523 4.55229,15 4,15 C3.44772,15 3,14.5523 3,14 L3,13 C3,8.58175 6.58172,5.00003 11,5.00003 L14.5858,5.00003 L13.7929,4.20711 C13.4024,3.81658 13.4024,3.18342 13.7929,2.79289 C14.1834,2.40237 14.8166,2.40237 15.2071,2.79289 Z' id='形状' fill='currentcolor'></path></g></g></g></svg><br>
     <span class="loader" id="generacion-ces"></span>                              
     <p class="texto_generico"> Generar y descargar Lista </p></button>
   </div>
   <div>
    
</div>
    </div>
    `,
    showCancelButton: false,
    showConfirmButton: false,
    showCloseButton: true,
    allowOutsideClick: false,
    heightAuto: false,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
  setTimeout(function () {
    $("#generacion-ces").hide();
    
    accion.getid("generacion_ces").addEventListener("click", function () {
      funciones_ces.generearces(); //exportamos la funcion del archivo moduloces.js
    });
  }, 1000);

  accion.getid("file").addEventListener("change", function () {
    var fileName = this.files[0].name;
    accion.getid("file-name").innerText = fileName;
  });
  
});

/*  CIERRE  */
accion.getid("btn_cierre_ces").addEventListener("click", function () {
  console.log(
    "%c Cierre CES",
    `color:#fffff;
  font-family:lucida sans;
  padding:0.5rem;
  background:#e20808;
  `
  );
  Swal.fire({
    customClass: "swal_width",
    title: "Cierre Campañas CES",
    html: `
    <div class="container">
    <div class="fecha" >
    <select class="campo_select_ces" id="campain_ces">
    <option value="ABONOARGENTINA">Abono Argentina</option>
    <option value="DISTRIBUCIONARGENTINA">Distibución Argentina</option>
    <option value="CREDITOAUTOMOTRIZ" >Credito Automotriz</option>
    <option value="TRASPASOS">Traspasos</option>
    <option value="CLUBPROTECCIONFAMILIAR" >Club Proteccion Familiar</option>
    <option value="ESTADOCUENTAAFORE" >Estado De Cuenta Afore</option>
    </select>
    <input class="campo_fecha" id="fecha_ces_cierre" type="date">
    </div>

   <div class="btns_CES">

    <button class="btn-ces" id="btn_generar_L">
      <svg id='img_movtosl_ces' width='24px' height='24px' viewBox='0 0 24 24' version='1.1' id="img_movtosl_ces" xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
        <g id='Icon' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
        <g id='System' transform='translate(-480.000000, -384.000000)' fill-rule='nonzero'>
        <g id='refresh_3_line' transform='translate(480.000000, 384.000000)'>
          <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5935,23.2578 L12.5819,23.2595 L12.5109,23.295 L12.4919,23.2987 L12.4767,23.295 L12.4057,23.2595 C12.3958,23.2564 12.387,23.259 12.3821,23.2649 L12.378,23.2758 L12.3609,23.7031 L12.3659,23.7235 L12.3769,23.7357 L12.4805,23.8097 L12.4953,23.8136 L12.5071,23.8097 L12.6107,23.7357 L12.6233,23.7197 L12.6267,23.7031 L12.6096,23.2758 C12.6076,23.2657 12.601,23.2593 12.5935,23.2578 Z M12.8584,23.1453 L12.8445,23.1473 L12.6598,23.2397 L12.6499,23.2499 L12.6472,23.2611 L12.6651,23.6906 L12.6699,23.7034 L12.6784,23.7105 L12.8793,23.8032 C12.8914,23.8069 12.9022,23.803 12.9078,23.7952 L12.9118,23.7812 L12.8777,23.1665 C12.8753,23.1546 12.8674,23.147 12.8584,23.1453 Z M12.143,23.1473 C12.1332,23.1424 12.1222,23.1453 12.1156,23.1526 L12.1099,23.1665 L12.0758,23.7812 C12.0751,23.7927 12.0828,23.8019 12.0926,23.8046 L12.1083,23.8032 L12.3092,23.7105 L12.3186,23.7024 L12.3225,23.6906 L12.3404,23.2611 L12.3372,23.2485 L12.3278,23.2397 L12.143,23.1473 Z' id='MingCute'></path>
          <path d='M20,9.00002 C20.5523,9.00002 21,9.44774 21,10 L21,11 C21,15.4183 17.4183,19 13,19 L9.41424,19 L10.2071,19.7929 C10.5976,20.1834 10.5976,20.8166 10.2071,21.2071 C9.81658,21.5976 9.18342,21.5976 8.79289,21.2071 L6.29719,18.7114 C6.146015,18.5620667 6.04220806,18.3648167 6.01031199,18.1443606 L6,17.9906 C6.0023,17.7477 6.09114,17.5255 6.23718,17.3534 L6.29289,17.2929 L6.29289,17.2929 L8.79289,14.7929 C9.18342,14.4024 9.81658,14.4024 10.2071,14.7929 C10.5976,15.1834 10.5976,15.8166 10.2071,16.2071 L9.41419,17 L13,17 C16.3137,17 19,14.3137 19,11 L19,10 C19,9.44774 19.4477,9.00002 20,9.00002 Z M15.2071,2.79289 L17.7071,5.29289 C18.0976,5.68342 18.0976,6.31658 17.7071,6.70711 L15.2071,9.20711 C14.8166,9.59763 14.1834,9.59763 13.7929,9.20711 C13.4024,8.81658 13.4024,8.18342 13.7929,7.79289 L14.5858,7.00002 L11,7.00002 C7.68629,7.00002 5,9.68632 5,13 L5,14 C5,14.5523 4.55229,15 4,15 C3.44772,15 3,14.5523 3,14 L3,13 C3,8.58175 6.58172,5.00003 11,5.00003 L14.5858,5.00003 L13.7929,4.20711 C13.4024,3.81658 13.4024,3.18342 13.7929,2.79289 C14.1834,2.40237 14.8166,2.40237 15.2071,2.79289 Z' id='形状' fill='currentcolor'></path></g></g></g>
      </svg><br>
      <span class="loader" id="cargando1-ces"></span>
      <p class="texto_generico"> Generar Movtos L</p>
    </button>
    <!--<span class="loader" id="cargando1-ces"></span>-->
    <button class="btn-ces" id="btn_copy_movtosdir">
    <span class="loader" id="cargando2-ces"></span>
    <svg id="img-directorio" width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
      <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
      <g id='File' transform='translate(-96.000000, -336.000000)'><g id='copy_2_fill' transform='translate(96.000000, 336.000000)'>
      <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path>
      <path d='M9,2 C7.89543,2 7,2.89543 7,4 L7,6 L9,6 L9,4 L20,4 L20,15 L18,15 L18,17 L20,17 C21.1046,17 22,16.1046 22,15 L22,4 C22,2.89543 21.1046,2 20,2 L9,2 Z M4,7 C2.89543,7 2,7.89543 2,9 L2,20 C2,21.1046 2.89543,22 4,22 L15,22 C16.1046,22 17,21.1046 17,20 L17,9 C17,7.89543 16.1046,7 15,7 L4,7 Z' id='形状' fill='currentcolor'></path></g></g></g></svg>
      <br><p class="texto_generico">Copiar Directorio y Movimientos</p></button>

    <button class="btn-ces" id="btn_copiar_gen_ces">
    <svg id='img-generacion' width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
      <g id='Icon' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
      <g id='System' transform='translate(-480.000000, -384.000000)' fill-rule='nonzero'>
      <g id='refresh_3_line' transform='translate(480.000000, 384.000000)'>
    <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5935,23.2578 L12.5819,23.2595 L12.5109,23.295 L12.4919,23.2987 L12.4767,23.295 L12.4057,23.2595 C12.3958,23.2564 12.387,23.259 12.3821,23.2649 L12.378,23.2758 L12.3609,23.7031 L12.3659,23.7235 L12.3769,23.7357 L12.4805,23.8097 L12.4953,23.8136 L12.5071,23.8097 L12.6107,23.7357 L12.6233,23.7197 L12.6267,23.7031 L12.6096,23.2758 C12.6076,23.2657 12.601,23.2593 12.5935,23.2578 Z M12.8584,23.1453 L12.8445,23.1473 L12.6598,23.2397 L12.6499,23.2499 L12.6472,23.2611 L12.6651,23.6906 L12.6699,23.7034 L12.6784,23.7105 L12.8793,23.8032 C12.8914,23.8069 12.9022,23.803 12.9078,23.7952 L12.9118,23.7812 L12.8777,23.1665 C12.8753,23.1546 12.8674,23.147 12.8584,23.1453 Z M12.143,23.1473 C12.1332,23.1424 12.1222,23.1453 12.1156,23.1526 L12.1099,23.1665 L12.0758,23.7812 C12.0751,23.7927 12.0828,23.8019 12.0926,23.8046 L12.1083,23.8032 L12.3092,23.7105 L12.3186,23.7024 L12.3225,23.6906 L12.3404,23.2611 L12.3372,23.2485 L12.3278,23.2397 L12.143,23.1473 Z' id='MingCute'></path>
    <path d='M20,9.00002 C20.5523,9.00002 21,9.44774 21,10 L21,11 C21,15.4183 17.4183,19 13,19 L9.41424,19 L10.2071,19.7929 C10.5976,20.1834 10.5976,20.8166 10.2071,21.2071 C9.81658,21.5976 9.18342,21.5976 8.79289,21.2071 L6.29719,18.7114 C6.146015,18.5620667 6.04220806,18.3648167 6.01031199,18.1443606 L6,17.9906 C6.0023,17.7477 6.09114,17.5255 6.23718,17.3534 L6.29289,17.2929 L6.29289,17.2929 L8.79289,14.7929 C9.18342,14.4024 9.81658,14.4024 10.2071,14.7929 C10.5976,15.1834 10.5976,15.8166 10.2071,16.2071 L9.41419,17 L13,17 C16.3137,17 19,14.3137 19,11 L19,10 C19,9.44774 19.4477,9.00002 20,9.00002 Z M15.2071,2.79289 L17.7071,5.29289 C18.0976,5.68342 18.0976,6.31658 17.7071,6.70711 L15.2071,9.20711 C14.8166,9.59763 14.1834,9.59763 13.7929,9.20711 C13.4024,8.81658 13.4024,8.18342 13.7929,7.79289 L14.5858,7.00002 L11,7.00002 C7.68629,7.00002 5,9.68632 5,13 L5,14 C5,14.5523 4.55229,15 4,15 C3.44772,15 3,14.5523 3,14 L3,13 C3,8.58175 6.58172,5.00003 11,5.00003 L14.5858,5.00003 L13.7929,4.20711 C13.4024,3.81658 13.4024,3.18342 13.7929,2.79289 C14.1834,2.40237 14.8166,2.40237 15.2071,2.79289 Z' id='形状' fill='currentcolor'></path></g></g></g></svg><br>
    <span class="loader" id="cargando4-ces"></span>
    <p class="texto_generico">Copiar Generacion</p></button>
    
    <br>
    
   </div>
    </div>
    `,
    showCancelButton: false,
    showConfirmButton: false,
    showCloseButton: true,
    allowOutsideClick: false,
    heightAuto: false,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
  setTimeout(function () {
    $("#cargando1-ces").hide();
    $("#cargando2-ces").hide()
    $("#cargando4-ces").hide();

    document.getElementById("btn_generar_L").addEventListener("click", function(){
      funciones_ces.movtosl();
    })

    document.getElementById("btn_copy_movtosdir").addEventListener("click", function(){
      funciones_ces.respaldardirectorio();
    })
    
    document.getElementById("btn_copiar_gen_ces").addEventListener("click", function(){
      funciones_ces.respaldargeneracion();
    })

  }, 1000);
});
/******* MEDALLIA *******/
/*  GENERACION  */

/*  CIERRE  */

/******** COPPEL PAY *******/
/*  GENERACION  */
accion.getid("btn_gen_coppelpay").addEventListener("click", function () {
  console.log(
    "%c Generacion Coppel Pay",
    `color:#fffff;
  font-family:lucida sans;
  padding:0.5rem;
  background:#e20808;
  `
  );
  Swal.fire({
    customClass: "swal_width",
    title: "Generacion Coppel Pay",
    html: `
    <button class="btn_coppelpay"id="btn_coppelpay_generacion">
    <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
    <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
    <g id='Development' transform='translate(-480.000000, -48.000000)' fill-rule='nonzero'>
    <g id='directory_fill' transform='translate(480.000000, 48.000000)'>
    <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path><path d='M6,3 C4.34315,3 3,4.34315 3,6 C3,7.30622 3.83481,8.41746 5,8.82929 L5,17 C5,18.6569 6.34315,20 8,20 L15.1707,20 C15.5825,21.1652 16.6938,22 18,22 C19.6569,22 21,20.6569 21,19 C21,17.3431 19.6569,16 18,16 C16.6938,16 15.5825,16.8348 15.1707,18 L8,18 C7.44772,18 7,17.5523 7,17 L7,13 L15.1707,13 C15.5825,14.1652 16.6938,15 18,15 C19.6569,15 21,13.6569 21,12 C21,10.3431 19.6569,9 18,9 C16.6938,9 15.5825,9.83481 15.1707,11 L7,11 L7,8.82929 C8.16519,8.41746 9,7.30622 9,6 C9,4.34315 7.65685,3 6,3 Z' id='路径' fill='currentcolor'>
    </path></g></g></g></svg><br><p>Generar Lista de Marcacion</p>
    </button>
    `,
    showCancelButton: false,
    showConfirmButton: false,
    showCloseButton: true,
    allowOutsideClick: false,
    heightAuto: false,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
  setTimeout(function () {
    document
      .getElementById("btn_coppelpay_generacion")
      .addEventListener("click", function () {
        funciones.generarCoppelPay(); //exportamos la funcion del archivo funciones.js
      });
  }, 1000);
});

/*  CIERRE  */
accion.getid("btn_cierre_coppelpay").addEventListener("click", function () {
  console.log(
    "%c Cierre Coppel Pay",
    `color:#fffff;
  font-family:lucida sans;
  padding:0.5rem;
  background:#e20808;
  `
  );
  Swal.fire({
    customClass: "swal_width",
    title: "Cierre Coppel Pay",
    html: `
    <div class="container">
      <div class="fecha" >
      <input class="campo_fecha" id="fecha_coppelpay" type="date">
      </div>
     <div class="btns_coppelpay">
     <button class="btn-coppelpay" id="btn_enviar_correos_coppelpay" disabled>
     <svg id="correos_coppelpay" width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
     <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
     <g id='Contact' transform='translate(-240.000000, -48.000000)' fill-rule='nonzero'>
     <g id='mail_send_fill' transform='translate(240.000000, 48.000000)'>
     <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path><path d='M20,4 C21.1046,4 22,4.89543 22,6 L22,18 C22,19.1046 21.1046,20 20,20 L4,20 C2.89543,20 2,19.1046 2,18 L2,17 L4,17 L4,18 L20,18 L20,7.4226 L13.0648,14.3578 C12.479,14.9436 11.5293,14.9436 10.9435,14.3578 L4,7.41431 L4,8 L2,8 L2,6 C2,4.89543 2.89543,4 4,4 L20,4 Z M6,13 C6.55228,13 7,13.4477 7,14 C7,14.51285 6.61395571,14.9355092 6.11662025,14.9932725 L6,15 L1,15 C0.447715,15 0,14.5523 0,14 C0,13.48715 0.386039974,13.0644908 0.883378828,13.0067275 L1,13 L6,13 Z M5,10 C5.55228,10 6,10.4477 6,11 C6,11.5523 5.55228,12 5,12 L2,12 C1.44772,12 1,11.5523 1,11 C1,10.4477 1.44772,10 2,10 L5,10 Z' id='形状' fill='currentcolor'>
     </path></g></g></g></svg>
     <span class="loader" id="cargando1-coppelpay"></span>
     <br><p> Enviar Correos</p></button>

     <button class="btn-coppelpay" id="btn_insertar_movtos_coppelpay">
     <svg id="movtos_coppelpay" width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
     <g id='Icon' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
     <g id='Arrow' transform='translate(-192.000000, -146.000000)' fill-rule='nonzero'>
     <g id='arow_to_down_fill' transform='translate(192.000000, 146.000000)'>
     <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5935,23.2578 L12.5819,23.2595 L12.5109,23.295 L12.4919,23.2987 L12.4767,23.295 L12.4057,23.2595 C12.3958,23.2564 12.387,23.259 12.3821,23.2649 L12.378,23.2758 L12.3609,23.7031 L12.3659,23.7235 L12.3769,23.7357 L12.4805,23.8097 L12.4953,23.8136 L12.5071,23.8097 L12.6107,23.7357 L12.6233,23.7197 L12.6267,23.7031 L12.6096,23.2758 C12.6076,23.2657 12.601,23.2593 12.5935,23.2578 Z M12.8584,23.1453 L12.8445,23.1473 L12.6598,23.2397 L12.6499,23.2499 L12.6472,23.2611 L12.6651,23.6906 L12.6699,23.7034 L12.6784,23.7105 L12.8793,23.8032 C12.8914,23.8069 12.9022,23.803 12.9078,23.7952 L12.9118,23.7812 L12.8777,23.1665 C12.8753,23.1546 12.8674,23.147 12.8584,23.1453 Z M12.143,23.1473 C12.1332,23.1424 12.1222,23.1453 12.1156,23.1526 L12.1099,23.1665 L12.0758,23.7812 C12.0751,23.7927 12.0828,23.8019 12.0926,23.8046 L12.1083,23.8032 L12.3092,23.7105 L12.3186,23.7024 L12.3225,23.6906 L12.3404,23.2611 L12.3372,23.2485 L12.3278,23.2397 L12.143,23.1473 Z' id='MingCute'></path><path d='M5,18.5 C4.17157,18.5 3.5,19.1716 3.5,20 C3.5,20.8284 4.17157,21.5 5,21.5 L19,21.5 C19.8284,21.5 20.5,20.8284 20.5,20 C20.5,19.1716 19.8284,18.5 19,18.5 L5,18.5 Z M17.3031,10.9439 C16.7173,10.3581 15.7675,10.3581 15.1818,10.9439 L13.5001,12.6255 L13.5001,4 C13.5001,3.17157 12.8285,2.5 12.0001,2.5 C11.1716,2.5 10.5001,3.17157 10.5001,4 L10.5001,12.6261 L8.81778,10.9439 C8.23199,10.3581 7.28225,10.3581 6.69646,10.9439 C6.11067,11.5296 6.11067,12.4794 6.69646,13.0652 L10.9391,17.3078 C11.5249,17.8936 12.4746,17.8936 13.0604,17.3078 L17.3031,13.0652 C17.8889,12.4794 17.8889,11.5296 17.3031,10.9439 Z' id='形状' fill='currentcolor'></path></g></g></g></svg>
     <span class="loader" id="cargando2-coppelpay"></span>
     <br><p> Insertar Movimientos L</p></button>

     <button class="btn-coppelpay" id="btn_respalda_movtos_coppelpay">
     <svg id="respaldar_coppelpay" width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
     <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
     <g id='File' transform='translate(-912.000000, -144.000000)' fill-rule='nonzero'>
     <g id='download_3_fill' transform='translate(912.000000, 144.000000)'>
     <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path><path d='M12.0000009,11 C12.5523,11 13.0000009,11.4477 13.0000009,12 L13.0000009,18.5838 L14.2934,17.2923 C14.6843,16.9021 15.3174,16.9026 15.7077,17.2934 C16.0979,17.6843 16.0974,18.3174 15.7066,18.7077 L12.8832,21.5266 C12.6301,21.7793 12.3839,22 12.0000009,22 C11.6640876,22 11.4336016,21.8310266 11.2116715,21.6194939 L8.29345,18.7077 C7.90262,18.3174 7.90212,17.6843 8.29234,17.2934 C8.68256,16.9026 9.31572,16.9021 9.70655,17.2923 L11.0000009,18.5838 L11.0000009,12 C11.0000009,11.4477 11.4477,11 12.0000009,11 Z M11.5,2 C14.2845,2 16.6601,3.7509 17.5858,6.2118 C20.13,6.90722 22,9.23523 22,12 C22,14.6194 20.3215,16.8468 17.9814,17.6651 C17.9086,17.0132 17.6225,16.3806 17.123,15.8803 C16.5903636,15.3468455 15.9068182,15.0557876 15.2094786,15.0072767 L15,15 L15,12 C15,10.3431 13.6569,9 12,9 C10.402275,9 9.09633597,10.2488774 9.00509252,11.8237227 L9,12 L9,15 C8.23145,15 7.46294,15.2935 6.87701,15.8803 C6.31762,16.4406 6.02588,17.1669 6.00165,17.9003 C3.71859,17.4377 2,15.4195 2,13 C2,10.9495 3.23434,9.18724 5.00053,8.41581 C5.04561,4.86476 7.93825,2 11.5,2 Z' id='形状' fill='currentcolor'></path></g></g></g></svg>
     <span class="loader" id="cargando3-coppelpay"></span>
     <br><p> Respaldar Movimientos </p></button>
     </div>
      </div>
    `,
    showCancelButton: false,
    showConfirmButton: false,
    showCloseButton: true,
    allowOutsideClick: false,
    heightAuto: false,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
  const btnscoppelpay = [
    "btn_enviar_correos_coppelpay",
    "btn_insertar_movtos_coppelpay",
    "btn_respalda_movtos_coppelpay",
  ];

  btnscoppelpay.forEach((buttonId) => {
    setTimeout(function () {
      $("#cargando1-coppelpay").hide();
      $("#cargando2-coppelpay").hide();
      $("#cargando3-coppelpay").hide();
      // Retrasar la detonacion en 1 segundo (1000 milisegundos) para que pueda ser creada en el DOM
      //llamamos las funciones desde el archivo functions.js para detonarlas🤣 aqui
      accion.getid(buttonId).addEventListener("click", function () {
        switch (buttonId) {
          case "btn_enviar_correos_coppelpay":
            coppelpay.EnviarCorreosCoppelPay();
            break;
          case "btn_insertar_movtos_coppelpay":
            coppelpay.MovtosLCoppelPay();
            break;
          case "btn_respalda_movtos_coppelpay":
            coppelpay.respaldoCoppelPay();
            break;
        }
      });
    }, 1000);
  });
});

/******** LyM ***************/
/*  REGIONES   */
accion.getid('Regiones_LyM').addEventListener('click', function(){
  console.log('Vamos a generar ciudades');

  Swal.fire({
      customClass: 'swal_width',
      title: 'Generacion de regiones LyM',
      html: `
      <div class="container_ciudad">

      <div class="checkbox-wrapper-16">
      <label class="checkbox-wrapper">
        <input class="checkbox-input" type="checkbox" id="check_azcapotzalco" value="'AZCAPOTZALCO'">
        <span class="checkbox-tile">
          <span class="checkbox-label">AZCAPOTZALCO</span>
        </span>
      </label>
    </div>

    <div class="checkbox-wrapper-16">
      <label class="checkbox-wrapper">
        <input class="checkbox-input" type="checkbox" id="check_cuautitlan" value="'CUAUTITLAN'">
        <span class="checkbox-tile">
          <span class="checkbox-label">CUAUTITLAN</span>
        </span>
      </label>
    </div>

    <div class="checkbox-wrapper-16">
      <label class="checkbox-wrapper">
        <input class="checkbox-input" type="checkbox" id="check_culiacan" value="'CULIACAN'">
        <span class="checkbox-tile">
          <span class="checkbox-label">CULIACAN</span>
        </span>
      </label>
    </div>

    <div class="checkbox-wrapper-16">
      <label class="checkbox-wrapper">
        <input class="checkbox-input" type="checkbox" id="check_guadalajara" value="'GUADALAJARA I'">
        <span class="checkbox-tile">
          <span class="checkbox-label">GUADALAJARA I</span>
        </span>
      </label>
    </div>

    <div class="checkbox-wrapper-16">
      <label class="checkbox-wrapper">
        <input class="checkbox-input" type="checkbox" id="check_hermosillo" value="'HERMOSILLO'">
        <span class="checkbox-tile">
          <span class="checkbox-label">HERMOSILLO</span>
        </span>
      </label>
    </div>

    <div class="checkbox-wrapper-16">
      <label class="checkbox-wrapper">
        <input class="checkbox-input" type="checkbox" id="check_ixtapaluca" value="'IXTAPALUCA'">
        <span class="checkbox-tile">
          <span class="checkbox-label">IXTAPALUCA</span>
        </span>
      </label>
    </div>

    <div class="checkbox-wrapper-16">
      <label class="checkbox-wrapper">
        <input class="checkbox-input" type="checkbox" id="check_leon" value="'LEON'">
        <span class="checkbox-tile">
          <span class="checkbox-label">LEON</span>
        </span>
      </label>
    </div>

    <div class="checkbox-wrapper-16">
      <label class="checkbox-wrapper">
        <input class="checkbox-input" type="checkbox" id="check_mexicali" value="'MEXICALI'">
        <span class="checkbox-tile">
          <span class="checkbox-label">MEXICALI</span>
        </span>
      </label>
    </div>

    <div class="checkbox-wrapper-16">
      <label class="checkbox-wrapper">
        <input class="checkbox-input" type="checkbox" id="check_monterrey" value="'MONTERREY I'">
        <span class="checkbox-tile">
          <span class="checkbox-label">MONTERREY I</span>
        </span>
      </label>
    </div>

    <div class="checkbox-wrapper-16">
      <label class="checkbox-wrapper">
        <input class="checkbox-input" type="checkbox" id="check_puebla" value="'PUEBLA'">
        <span class="checkbox-tile">
          <span class="checkbox-label">PUEBLA</span>
        </span>
      </label>
    </div>

    <div class="checkbox-wrapper-16">
      <label class="checkbox-wrapper">
        <input class="checkbox-input" type="checkbox" id="check_toluca" value="'TOLUCA'">
        <span class="checkbox-tile">
          <span class="checkbox-label">TOLUCA</span>
        </span>
      </label>
    </div>

    <div class="checkbox-wrapper-16">
      <label class="checkbox-wrapper">
        <input class="checkbox-input" type="checkbox" id="check_torreon" value="'TORREON'">
        <span class="checkbox-tile">
          <span class="checkbox-label">TORREON</span>
        </span>
      </label>
    </div>

    <div class="checkbox-wrapper-16">
      <label class="checkbox-wrapper">
        <input class="checkbox-input" type="checkbox" id="check_veracruz" value="'VERACRUZ'">
        <span class="checkbox-tile">
          <span class="checkbox-label">VERACRUZ</span>
        </span>
      </label>
    </div>

    <div class="checkbox-wrapper-16">
      <label class="checkbox-wrapper">
        <input class="checkbox-input" type="checkbox" id="check_villahermosa" value="'VILLAHERMOSA'">
        <span class="checkbox-tile">
          <span class="checkbox-label">VILLAHERMOSA</span>
        </span>
      </label>
    </div>

    </div>
    
    
    <button class="boton_ciudades" id="btn_generar_ciudad">
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox="0 0 24 24">
      <g id="location_3_line" fill='none' fill-rule='evenodd'>
      <path d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01-.184-.092Z'/>
      <path fill='currentcolor' d='M17.553 16.106a1 1 0 0 1 1.283.345l.058.102 2 4a1 1 0 0 1-.765 1.439L20 22H4a1 1 0 0 1-.945-1.328l.05-.12 2-4a1 1 0 0 1 1.836.788l-.047.107L5.618 20h12.764l-1.276-2.553a1 1 0 0 1 .447-1.341ZM12 2a7 7 0 0 1 7 7c0 2.382-1.289 4.317-2.623 5.69a15.721 15.721 0 0 1-2.418 2.008l-.373.246-.332.209c-.052.031-.102.06-.149.09l-.257.148c-.528.3-1.168.3-1.696 0l-.257-.149-.31-.189a17.017 17.017 0 0 1-.171-.109l-.373-.246a15.72 15.72 0 0 1-2.418-2.008C6.289 13.317 5 11.382 5 9a7 7 0 0 1 7-7Zm0 2a5 5 0 0 0-5 5c0 1.636.89 3.095 2.057 4.296a13.913 13.913 0 0 0 2.314 1.885l.34.217c.105.065.202.123.289.174l.29-.174.339-.217a13.913 13.913 0 0 0 2.314-1.885C16.11 12.096 17 10.636 17 9a5 5 0 0 0-5-5Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z'/></g></svg>
            <br> Generar Regiones
</button>
          
    
    
      </div>
      `,
      showCancelButton: false,
      showConfirmButton: false,
      showCloseButton: true,
      allowOutsideClick: false,
      heightAuto: false,
      showClass: {
          popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
      }
  });
  setTimeout(function () {
      document.getElementById('btn_generar_ciudad').addEventListener('click', function () {
        lym.generar_ciudad(); //Llamamos la funcion de generar la ciudad del archivo de funciones.js
      });
  }, 1000);
})
/*  GENERACION  */

/*  CIERRE  */
accion.getid("Cierre_LyM").addEventListener("click", function () {
  
  Swal.fire({
    customClass: "swal_width",
    title: "Cierre Actualizacion De Domicilios LyM",
    html: `
    <div class="container">
      <div class="fecha" >
      <input class="campo_fecha" id="fecha_lym" type="date">
      </div>
     <div class="btns_lym">
     <button class="btn-lym" id="btn_movimientosl_lym">
     <svg id="img-movtoslym" width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
     <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
     <g id='File' transform='translate(-912.000000, -144.000000)' fill-rule='nonzero'>
     <g id='download_3_fill' transform='translate(912.000000, 144.000000)'>
     <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path>
     <path d='M12.0000009,11 C12.5523,11 13.0000009,11.4477 13.0000009,12 L13.0000009,18.5838 L14.2934,17.2923 C14.6843,16.9021 15.3174,16.9026 15.7077,17.2934 C16.0979,17.6843 16.0974,18.3174 15.7066,18.7077 L12.8832,21.5266 C12.6301,21.7793 12.3839,22 12.0000009,22 C11.6640876,22 11.4336016,21.8310266 11.2116715,21.6194939 L8.29345,18.7077 C7.90262,18.3174 7.90212,17.6843 8.29234,17.2934 C8.68256,16.9026 9.31572,16.9021 9.70655,17.2923 L11.0000009,18.5838 L11.0000009,12 C11.0000009,11.4477 11.4477,11 12.0000009,11 Z M11.5,2 C14.2845,2 16.6601,3.7509 17.5858,6.2118 C20.13,6.90722 22,9.23523 22,12 C22,14.6194 20.3215,16.8468 17.9814,17.6651 C17.9086,17.0132 17.6225,16.3806 17.123,15.8803 C16.5903636,15.3468455 15.9068182,15.0557876 15.2094786,15.0072767 L15,15 L15,12 C15,10.3431 13.6569,9 12,9 C10.402275,9 9.09633597,10.2488774 9.00509252,11.8237227 L9,12 L9,15 C8.23145,15 7.46294,15.2935 6.87701,15.8803 C6.31762,16.4406 6.02588,17.1669 6.00165,17.9003 C3.71859,17.4377 2,15.4195 2,13 C2,10.9495 3.23434,9.18724 5.00053,8.41581 C5.04561,4.86476 7.93825,2 11.5,2 Z' id='形状' fill='currentcolor'>
     </path></g></g></g></svg>
     <span class="loader" id="cargando1-movtoslym"></span>
     <br><p> Insertar Movimientos</p></button>

     <button class="btn-lym" id="btn_resapalda_lym">
     <svg id="img_respaldalym" width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
     <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
     <g id='Arrow' transform='translate(-912.000000, -50.000000)' fill-rule='nonzero'>
     <g id='transfer_fill' transform='translate(912.000000, 50.000000)'>
     <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path>
     <path d='M20,14 C20.8284,14 21.5,14.6716 21.5,15.5 C21.5,16.2796706 20.9050879,16.9204457 20.1444558,16.9931332 L20,17 L7.62132,17 L9.06066,18.4393 C9.64645,19.0251 9.64645,19.9749 9.06066,20.5607 C8.51148188,21.1097938 7.64242582,21.1441121 7.05326295,20.6636551 L6.93934,20.5607 L3.11005,16.7314 C2.13569833,15.757 2.77030114,14.1140984 4.10128528,14.0056543 L4.24142,14 L20,14 Z M14.9393,3.4393425 C15.4884875,2.89016438 16.3575969,2.85584074 16.9467746,3.3363716 L17.0607,3.4393425 L20.8899,7.2686325 C21.8643,8.24298417 21.2296801,9.88590046 19.8987309,9.9943456 L19.7586,10 L4,10 C3.17157,10 2.5,9.3284325 2.5,8.5 C2.5,7.72030353 3.09488554,7.07955128 3.85553954,7.00686657 L4,7 L16.3787,7 L14.9393,5.5606625 C14.3536,4.9748725 14.3536,4.0251325 14.9393,3.4393425 Z' id='形状' fill='currentcolor'>
     </path></g></g></g></svg>
     <span class="loader" id="cargando2-movtoslym"></span>
     <br><p> Hacer respaldo historico</p></button><br>
     </div>
      </div>
    `,
    showCancelButton: false,
    showConfirmButton: false,
    showCloseButton: true,
    allowOutsideClick: false,
    heightAuto: false,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });

  setTimeout(function () {
    $("#cargando1-movtoslym").hide();
    $("#cargando2-movtoslym").hide();

    document.getElementById("btn_movimientosl_lym").addEventListener("click", function(){
      lym.movimientosL();
    })

    document.getElementById("btn_resapalda_lym").addEventListener("click", function () {
        lym.respaldarhistorico(); //exportamos la funcion del archivo funciones.js
      });
  }, 1000);
});

/******** DATOS ERRONEOS *********/
/*  GENERACION  */
accion.getid("generacion_DE").addEventListener("click", function () {
  console.log(
    "%c Generacion Datos Erroneos",
    `color:#fffff;
  font-family:lucida sans;
  padding:0.5rem;
  background:#2f580e;
  `
  );
  Swal.fire({
    customClass: "swal_width",
    title: "Generacion Datos Erroneos",
    html: `
    <button class="btn_datoserroneos"id="btn_datoserroneos_genlist">
    <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
    <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
    <g id='Development' transform='translate(-480.000000, -48.000000)' fill-rule='nonzero'>
    <g id='directory_fill' transform='translate(480.000000, 48.000000)'>
    <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path><path d='M6,3 C4.34315,3 3,4.34315 3,6 C3,7.30622 3.83481,8.41746 5,8.82929 L5,17 C5,18.6569 6.34315,20 8,20 L15.1707,20 C15.5825,21.1652 16.6938,22 18,22 C19.6569,22 21,20.6569 21,19 C21,17.3431 19.6569,16 18,16 C16.6938,16 15.5825,16.8348 15.1707,18 L8,18 C7.44772,18 7,17.5523 7,17 L7,13 L15.1707,13 C15.5825,14.1652 16.6938,15 18,15 C19.6569,15 21,13.6569 21,12 C21,10.3431 19.6569,9 18,9 C16.6938,9 15.5825,9.83481 15.1707,11 L7,11 L7,8.82929 C8.16519,8.41746 9,7.30622 9,6 C9,4.34315 7.65685,3 6,3 Z' id='路径' fill='currentcolor'>
    </path></g></g></g></svg><br><p>Generar Listas de Marcacion</p>
    </button>
    <button class="btn_datoserroneos"id="btn_datoserroneos_insertlist">
    <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
    <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
    <g id='File' transform='translate(-144.000000, -144.000000)'>
    <g id='file_download_fill' transform='translate(144.000000, 144.000000)'>
    <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path>
    <path d='M12,2 L12,8.5 C12,9.32843 12.6716,10 13.5,10 L13.5,10 L20,10 L20,20 C20,21.1046 19.1046,22 18,22 L18,22 L6,22 C4.89543,22 4,21.1046 4,20 L4,20 L4,4 C4,2.89543 4.89543,2 6,2 L6,2 L12,2 Z M12,11 C11.4477,11 11,11.4477 11,12 L11,12 L11,14.7084 L10.5858,14.2942 C10.1953,13.9037 9.5621,13.9037 9.17157,14.2942 C8.78105,14.6847 8.78105,15.3179 9.17157,15.7084 L9.17157,15.7084 L11.2929,17.8298 C11.6834,18.2203 12.3166,18.2203 12.7071,17.8298 L12.7071,17.8298 L14.8284,15.7084 C15.219,15.3179 15.219,14.6847 14.8284,14.2942 C14.4379,13.9037 13.8047,13.9037 13.4142,14.2942 L13.4142,14.2942 L13,14.7084 L13,12 C13,11.4477 12.5523,11 12,11 Z M14,2.04336 C14.3759,2.12295 14.7241,2.30991 15,2.58579 L15,2.58579 L19.4142,7 C19.6901,7.27588 19.8771,7.62406 19.9566,8 L19.9566,8 L14,8 Z' id='形状结合' fill='currentcolor'></path></g></g></g></svg><br><p>Depositar Listas</p>
    </button>
    `,
    showCancelButton: false,
    showConfirmButton: false,
    showCloseButton: true,
    allowOutsideClick: false,
    heightAuto: false,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
  const btnsGenDE = [
    "btn_datoserroneos_genlist",
    "btn_datoserroneos_insertlist",
  ];

  btnsGenDE.forEach((buttonId) => {
    setTimeout(function () {
      // Retrasar la detonacion en 1 segundo (1000 milisegundos) para que pueda ser creada en el DOM
      //llamamos las funciones desde el archivo functions.js para detonarlas🤣 aqui
      accion.getid(buttonId).addEventListener("click", function () {
        switch (buttonId) {
          case "btn_datoserroneos_genlist":
            funciones.GenerarListaDatosErroneos();
            break;
          case "btn_datoserroneos_insertlist":
            funciones.InsertarListaDatosErroneos();
            break;
        }
      });
    }, 1000);
  });
});

/*  CIERRE  */
accion.getid("cierre_DE").addEventListener("click", function () {
  console.log(
    "%c Cierre Datos Erroneos",
    `color:#fffff;
  font-family:lucida sans;
  padding:0.5rem;
  background:#2f580e;
  `
  );
  Swal.fire({
    customClass: "swal_width",
    title: "Cierre Datos Erroneos",
    html: `
    <div class="container">
      <div class="fecha" >
      <input class="campo_fecha" id="fecha_coppelpay" type="date">
      </div>
     <div class="btns_coppelpay">
     <button class="btn_datoserroneos" id="btn_insertar_movtos_DE">
     <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
     <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
     <g id='File' transform='translate(-912.000000, -144.000000)' fill-rule='nonzero'>
     <g id='download_3_fill' transform='translate(912.000000, 144.000000)'>
     <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path>
     <path d='M12.0000009,11 C12.5523,11 13.0000009,11.4477 13.0000009,12 L13.0000009,18.5838 L14.2934,17.2923 C14.6843,16.9021 15.3174,16.9026 15.7077,17.2934 C16.0979,17.6843 16.0974,18.3174 15.7066,18.7077 L12.8832,21.5266 C12.6301,21.7793 12.3839,22 12.0000009,22 C11.6640876,22 11.4336016,21.8310266 11.2116715,21.6194939 L8.29345,18.7077 C7.90262,18.3174 7.90212,17.6843 8.29234,17.2934 C8.68256,16.9026 9.31572,16.9021 9.70655,17.2923 L11.0000009,18.5838 L11.0000009,12 C11.0000009,11.4477 11.4477,11 12.0000009,11 Z M11.5,2 C14.2845,2 16.6601,3.7509 17.5858,6.2118 C20.13,6.90722 22,9.23523 22,12 C22,14.6194 20.3215,16.8468 17.9814,17.6651 C17.9086,17.0132 17.6225,16.3806 17.123,15.8803 C16.5903636,15.3468455 15.9068182,15.0557876 15.2094786,15.0072767 L15,15 L15,12 C15,10.3431 13.6569,9 12,9 C10.402275,9 9.09633597,10.2488774 9.00509252,11.8237227 L9,12 L9,15 C8.23145,15 7.46294,15.2935 6.87701,15.8803 C6.31762,16.4406 6.02588,17.1669 6.00165,17.9003 C3.71859,17.4377 2,15.4195 2,13 C2,10.9495 3.23434,9.18724 5.00053,8.41581 C5.04561,4.86476 7.93825,2 11.5,2 Z' id='形状' fill='currentcolor'>
     </path></g></g></g></svg>
     <br><p> Insertar Movimientos</p></button>

     <button class="btn_datoserroneos" id="btn_copiar_generacion_DE">
     <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
     <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
     <g id='Arrow' transform='translate(-816.000000, -50.000000)' fill-rule='nonzero'>
     <g id='transfer_3_fill' transform='translate(816.000000, 50.000000)'>
     <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'>
     </path><path d='M8.56079,11.89935 C9.14658,12.48515 9.14658,13.43485 8.56079,14.02065 L7.58592,14.99555 L16.0001,14.99555 C16.8285,14.99555 17.5001,15.66715 17.5001,16.49555 C17.5001,17.32395 16.8285,17.99555 16.0001,17.99555 L7.58592,17.99555 L8.56079,18.97045 C9.14658,19.55625 9.14658,20.50595 8.56079,21.09175 C7.97501,21.67755 7.02526,21.67755 6.43947,21.09175 L2.90394,17.55615 C2.31815,16.97045 2.31815,16.02065 2.90394,15.43485 L6.43947,11.89935 C7.02526,11.31355 7.97501,11.31355 8.56079,11.89935 Z M15.4394,2.8993425 C15.9885875,2.35016437 16.857609,2.31584074 17.4467757,2.7963716 L17.5607,2.8993425 L21.0962,6.4348725 C21.6453875,6.98405062 21.6797117,7.85310668 21.1991727,8.44226955 L21.0962,8.5561925 L17.5607,12.0917425 C16.9749,12.6775425 16.0252,12.6775425 15.4394,12.0917425 C14.8902125,11.542555 14.8558883,10.6734456 15.3364273,10.0843503 L15.4394,9.9704425 L16.4142,8.9955325 L8,8.9955325 C7.17157,8.9955325 6.5,8.3239625 6.5,7.4955325 C6.5,6.71583368 7.09488554,6.0750835 7.85553954,6.00239905 L8,5.9955325 L16.4142,5.9955325 L15.4394,5.0206625 C14.8536,4.4348725 14.8536,3.4851225 15.4394,2.8993425 Z' id='形状' fill='currentcolor'>
     </path></g></g></g></svg>
     <br><p> Hacer respaldo</p></button>
     </div>
      </div>
    `,
    showCancelButton: false,
    showConfirmButton: false,
    showCloseButton: true,
    allowOutsideClick: false,
    heightAuto: false,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
  const btnsCierreDE = [
    "btn_insertar_movtos_DE",
    "btn_copiar_movtos_DE",
    "btn_copiar_directorio_DE",
    "btn_copiar_generacion_DE",
  ];

  btnsCierreDE.forEach((buttonId) => {
    setTimeout(function () {
      // Retrasar la detonacion en 1 segundo (1000 milisegundos) para que pueda ser creada en el DOM
      //llamamos las funciones desde el archivo functions.js para detonarlas🤣 aqui
      accion.getid(buttonId).addEventListener("click", function () {
        switch (buttonId) {
          case "btn_insertar_movtos_DE":
            funciones.InstertMovtosDE();
            break;
          case "btn_copiar_movtos_DE":
            funciones.CopyMovtosDE();
            break;
          case "btn_copiar_directorio_DE":
            funciones.CopyDirectDE();
            break;
          case "btn_copiar_generacion_DE":
            funciones.CopyGenDE();
            break;
        }
      });
    }, 1000);
  });
});
/******** NOTIFICACIONES PROACTIVAS **************/

/*  CIERRE  */
// accion.getid('cierre_np').addEventListener('click', function () {
//   console.log("%c Esto es Notificaciones Proactivas",
//     `color:white;
//   font-family:lucida sans;
//   padding:0.5rem;
//   background:#6f2ad7;
//   `)
//   Swal.fire({
//     customClass: 'swal_width',
//     title: 'Cierre Notificaciones Proactivas',
//     html: `
//     <div class="container-notificaciones">
//     <div class="fecha" >
//     <input class="campo_fecha" id="fecha_notificaciones" type="date">
//     </div>
//     <p>Respaldar Directorio</p><br>

//     <button class="btn_notificaciones" id="btn_directorio_4ta_visita_np">
//     <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
//     <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
//     <g id='System' transform='translate(-624.000000, -48.000000)' fill-rule='nonzero'><g id='history_fill' transform='translate(624.000000, 48.000000)'>
//     <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path>
//     <path d='M2.90678,6.75004 C5.80627,1.72797 12.228,0.00728261 17.25,2.90678 C21.0199,5.08329 22.9267,9.24252 22.4214,13.3013 C22.3657,13.7492 22.2806,14.196 22.1654,14.639 C21.8468519,15.8635037 20.3543449,16.2084656 19.5070928,15.3851938 L19.4123,15.285 L17.1609,12.6977 C16.1582824,11.5455147 17.185199,9.8077093 18.6387302,10.0697929 L18.772,10.0992 L19.2895,10.2343 C18.8228,8.30914 17.599,6.57234 15.75,5.50485 C12.1629,3.43379 7.57592,4.66285 5.50485,8.25004 C3.43379,11.8372 4.66285,16.4242 8.25004,18.4952 C11.2343,20.2182 14.9141,19.6578 17.2583,17.3512 C17.8488,16.7701 18.7986,16.7778 19.3796,17.3683 C19.9606,17.9588 19.953,18.9085 19.3625,19.4895 C16.0818,22.7177 10.9324,23.508 6.75004,21.0933 C1.72797,18.1938 0.00728226,11.7721 2.90678,6.75004 Z M12,5.49992 C12.7796706,5.49992 13.4204457,6.09481439 13.4931332,6.8554611 L13.5,6.99992 L13.5,11.3786 L15.5606,13.4393 C16.1464,14.0251 16.1464,14.9748 15.5606,15.5606 C15.0114125,16.1097875 14.142391,16.1441117 13.5532243,15.6635727 L13.4393,15.5606 L10.9393,13.0606 C10.6931625,12.8144625 10.5414266,12.4915328 10.5073385,12.1481514 L10.5,11.9999 L10.5,6.99992 C10.5,6.1715 11.1715,5.49992 12,5.49992 Z' id='形状' fill='currentcolor'>
//     </path></g></g></g></svg>
//     <br><p> Saldo 4ta Visita</p></button>

//     <button class="btn_notificaciones" id="btn_directorio_2da_visita_np">
//     <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
//     <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
//     <g id='Transport' transform='translate(0.000000, -48.000000)' fill-rule='nonzero'><g id='truck_fill' transform='translate(0.000000, 48.000000)'>
//     <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path><path d='M15,4 C16.1046,4 17,4.89543 17,6 L17,7 L18.5194,7 C19.1269,7 19.7016,7.27618 20.0811,7.75061 L21.5617,9.6014 C21.8454,9.956 22,10.3966 22,10.8508 L22,15 C22,16.1046 21.1046,17 20,17 L19,17 C19,18.6569 17.6569,20 16,20 C14.3431,20 13,18.6569 13,17 L10,17 C10,18.6569 8.65685,20 7,20 C5.34315,20 4,18.6569 4,17 C2.89543,17 2,16.1046 2,15 L2,6 C2,4.89543 2.89543,4 4,4 L15,4 Z M7,16 C6.44772,16 6,16.4477 6,17 C6,17.5523 6.44772,18 7,18 C7.55228,18 8,17.5523 8,17 C8,16.4477 7.55228,16 7,16 Z M16,16 C15.4477,16 15,16.4477 15,17 C15,17.5523 15.4477,18 16,18 C16.5523,18 17,17.5523 17,17 C17,16.4477 16.5523,16 16,16 Z M18.5194,9 L17,9 L17,13 L20,13 L20,10.8508 L18.5194,9 Z' id='形状' fill='currentcolor'>
//     </path></g></g></g></svg>
//     <br><p> Saldo 2da Visita</p></button>

//     <button class="btn_notificaciones" id="btn_directorio_retorno_np">
//     <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
//     <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
//     <g id='Arrow' transform='translate(-242.000000, -48.000000)'>
//     <g id='back_fill' transform='translate(242.000000, 48.000000)'><path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path><path d='M2.61422,5.42597 C2.8464,4.86546 3.39335,4.5 4.00004,4.5 L13.9999979,4.5 C18.1422,4.5 21.4999979,7.85786 21.4999979,12 C21.4999979,16.1421 18.1422,19.5 13.9999979,19.5 L5.00004,19.5 C4.17162,19.5 3.50004,18.8284 3.50004,18 C3.50004,17.1716 4.17162,16.5 5.00004,16.5 L13.9999979,16.5 C16.4853,16.5 18.4999979,14.4853 18.4999979,12 C18.4999979,9.51472 16.4853,7.5 13.9999979,7.5 L7.62136,7.5 L8.5607,8.43934 C9.14649,9.02513 9.14649,9.97487 8.5607,10.5607 C7.97492,11.1464 7.02517,11.1464 6.43938,10.5607 L2.93938,7.06066 C2.51039,6.63166 2.38205,5.98649 2.61422,5.42597 Z' id='路径' fill='currentcolor'>
//     </path></g></g></g></svg>
//     <br><p> Retorno Bodega</p></button>

//     <button class="btn_notificaciones" id="btn_directorio_reenvio_np">
//     <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
//     <g id='Icon' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
//     <g id='Contact' transform='translate(0.000000, -144.000000)' fill-rule='nonzero'><g id='send_fill' transform='translate(0.000000, 144.000000)'>
//     <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5935,23.2578 L12.5819,23.2595 L12.5109,23.295 L12.4919,23.2987 L12.4767,23.295 L12.4057,23.2595 C12.3958,23.2564 12.387,23.259 12.3821,23.2649 L12.378,23.2758 L12.3609,23.7031 L12.3659,23.7235 L12.3769,23.7357 L12.4805,23.8097 L12.4953,23.8136 L12.5071,23.8097 L12.6107,23.7357 L12.6233,23.7197 L12.6267,23.7031 L12.6096,23.2758 C12.6076,23.2657 12.601,23.2593 12.5935,23.2578 Z M12.8584,23.1453 L12.8445,23.1473 L12.6598,23.2397 L12.6499,23.2499 L12.6472,23.2611 L12.6651,23.6906 L12.6699,23.7034 L12.6784,23.7105 L12.8793,23.8032 C12.8914,23.8069 12.9022,23.803 12.9078,23.7952 L12.9118,23.7812 L12.8777,23.1665 C12.8753,23.1546 12.8674,23.147 12.8584,23.1453 Z M12.143,23.1473 C12.1332,23.1424 12.1222,23.1453 12.1156,23.1526 L12.1099,23.1665 L12.0758,23.7812 C12.0751,23.7927 12.0828,23.8019 12.0926,23.8046 L12.1083,23.8032 L12.3092,23.7105 L12.3186,23.7024 L12.3225,23.6906 L12.3404,23.2611 L12.3372,23.2485 L12.3278,23.2397 L12.143,23.1473 Z' id='MingCute'></path><path d='M20.2345,5.68629 C20.667,4.49076 19.5093,3.3331 18.3138,3.76552 L3.70921,9.04802 C2.5105,9.4816 2.36469,11.1181 3.46786,11.7567 L8.1301,14.4559 L12.2931,10.2929 C12.6836,9.90241 13.3168,9.90241 13.7073,10.2929 C14.0978,10.6835 14.0978,11.3166 13.7073,11.7071 L9.54426,15.8702 L12.2433,20.5322 C12.882,21.6354 14.5185,21.4895 14.952,20.2908 L20.2345,5.68629 Z' id='路径' fill='currentcolor'>
//     </path></g></g></g></svg>
//     <br><p> Reenvio Exitoso</p></button>

//     <button class="btn_notificaciones" id="btn_directorio_reembolso_np">
//     <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
//     <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='Business' transform='translate(-624.000000, -240.000000)'>
//     <g id='wallet_4_fill' transform='translate(624.000000, 240.000000)'>
//     <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path>
//     <path d='M19,4.98858 L19,5.99999 C20.1046,5.99999 21,6.89542 21,7.99999 L21,18 C21,19.1046 20.1046,20 19,20 L5,20 C3.89543,20 3,19.1046 3,18 L3,7.99999 C3,6.95543 3.83483,6.00716 4.8132,5.72763 L15.8132,2.58477 C17.4102,2.12847 19,3.32763 19,4.98858 Z M15.5,11.5 C14.6716,11.5 14,12.1716 14,13 C14,13.8284 14.6716,14.5 15.5,14.5 C16.3284,14.5 17,13.8284 17,13 C17,12.1716 16.3284,11.5 15.5,11.5 Z M17,4.98858 C17,4.6840725 16.7327917,4.45717306 16.4422376,4.49176455 L16.3626,4.50782 L11.1401,5.99999 L17,5.99999 L17,4.98858 Z' id='形状' fill='currentcolor'>
//     </path></g></g></g></svg>

//     <br><p> Reembolso</p></button><br>

//     <p>Respaldar Movimientos</p><br>
//     <button class="btn_notificaciones" id="btn_movimientos_4ta_visita_np">
//     <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
//     <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
//     <g id='System' transform='translate(-624.000000, -48.000000)' fill-rule='nonzero'><g id='history_fill' transform='translate(624.000000, 48.000000)'>
//     <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path>
//     <path d='M2.90678,6.75004 C5.80627,1.72797 12.228,0.00728261 17.25,2.90678 C21.0199,5.08329 22.9267,9.24252 22.4214,13.3013 C22.3657,13.7492 22.2806,14.196 22.1654,14.639 C21.8468519,15.8635037 20.3543449,16.2084656 19.5070928,15.3851938 L19.4123,15.285 L17.1609,12.6977 C16.1582824,11.5455147 17.185199,9.8077093 18.6387302,10.0697929 L18.772,10.0992 L19.2895,10.2343 C18.8228,8.30914 17.599,6.57234 15.75,5.50485 C12.1629,3.43379 7.57592,4.66285 5.50485,8.25004 C3.43379,11.8372 4.66285,16.4242 8.25004,18.4952 C11.2343,20.2182 14.9141,19.6578 17.2583,17.3512 C17.8488,16.7701 18.7986,16.7778 19.3796,17.3683 C19.9606,17.9588 19.953,18.9085 19.3625,19.4895 C16.0818,22.7177 10.9324,23.508 6.75004,21.0933 C1.72797,18.1938 0.00728226,11.7721 2.90678,6.75004 Z M12,5.49992 C12.7796706,5.49992 13.4204457,6.09481439 13.4931332,6.8554611 L13.5,6.99992 L13.5,11.3786 L15.5606,13.4393 C16.1464,14.0251 16.1464,14.9748 15.5606,15.5606 C15.0114125,16.1097875 14.142391,16.1441117 13.5532243,15.6635727 L13.4393,15.5606 L10.9393,13.0606 C10.6931625,12.8144625 10.5414266,12.4915328 10.5073385,12.1481514 L10.5,11.9999 L10.5,6.99992 C10.5,6.1715 11.1715,5.49992 12,5.49992 Z' id='形状' fill='currentcolor'>
//     </path></g></g></g></svg>
//     <br><p> Saldo 4ta Visita</p></button>

//     <button class="btn_notificaciones" id="btn_movimientos_2da_visita_np">
//     <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
//     <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
//     <g id='Transport' transform='translate(0.000000, -48.000000)' fill-rule='nonzero'><g id='truck_fill' transform='translate(0.000000, 48.000000)'>
//     <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path><path d='M15,4 C16.1046,4 17,4.89543 17,6 L17,7 L18.5194,7 C19.1269,7 19.7016,7.27618 20.0811,7.75061 L21.5617,9.6014 C21.8454,9.956 22,10.3966 22,10.8508 L22,15 C22,16.1046 21.1046,17 20,17 L19,17 C19,18.6569 17.6569,20 16,20 C14.3431,20 13,18.6569 13,17 L10,17 C10,18.6569 8.65685,20 7,20 C5.34315,20 4,18.6569 4,17 C2.89543,17 2,16.1046 2,15 L2,6 C2,4.89543 2.89543,4 4,4 L15,4 Z M7,16 C6.44772,16 6,16.4477 6,17 C6,17.5523 6.44772,18 7,18 C7.55228,18 8,17.5523 8,17 C8,16.4477 7.55228,16 7,16 Z M16,16 C15.4477,16 15,16.4477 15,17 C15,17.5523 15.4477,18 16,18 C16.5523,18 17,17.5523 17,17 C17,16.4477 16.5523,16 16,16 Z M18.5194,9 L17,9 L17,13 L20,13 L20,10.8508 L18.5194,9 Z' id='形状' fill='currentcolor'>
//     </path></g></g></g></svg>
//     <br><p> Saldo 2da Visita</p></button>

//     <button class="btn_notificaciones" id="btn_movimientos_retorno_np">
//     <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
//     <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
//     <g id='Arrow' transform='translate(-242.000000, -48.000000)'>
//     <g id='back_fill' transform='translate(242.000000, 48.000000)'><path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path><path d='M2.61422,5.42597 C2.8464,4.86546 3.39335,4.5 4.00004,4.5 L13.9999979,4.5 C18.1422,4.5 21.4999979,7.85786 21.4999979,12 C21.4999979,16.1421 18.1422,19.5 13.9999979,19.5 L5.00004,19.5 C4.17162,19.5 3.50004,18.8284 3.50004,18 C3.50004,17.1716 4.17162,16.5 5.00004,16.5 L13.9999979,16.5 C16.4853,16.5 18.4999979,14.4853 18.4999979,12 C18.4999979,9.51472 16.4853,7.5 13.9999979,7.5 L7.62136,7.5 L8.5607,8.43934 C9.14649,9.02513 9.14649,9.97487 8.5607,10.5607 C7.97492,11.1464 7.02517,11.1464 6.43938,10.5607 L2.93938,7.06066 C2.51039,6.63166 2.38205,5.98649 2.61422,5.42597 Z' id='路径' fill='currentcolor'>
//     </path></g></g></g></svg>
//     <br><p> Retorno Bodega</p></button>

//     <button class="btn_notificaciones" id="btn_movimientos_reenvio_np">
//     <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
//     <g id='Icon' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
//     <g id='Contact' transform='translate(0.000000, -144.000000)' fill-rule='nonzero'><g id='send_fill' transform='translate(0.000000, 144.000000)'>
//     <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5935,23.2578 L12.5819,23.2595 L12.5109,23.295 L12.4919,23.2987 L12.4767,23.295 L12.4057,23.2595 C12.3958,23.2564 12.387,23.259 12.3821,23.2649 L12.378,23.2758 L12.3609,23.7031 L12.3659,23.7235 L12.3769,23.7357 L12.4805,23.8097 L12.4953,23.8136 L12.5071,23.8097 L12.6107,23.7357 L12.6233,23.7197 L12.6267,23.7031 L12.6096,23.2758 C12.6076,23.2657 12.601,23.2593 12.5935,23.2578 Z M12.8584,23.1453 L12.8445,23.1473 L12.6598,23.2397 L12.6499,23.2499 L12.6472,23.2611 L12.6651,23.6906 L12.6699,23.7034 L12.6784,23.7105 L12.8793,23.8032 C12.8914,23.8069 12.9022,23.803 12.9078,23.7952 L12.9118,23.7812 L12.8777,23.1665 C12.8753,23.1546 12.8674,23.147 12.8584,23.1453 Z M12.143,23.1473 C12.1332,23.1424 12.1222,23.1453 12.1156,23.1526 L12.1099,23.1665 L12.0758,23.7812 C12.0751,23.7927 12.0828,23.8019 12.0926,23.8046 L12.1083,23.8032 L12.3092,23.7105 L12.3186,23.7024 L12.3225,23.6906 L12.3404,23.2611 L12.3372,23.2485 L12.3278,23.2397 L12.143,23.1473 Z' id='MingCute'></path><path d='M20.2345,5.68629 C20.667,4.49076 19.5093,3.3331 18.3138,3.76552 L3.70921,9.04802 C2.5105,9.4816 2.36469,11.1181 3.46786,11.7567 L8.1301,14.4559 L12.2931,10.2929 C12.6836,9.90241 13.3168,9.90241 13.7073,10.2929 C14.0978,10.6835 14.0978,11.3166 13.7073,11.7071 L9.54426,15.8702 L12.2433,20.5322 C12.882,21.6354 14.5185,21.4895 14.952,20.2908 L20.2345,5.68629 Z' id='路径' fill='currentcolor'>
//     </path></g></g></g></svg>
//     <br><p> Reenvio Exitoso</p></button>

//     <button class="btn_notificaciones" id="btn_movimientos_reembolso_np">
//     <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
//     <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='Business' transform='translate(-624.000000, -240.000000)'>
//     <g id='wallet_4_fill' transform='translate(624.000000, 240.000000)'>
//     <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path>
//     <path d='M19,4.98858 L19,5.99999 C20.1046,5.99999 21,6.89542 21,7.99999 L21,18 C21,19.1046 20.1046,20 19,20 L5,20 C3.89543,20 3,19.1046 3,18 L3,7.99999 C3,6.95543 3.83483,6.00716 4.8132,5.72763 L15.8132,2.58477 C17.4102,2.12847 19,3.32763 19,4.98858 Z M15.5,11.5 C14.6716,11.5 14,12.1716 14,13 C14,13.8284 14.6716,14.5 15.5,14.5 C16.3284,14.5 17,13.8284 17,13 C17,12.1716 16.3284,11.5 15.5,11.5 Z M17,4.98858 C17,4.6840725 16.7327917,4.45717306 16.4422376,4.49176455 L16.3626,4.50782 L11.1401,5.99999 L17,5.99999 L17,4.98858 Z' id='形状' fill='currentcolor'>
//     </path></g></g></g></svg>
//     <br><p> Reembolso</p></button>
//     </div>
//     `,
//     showCancelButton: false,
//     showConfirmButton: false,
//     showCloseButton: true,
//     allowOutsideClick: false,
//     heightAuto: false,
//     showClass: {
//       popup: 'animate__animated animate__fadeInDown'
//     },
//     hideClass: {
//       popup: 'animate__animated animate__fadeOutUp'
//     }
//   });
//   const btsNotiPro = [
//                           'btn_directorio_4ta_visita_np', 'btn_directorio_2da_visita_np', 'btn_directorio_retorno_np', 'btn_directorio_reenvio_np',
//                           'btn_directorio_reembolso_np','btn_movimientos_4ta_visita_np','btn_movimientos_2da_visita_np','btn_movimientos_retorno_np',
//                           'btn_movimientos_reenvio_np','btn_movimientos_reembolso_np'
//                         ];

//   btsNotiPro.forEach(buttonId => {
//     setTimeout(function () {// Retrasar la detonacion en 1 segundo (1000 milisegundos) para que pueda ser creada en el DOM
//       //llamamos las funciones desde el archivo functions.js para detonarlas🤣 aqui
//       accion.getid(buttonId).addEventListener('click', function () {
//         switch (buttonId) {
//           case 'btn_directorio_4ta_visita_np':
//             funciones.Directorio4taVisita();
//             break;
//           case 'btn_directorio_2da_visita_np':
//             funciones.Directorio2daVisita();
//             break;
//           case 'btn_directorio_retorno_np':
//             funciones.DirectorioRetorno();
//             break;
//           case 'btn_directorio_reenvio_np':
//             funciones.DirectorioReenvio();
//             break;
//             case 'btn_directorio_reembolso_np':
//             funciones.DirectorioReembolso();
//             break;
//           case 'btn_movimientos_4ta_visita_np':
//             funciones.Movimientos4taVisita();
//             break;
//           case 'btn_movimientos_2da_visita_np':
//             funciones.Movimientos2daVisita();
//             break;
//           case 'btn_movimientos_retorno_np':
//             funciones.MovimientosRetorno();
//             break;
//             case 'btn_movimientos_reenvio_np':
//             funciones.MovimientosReenvio();
//             break;
//             case 'btn_movimientos_reembolso_np':
//             funciones.MovimientosReembolso();
//             break;
//         }
//       });
//     }, 1000);
//   });
// })
/*********** CIERRE SOLICITUD DE CREDITO ARGENTINA  *****************/

accion.getid("cierre_argentina").addEventListener("click", function () {
  console.log(
    "%c Cierre Solicitud de credito argentina",
    `color:white;
  font-family:lucida sans;
  padding:0.5rem;
  background:#1285fe;
  `
  );
  Swal.fire({
    customClass: "swal_width",
    title: "Cierre solicitud de credito en linea argentina",
    html: `
      <div class="container">
      <div class="fecha" >
      <input class="campo_fecha" id="fecha_argentina" type="date">
      </div>
     <div class="btns_coppelpay">
     <button class="btn-argentina" id="btn_copiar_movtos_argentina">
      <svg id="img_movtosarg" width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
         <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
         <g id='File' transform='translate(-96.000000, -336.000000)'>
         <g id='copy_2_fill' transform='translate(96.000000, 336.000000)'>
          <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path>
          <path d='M9,2 C7.89543,2 7,2.89543 7,4 L7,6 L9,6 L9,4 L20,4 L20,15 L18,15 L18,17 L20,17 C21.1046,17 22,16.1046 22,15                                                         L22,4 C22,2.89543 21.1046,2 20,2 L9,2 Z M4,7 C2.89543,7 2,7.89543 2,9 L2,20 C2,21.1046 2.89543,22 4,22                                                         L15,22 C16.1046,22 17,21.1046 17,20 L17,9 C17,7.89543 16.1046,7 15,7 L4,7 Z' id='形状' fill='currentcolor'></path></g></g></g></svg><br>
          <span class="loader" id="cargando1-solargentina"></span>
          <p class="texto_arg_movtos"> Copiar Movimientos</p></button>
      <!--
     <button class="btn-argentina" id="btn_generar_movtos_arg">
     <svg id='img_movtrab_arg' width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
        <g id='Icon' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
        <g id='System' transform='translate(-432.000000, -432.000000)' fill-rule='nonzero'>
        <g id='refresh_4_fill' transform='translate(432.000000, 432.000000)'>
        <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5935,23.2578 L12.5819,23.2595 L12.5109,23.295 L12.4919,23.2987 L12.4767,23.295 
                  L12.4057,23.2595 C12.3958,23.2564 12.387,23.259 12.3821,23.2649 L12.378,23.2758 L12.3609,23.7031 L12.3659,23.7235 
                  L12.3769,23.7357 L12.4805,23.8097 L12.4953,23.8136 L12.5071,23.8097 L12.6107,23.7357 L12.6233,23.7197 L12.6267,23.7031 
                  L12.6096,23.2758 C12.6076,23.2657 12.601,23.2593 12.5935,23.2578 Z M12.8584,23.1453 L12.8445,23.1473 L12.6598,23.2397 
                  L12.6499,23.2499 L12.6472,23.2611 L12.6651,23.6906 L12.6699,23.7034 L12.6784,23.7105 L12.8793,23.8032 
                  C12.8914,23.8069 12.9022,23.803 12.9078,23.7952 L12.9118,23.7812 L12.8777,23.1665 C12.8753,23.1546 12.8674,23.147 12.8584,23.1453 
                  Z M12.143,23.1473 C12.1332,23.1424 12.1222,23.1453 12.1156,23.1526 L12.1099,23.1665 L12.0758,23.7812 
                  C12.0751,23.7927 12.0828,23.8019 12.0926,23.8046 L12.1083,23.8032 L12.3092,23.7105 L12.3186,23.7024 
                  L12.3225,23.6906 L12.3404,23.2611 L12.3372,23.2485 L12.3278,23.2397 L12.143,23.1473 Z' id='MingCute'>
        </path>
        <path d='M4,9.50002 C4.82843,9.50002 5.5,10.1716 5.5,11 C5.5,13.9635122 7.84377632,16.3795407 10.7787926,16.4956329 L11,16.5 L13.3819,16.5 
                C12.8542,15.9111 12.8734,15.0053 13.4393,14.4393 C13.9884875,13.8902063 14.8575969,13.8558879 15.4467746,14.3363449 L15.5607,14.4393 
                L18.0607,16.9393 C18.0855,16.9642 18.1094,16.9898 18.1323,17.0162 C18.3261857,17.2391429 18.4552714,17.5198327 18.4904003,17.8289866 
                L18.5,17.9858 L18.5,18.0142 C18.4965875,18.3740875 18.3665406,18.7037328 18.1521984,18.9605289 L18.0553,19.066 L15.5607,21.5607 
                C14.9749,22.1464 14.0251,22.1464 13.4393,21.5607 C12.9087688,21.030075 12.8587355,20.2008855 13.2893652,19.6139886 L13.3819,19.5 
                L11,19.5 C6.30558,19.5 2.5,15.6944 2.5,11 C2.5,10.1716 3.17157,9.50002 4,9.50002 Z M8.43934,2.43934 C9.02513,1.85355 9.97487,1.85355 10.5607,2.43934 
                C11.0912313,2.96994625 11.1412645,3.79917848 10.7106348,4.38603967 L10.6181,4.50002 L12.9999975,4.50002 C17.6944,4.50002 21.4999975,8.3056 21.4999975,12.9999975 
                C21.4999975,13.8285 20.8284,14.4999975 19.9999975,14.4999975 C19.1716,14.4999975 18.4999975,13.8285 18.4999975,12.9999975 
                C18.4999975,10.0365463 16.1562521,7.62048114 13.2212072,7.50438721 L12.9999975,7.50002 L10.6181,7.50002 C11.1458,8.08898 11.1266,8.99469 10.5607,9.56066 
                C10.0114844,10.1097913 9.14242598,10.144112 8.55326296,9.66362211 L8.43934,9.56066 L5.93934,7.06066 C5.39016188,6.51148188 5.35583824,5.64242582 5.8363691,5.05326295 
                L5.93934,4.93934 L8.43934,2.43934 Z' id='形状' fill='currentcolor'>
            </path>
            </g>
            </g>
            </g>
      </svg>
      <span class="loader" id="cargando2-solargentina"></span>
     <br><p class="texto_generico"> Generar Movimientos Trab</p></button><br>
     -->

     <button class="btn-argentina" id="btn_copia_direct_arg">
     <svg id='img_dir_arg' width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
        <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='File' transform='translate(-432.000000, -240.000000)'>
          <g id='documents_fill' transform='translate(432.000000, 240.000000)'>
            <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 
                L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 
                L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 
                L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 
                L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 
                L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 
                L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 
                C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 
                L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 
                L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'>
            </path>
            <path d='M14,2 L14,7.5 C14,8.32843 14.6716,9 15.5,9 L21,9 L21,16 C21,17.1046 20.1046,18 19,18 L17,18 L17,20 C17,21.1046 16.1046,22 15,22 L6,22 C4.89543,22 4,21.1046 4,20 
                  L4,8 C4,6.89543 4.89543,6 6,6 L8,6 L8,4 C8,2.89543 8.89543,2 10,2 L14,2 Z M8,8 L6,8 L6,20 L15,20 L15,18 L10,18 C8.89543,18 8,17.1046 8,16 L8,8 Z M16,2.04336 C16.3759,2.12295 
                  16.7241,2.30991 17,2.58579 L20.4142,6 C20.6901,6.27588 20.8771,6.62406 20.9566,7 L16,7 L16,2.04336 Z' id='形状结合' fill='currentcolor'>
            </path>
          </g>
        </g>
      </g>
    </svg>
    <span class="loader" id="cargando3-solargentina"></span>
     <br><p class="texto_generico"> Copiar Directorio </p></button>
     <button class="btn-argentina" id="btn_cobertura_arg">
     <svg id='img_cobertura_arg' width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
      <g id='Icon' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
        <g id='Media' transform='translate(-768.000000, -240.000000)'><g id='voice_2_fill' transform='translate(768.000000, 240.000000)'>
          <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5935,23.2578 L12.5819,23.2595 L12.5109,23.295 L12.4919,23.2987 L12.4767,23.295 L12.4057,23.2595 C12.3958,23.2564 12.387,23.259 12.3821,23.2649 
                L12.378,23.2758 L12.3609,23.7031 L12.3659,23.7235 L12.3769,23.7357 L12.4805,23.8097 L12.4953,23.8136 L12.5071,23.8097 L12.6107,23.7357 L12.6233,23.7197 L12.6267,23.7031 L12.6096,23.2758 
                C12.6076,23.2657 12.601,23.2593 12.5935,23.2578 Z M12.8584,23.1453 L12.8445,23.1473 L12.6598,23.2397 L12.6499,23.2499 L12.6472,23.2611 L12.6651,23.6906 L12.6699,23.7034 L12.6784,23.7105 
                L12.8793,23.8032 C12.8914,23.8069 12.9022,23.803 12.9078,23.7952 L12.9118,23.7812 L12.8777,23.1665 C12.8753,23.1546 12.8674,23.147 12.8584,23.1453 Z 
                M12.143,23.1473 C12.1332,23.1424 12.1222,23.1453 12.1156,23.1526 L12.1099,23.1665 L12.0758,23.7812 C12.0751,23.7927 12.0828,23.8019 12.0926,23.8046 
                L12.1083,23.8032 L12.3092,23.7105 L12.3186,23.7024 L12.3225,23.6906 L12.3404,23.2611 L12.3372,23.2485 L12.3278,23.2397 L12.143,23.1473 Z' id='MingCute' fill-rule='nonzero'>
          </path>
            <path d='M20,3.5 C20.8284,3.5 21.5,4.17157 21.5,5 L21.5,19 C21.5,19.8284 20.8284,20.5 20,20.5 C19.1716,20.5 18.5,19.8284 18.5,19 L18.5,5 C18.5,4.17157 19.1716,3.5 20,3.5 Z M10,6.5 
                        C10.8284,6.5 11.5,7.17157 11.5,8 L11.5,19 C11.5,19.8284 10.8284,20.5 10,20.5 C9.17157,20.5 8.5,19.8284 8.5,19 L8.5,8 C8.5,7.17157 9.17157,6.5 10,6.5 Z M15,9.5 C15.8284,9.5 16.5,10.1716 16.5,11 
                        L16.5,19 C16.5,19.8284 15.8284,20.5 15,20.5 C14.1716,20.5 13.5,19.8284 13.5,19 L13.5,11 C13.5,10.1716 14.1716,9.5 15,9.5 Z 
                        M5,12.5 C5.82843,12.5 6.5,13.1716 6.5,14 L6.5,19 C6.5,19.8284 5.82843,20.5 5,20.5 C4.17157,20.5 3.5,19.8284 3.5,19 L3.5,14 
                        C3.5,13.1716 4.17157,12.5 5,12.5 Z' id='形状' fill='currentcolor'>
            </path>
              </g>
              </g>
               </g>
              </svg>
              <span class="loader" id="cargando4-solargentina"></span>
     <br><p class="texto_generico"> Generar Cobertura</p></button>
     </div>
      </div>
    `,
    showCancelButton: false,
    showConfirmButton: false,
    showCloseButton: true,
    allowOutsideClick: false,
    heightAuto: false,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
  //botones que seran usados para este caso
  setTimeout(function () {
    $("#cargando1-solargentina").hide();
    $("#cargando2-solargentina").hide();
    $("#cargando3-solargentina").hide();
    $("#cargando4-solargentina").hide();

    document.getElementById("btn_copiar_movtos_argentina").addEventListener("click", function(){
      solargentina.copiarmovtos();
    })

    document.getElementById("btn_copia_direct_arg").addEventListener("click", function(){
      solargentina.respaldardirectorio();
    })

    // document.getElementById("btn_generar_movtos_arg").addEventListener("click", function(){
    //   solargentina.generarmovtostrab();
    // })

    document.getElementById("btn_cobertura_arg").addEventListener("click", function () {
      solargentina.generarcobertura(); //exportamos la funcion del archivo funciones.js
      });
  }, 1000);
  
});

/************************ CIERRE CONFIRMACION OFF  ****************************/

accion.getid("cierre_off").addEventListener("click", function () {
  console.log(
    "%c Esto es otro console Prros",
    `color:#006fb9;
  font-family:lucida sans;
  padding:0.5rem;
  background:#FFE86F;
  `
  );
  Swal.fire({
    customClass: "swal_width",
    title: "Cierre Confirmacion OFF",
    html: `
    <button id="collapsible-btn">Toggle Content</button>
    <div id="collapsible-content" style="display: none;">
      <p>This is the collapsible content.</p>
    </div>
    `,
    showCancelButton: false,
    showConfirmButton: false,
    showCloseButton: true,
    allowOutsideClick: false,
    heightAuto: false,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
});

/*************** GENERACION REFERENCIAS INCOMPLETAS ***********/

accion.getid("btn_gen_referencias").addEventListener("click", function () {
  console.log(
    "%c Generacion Referencias Incompletas",
    `color:white;
  font-family:lucida sans;
  padding:0.5rem;
  background:#881421;
  `
  );
  Swal.fire({
    customClass: "swal_width",
    title: "Generacion Referencias Incompletas",
    html: `
    <div class="container-ref">
    <button class="btns-referencias"id="btn_refe_generacion"><svg width='40px' height='40px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
            <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
            <g id='File' transform='translate(-48.000000, -240.000000)' fill-rule='nonzero'>
            <g id='upload_3_fill' transform='translate(48.000000, 240.000000)'>
            <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 
                  L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 
                  12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 
                  L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 
                  L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z 
                  M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 
                  L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 
                  12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 
                  12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 
                  L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 
                  L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 
                  L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path><path d='M11.1168,9.47345 
                  C11.5722667,9.018702 12.2911573,8.98839418 12.7817472,9.38250214 L12.8832,9.47345 L15.7066,12.2924 C16.0974,12.6826 16.0979,13.3158 
                  15.7077,13.7066 C15.3474231,14.0673385 14.7802633,14.0955136 14.3876863,13.7908108 L14.2934,13.7077 L13.0000009,12.4163 L13.0000009,21 
                  C13.0000009,21.5523 12.5523,22 12.0000009,22 C11.4871501,22 11.0644916,21.613973 11.0067284,21.1166239 L11.0000009,21 L11.0000009,12.4163 
                  L9.70655,13.7077 C9.31572,14.0979 8.68256,14.0974 8.29234,13.7066 C7.93213692,13.3458615 7.90485503,12.7785811 8.21018757,12.3865388 
                  L8.29345,12.2924 L11.1168,9.47345 Z M11.5,2 C14.2845,2 16.6601,3.7509 17.5858,6.2118 C20.13,6.90722 22,9.23523 22,12 
                  C22,15.2383886 19.434417,17.8775714 16.2249377,17.9958615 L16,18 L15,18 L15,16 C15.7686,16 16.5371,15.7065 17.123,15.1197 
                  C18.246776,13.9941 18.2903446,12.1984968 17.2547676,11.0209775 L17.1197,10.8771 L14.2963,8.05813 C13.0744926,6.83825815 
                  11.1236438,6.79306844 9.84784221,7.92258765 L9.70371,8.05813 L6.88035,10.8771 C5.70785,12.0477 5.70636,13.9472 6.87701,15.1197 
                  C7.40967364,15.6531545 8.09322983,15.9442124 8.79053359,15.9927233 L9,16 L9,18 L7,18 C4.23858,18 2,15.7614 2,13 C2,10.9495 
                  3.23434,9.18724 5.00053,8.41581 C5.04561,4.86476 7.93825,2 11.5,2 Z' id='形状' fill='currentcolor'>
              </path>
             </g>
            </g>
           </g>
          </svg><br><p>Generar</p>
    </button>
    </div
    `,
    showCancelButton: false,
    showConfirmButton: false,
    showCloseButton: true,
    allowOutsideClick: false,
    heightAuto: false,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
  setTimeout(function () {
    document
      .getElementById("btn_refe_generacion")
      .addEventListener("click", function () {
        funciones.generarReferencias(); //exportamos la funcion del archivo funciones.js
      });
  }, 1000);
});

/*************** CIERRE REFERENCIAS INCOMPLETAS **************/

accion.getid("btn_cierre_referencias").addEventListener("click", function () {
  console.log(
    "%c Cierre Referencias Incompletas",
    `color:white;
  font-family:lucida sans;
  padding:0.5rem;
  background:#881421;
  `
  );
  Swal.fire({
    customClass: "swal_width",
    title: "Cierre Referencias Incompletas",
    html: `
    <div class="container-ref">
    <div class="fecha" >
    <input class="campo_fecha" id="fecha_referencias" type="date">
    </div>
   <div class="btns_refeincompletas">

   <button class="btns-referencias" id="btn_generar_movtos_referencias">
   <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
   <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='System' transform='translate(-1056.000000, -48.000000)' fill-rule='nonzero'>
   <g id='refresh_2_fill' transform='translate(1056.000000, 48.000000)'>
   <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path><path d='M1.49775579,12.0822 C1.48857188,10.8151286 2.84466573,10.095458 3.87669008,10.6758264 L3.98994,10.7457 L6.66778,12.55 C8.09185243,13.5094486 7.20577883,15.6955059 5.56894709,15.4646139 L5.43084,15.4397 L5.32236,15.4159 C6.25566,17.2388 7.92713,18.6735 10.0587,19.2447 C13.4095,20.1425 16.8422,18.6227 18.4971,15.7511 C18.9107,15.0333 19.8279,14.7868 20.5457,15.2004 C21.2634,15.6141 21.51,16.5312 21.0963,17.249 C18.7802,21.2682 13.9782,23.4007 9.2822,22.1425 C5.0775,21.0158 2.15918,17.4918 1.59671,13.4406 C1.53464,12.9935 1.5012,12.5399 1.49775579,12.0822 Z M2.90375,6.75109 C5.22,2.73217 10.0218,0.599762 14.7177,1.85801 C18.9224,2.98466 21.8407,6.50864 22.4032,10.5599 C22.4653,11.007 22.4987,11.4606 22.5020958,11.9182 C22.5113553,13.1852714 21.155227,13.904942 20.1232449,13.3246632 L20.01,13.2548 L17.332,11.4504 C15.9079568,10.4909514 16.7938986,8.30499822 18.4306956,8.5357485 L18.5688,8.56065 L18.6775,8.58449 C17.7442,6.76159 16.0727,5.32692 13.9412,4.75579 C10.5905,3.85797 7.15788,5.37769 5.50296,8.24911 C5.08929,8.96687 4.17209,9.21338 3.45434,8.79971 C2.73659,8.38604 2.49008,7.46884 2.90375,6.75109 Z' id='形状' fill='currentcolor'>
   </path></g></g></g></svg>
   <br><p class="texto_generico"> Movimientos L</p></button>
   
   <button class="btns-referencias" id="btn_copiar_movtos_referencias">
   <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
   <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
   <g id='File' transform='translate(-144.000000, -336.000000)'>
   <g id='copy_3_fill' transform='translate(144.000000, 336.000000)'>
   <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path><path d='M9,2 C7.89543,2 7,2.89543 7,4 L7,5 C7,5.55228 7.44772,6 8,6 C8.55228,6 9,5.55228 9,5 L9,4 L10,4 C10.5523,4 11,3.55228 11,3 C11,2.44772 10.5523,2 10,2 L9,2 Z M14,2 C13.4477,2 13,2.44772 13,3 C13,3.55228 13.4477,4 14,4 L15,4 C15.5523,4 16,3.55228 16,3 C16,2.44772 15.5523,2 15,2 L14,2 Z M19,2 C18.4477,2 18,2.44772 18,3 C18,3.55228 18.4477,4 19,4 L20,4 L20,5 C20,5.55228 20.4477,6 21,6 C21.5523,6 22,5.55228 22,5 L22,4 C22,2.89543 21.1046,2 20,2 L19,2 Z M22,9 C22,8.44772 21.5523,8 21,8 C20.4477,8 20,8.44772 20,9 L20,10 C20,10.5523 20.4477,11 21,11 C21.5523,11 22,10.5523 22,10 L22,9 Z M22,14 C22,13.4477 21.5523,13 21,13 C20.4477,13 20,13.4477 20,14 L20,15 L19,15 C18.4477,15 18,15.4477 18,16 C18,16.5523 18.4477,17 19,17 L20,17 C21.1046,17 22,16.1046 22,15 L22,14 Z M4,7 C2.89543,7 2,7.89543 2,9 L2,20 C2,21.1046 2.89543,22 4,22 L15,22 C16.1046,22 17,21.1046 17,20 L17,9 C17,7.89543 16.1046,7 15,7 L4,7 Z' id='形状' fill='currentcolor'>
   </path></g></g></g></svg>
   <br><p class="texto_generico"> Hacer Respaldo</p></button>

   <button class="btns-referencias" id="btn_cobertura_referencias">
   <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
   <g id='Icon' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
   <g id='Media' transform='translate(-768.000000, -240.000000)'><g id='voice_2_fill' transform='translate(768.000000, 240.000000)'>
    <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5935,23.2578 L12.5819,23.2595 L12.5109,23.295 L12.4919,23.2987 L12.4767,23.295 L12.4057,23.2595 C12.3958,23.2564 12.387,23.259 12.3821,23.2649 L12.378,23.2758 L12.3609,23.7031 L12.3659,23.7235 L12.3769,23.7357 L12.4805,23.8097 L12.4953,23.8136 L12.5071,23.8097 L12.6107,23.7357 L12.6233,23.7197 L12.6267,23.7031 L12.6096,23.2758 C12.6076,23.2657 12.601,23.2593 12.5935,23.2578 Z M12.8584,23.1453 L12.8445,23.1473 L12.6598,23.2397 L12.6499,23.2499 L12.6472,23.2611 L12.6651,23.6906 L12.6699,23.7034 L12.6784,23.7105 L12.8793,23.8032 C12.8914,23.8069 12.9022,23.803 12.9078,23.7952 L12.9118,23.7812 L12.8777,23.1665 C12.8753,23.1546 12.8674,23.147 12.8584,23.1453 Z M12.143,23.1473 C12.1332,23.1424 12.1222,23.1453 12.1156,23.1526 L12.1099,23.1665 L12.0758,23.7812 C12.0751,23.7927 12.0828,23.8019 12.0926,23.8046 L12.1083,23.8032 L12.3092,23.7105 L12.3186,23.7024 L12.3225,23.6906 L12.3404,23.2611 L12.3372,23.2485 L12.3278,23.2397 L12.143,23.1473 Z' id='MingCute' fill-rule='nonzero'></path><path d='M20,3.5 C20.8284,3.5 21.5,4.17157 21.5,5 L21.5,19 C21.5,19.8284 20.8284,20.5 20,20.5 C19.1716,20.5 18.5,19.8284 18.5,19 L18.5,5 C18.5,4.17157 19.1716,3.5 20,3.5 Z M10,6.5 C10.8284,6.5 11.5,7.17157 11.5,8 L11.5,19 C11.5,19.8284 10.8284,20.5 10,20.5 C9.17157,20.5 8.5,19.8284 8.5,19 L8.5,8 C8.5,7.17157 9.17157,6.5 10,6.5 Z M15,9.5 C15.8284,9.5 16.5,10.1716 16.5,11 L16.5,19 C16.5,19.8284 15.8284,20.5 15,20.5 C14.1716,20.5 13.5,19.8284 13.5,19 L13.5,11 C13.5,10.1716 14.1716,9.5 15,9.5 Z M5,12.5 C5.82843,12.5 6.5,13.1716 6.5,14 L6.5,19 C6.5,19.8284 5.82843,20.5 5,20.5 C4.17157,20.5 3.5,19.8284 3.5,19 L3.5,14 C3.5,13.1716 4.17157,12.5 5,12.5 Z' id='形状' fill='currentcolor'>
    </path></g></g></g></svg>
   <br><p class="texto_generico"> Generar Cobertura</p></button>

   </div>
    </div
    `,
    showCancelButton: false,
    showConfirmButton: false,
    showCloseButton: true,
    allowOutsideClick: false,
    heightAuto: false,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
  setTimeout(function () {
    document
      .getElementById("btn_refe_generacion")
      .addEventListener("click", function () {
        funciones.generarReferencias(); //exportamos la funcion del archivo funciones.js
      });
  }, 1000);
});

/************************ CIERRE SUPERVISION ARGENTINA  ****************************/

accion.getid("cierre_suparg").addEventListener("click", function () {
  console.log(
    "%c Esto es otro console Prros",
    `color:white;
  font-family:lucida sans;
  padding:0.5rem;
  background:#1285fe;
  `
  );
  Swal.fire({
    customClass: "swal_width",
    title: "Cierre  Supervicion Argentina",
    html: `
    <div class="container">
    <div class="fecha" >
    <input class="campo_fecha" id="fecha_argentina" type="date">
    </div>
   <div class="btns_argentina">
   <button class="btn-argentina" id="btn_copiar_movtos_argentina"><svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
                                <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
                                <g id='File' transform='translate(-96.000000, -336.000000)'>
                                <g id='copy_2_fill' transform='translate(96.000000, 336.000000)'>
                                <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 
                                              L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 
                                              L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 
                                              L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 
                                              L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 
                                              L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 
                                              L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 
                                              L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 
                                              L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'>
                                  </path>
                                  <path d='M9,2 C7.89543,2 7,2.89543 7,4 L7,6 L9,6 L9,4 L20,4 L20,15 L18,15 L18,17 L20,17 C21.1046,17 22,16.1046 22,15 
                                                      L22,4 C22,2.89543 21.1046,2 20,2 L9,2 Z M4,7 C2.89543,7 2,7.89543 2,9 L2,20 C2,21.1046 2.89543,22 4,22 
                                                      L15,22 C16.1046,22 17,21.1046 17,20 L17,9 C17,7.89543 16.1046,7 15,7 L4,7 Z' id='形状' fill='currentcolor'>
                                  </path></g></g></g></svg><br><p class="texto_generico"> Copiar Movimientos</p></button>
   <button class="btn-argentina" id="btn_generar_movtos_arg">
   <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
      <g id='Icon' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
      <g id='System' transform='translate(-432.000000, -432.000000)' fill-rule='nonzero'>
      <g id='refresh_4_fill' transform='translate(432.000000, 432.000000)'>
      <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5935,23.2578 L12.5819,23.2595 L12.5109,23.295 L12.4919,23.2987 L12.4767,23.295 
                L12.4057,23.2595 C12.3958,23.2564 12.387,23.259 12.3821,23.2649 L12.378,23.2758 L12.3609,23.7031 L12.3659,23.7235 
                L12.3769,23.7357 L12.4805,23.8097 L12.4953,23.8136 L12.5071,23.8097 L12.6107,23.7357 L12.6233,23.7197 L12.6267,23.7031 
                L12.6096,23.2758 C12.6076,23.2657 12.601,23.2593 12.5935,23.2578 Z M12.8584,23.1453 L12.8445,23.1473 L12.6598,23.2397 
                L12.6499,23.2499 L12.6472,23.2611 L12.6651,23.6906 L12.6699,23.7034 L12.6784,23.7105 L12.8793,23.8032 
                C12.8914,23.8069 12.9022,23.803 12.9078,23.7952 L12.9118,23.7812 L12.8777,23.1665 C12.8753,23.1546 12.8674,23.147 12.8584,23.1453 
                Z M12.143,23.1473 C12.1332,23.1424 12.1222,23.1453 12.1156,23.1526 L12.1099,23.1665 L12.0758,23.7812 
                C12.0751,23.7927 12.0828,23.8019 12.0926,23.8046 L12.1083,23.8032 L12.3092,23.7105 L12.3186,23.7024 
                L12.3225,23.6906 L12.3404,23.2611 L12.3372,23.2485 L12.3278,23.2397 L12.143,23.1473 Z' id='MingCute'>
      </path>
      <path d='M4,9.50002 C4.82843,9.50002 5.5,10.1716 5.5,11 C5.5,13.9635122 7.84377632,16.3795407 10.7787926,16.4956329 L11,16.5 L13.3819,16.5 
              C12.8542,15.9111 12.8734,15.0053 13.4393,14.4393 C13.9884875,13.8902063 14.8575969,13.8558879 15.4467746,14.3363449 L15.5607,14.4393 
              L18.0607,16.9393 C18.0855,16.9642 18.1094,16.9898 18.1323,17.0162 C18.3261857,17.2391429 18.4552714,17.5198327 18.4904003,17.8289866 
              L18.5,17.9858 L18.5,18.0142 C18.4965875,18.3740875 18.3665406,18.7037328 18.1521984,18.9605289 L18.0553,19.066 L15.5607,21.5607 
              C14.9749,22.1464 14.0251,22.1464 13.4393,21.5607 C12.9087688,21.030075 12.8587355,20.2008855 13.2893652,19.6139886 L13.3819,19.5 
              L11,19.5 C6.30558,19.5 2.5,15.6944 2.5,11 C2.5,10.1716 3.17157,9.50002 4,9.50002 Z M8.43934,2.43934 C9.02513,1.85355 9.97487,1.85355 10.5607,2.43934 
              C11.0912313,2.96994625 11.1412645,3.79917848 10.7106348,4.38603967 L10.6181,4.50002 L12.9999975,4.50002 C17.6944,4.50002 21.4999975,8.3056 21.4999975,12.9999975 
              C21.4999975,13.8285 20.8284,14.4999975 19.9999975,14.4999975 C19.1716,14.4999975 18.4999975,13.8285 18.4999975,12.9999975 
              C18.4999975,10.0365463 16.1562521,7.62048114 13.2212072,7.50438721 L12.9999975,7.50002 L10.6181,7.50002 C11.1458,8.08898 11.1266,8.99469 10.5607,9.56066 
              C10.0114844,10.1097913 9.14242598,10.144112 8.55326296,9.66362211 L8.43934,9.56066 L5.93934,7.06066 C5.39016188,6.51148188 5.35583824,5.64242582 5.8363691,5.05326295 
              L5.93934,4.93934 L8.43934,2.43934 Z' id='形状' fill='currentcolor'>
          </path>
          </g>
          </g>
          </g>
    </svg>
   <br><p class="texto_generico"> Generar Movimientos Trab</p></button><br>

   <button class="btn-argentina" id="btn_copia_direct_arg">
   <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
      <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'><g id='File' transform='translate(-432.000000, -240.000000)'>
        <g id='documents_fill' transform='translate(432.000000, 240.000000)'>
          <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 
              L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 
              L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 
              L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 
              L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 
              L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 
              L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 
              C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 
              L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 
              L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'>
          </path>
          <path d='M14,2 L14,7.5 C14,8.32843 14.6716,9 15.5,9 L21,9 L21,16 C21,17.1046 20.1046,18 19,18 L17,18 L17,20 C17,21.1046 16.1046,22 15,22 L6,22 C4.89543,22 4,21.1046 4,20 
                L4,8 C4,6.89543 4.89543,6 6,6 L8,6 L8,4 C8,2.89543 8.89543,2 10,2 L14,2 Z M8,8 L6,8 L6,20 L15,20 L15,18 L10,18 C8.89543,18 8,17.1046 8,16 L8,8 Z M16,2.04336 C16.3759,2.12295 
                16.7241,2.30991 17,2.58579 L20.4142,6 C20.6901,6.27588 20.8771,6.62406 20.9566,7 L16,7 L16,2.04336 Z' id='形状结合' fill='currentcolor'>
          </path>
        </g>
      </g>
    </g>
  </svg>
   <br><p class="texto_generico"> Copiar Directorio </p></button>
   <button class="btn-argentina" id="btn_cobertura_arg">
   <svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
    <g id='Icon' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
      <g id='Media' transform='translate(-768.000000, -240.000000)'><g id='voice_2_fill' transform='translate(768.000000, 240.000000)'>
        <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5935,23.2578 L12.5819,23.2595 L12.5109,23.295 L12.4919,23.2987 L12.4767,23.295 L12.4057,23.2595 C12.3958,23.2564 12.387,23.259 12.3821,23.2649 
              L12.378,23.2758 L12.3609,23.7031 L12.3659,23.7235 L12.3769,23.7357 L12.4805,23.8097 L12.4953,23.8136 L12.5071,23.8097 L12.6107,23.7357 L12.6233,23.7197 L12.6267,23.7031 L12.6096,23.2758 
              C12.6076,23.2657 12.601,23.2593 12.5935,23.2578 Z M12.8584,23.1453 L12.8445,23.1473 L12.6598,23.2397 L12.6499,23.2499 L12.6472,23.2611 L12.6651,23.6906 L12.6699,23.7034 L12.6784,23.7105 
              L12.8793,23.8032 C12.8914,23.8069 12.9022,23.803 12.9078,23.7952 L12.9118,23.7812 L12.8777,23.1665 C12.8753,23.1546 12.8674,23.147 12.8584,23.1453 Z 
              M12.143,23.1473 C12.1332,23.1424 12.1222,23.1453 12.1156,23.1526 L12.1099,23.1665 L12.0758,23.7812 C12.0751,23.7927 12.0828,23.8019 12.0926,23.8046 
              L12.1083,23.8032 L12.3092,23.7105 L12.3186,23.7024 L12.3225,23.6906 L12.3404,23.2611 L12.3372,23.2485 L12.3278,23.2397 L12.143,23.1473 Z' id='MingCute' fill-rule='nonzero'>
        </path>
          <path d='M20,3.5 C20.8284,3.5 21.5,4.17157 21.5,5 L21.5,19 C21.5,19.8284 20.8284,20.5 20,20.5 C19.1716,20.5 18.5,19.8284 18.5,19 L18.5,5 C18.5,4.17157 19.1716,3.5 20,3.5 Z M10,6.5 
                      C10.8284,6.5 11.5,7.17157 11.5,8 L11.5,19 C11.5,19.8284 10.8284,20.5 10,20.5 C9.17157,20.5 8.5,19.8284 8.5,19 L8.5,8 C8.5,7.17157 9.17157,6.5 10,6.5 Z M15,9.5 C15.8284,9.5 16.5,10.1716 16.5,11 
                      L16.5,19 C16.5,19.8284 15.8284,20.5 15,20.5 C14.1716,20.5 13.5,19.8284 13.5,19 L13.5,11 C13.5,10.1716 14.1716,9.5 15,9.5 Z 
                      M5,12.5 C5.82843,12.5 6.5,13.1716 6.5,14 L6.5,19 C6.5,19.8284 5.82843,20.5 5,20.5 C4.17157,20.5 3.5,19.8284 3.5,19 L3.5,14 
                      C3.5,13.1716 4.17157,12.5 5,12.5 Z' id='形状' fill='currentcolor'>
          </path>
            </g>
            </g>
             </g>
            </svg>
   <br><p class="texto_generico"> Generar Cobertura</p></button>
   </div>
    </div>
  `,
    showCancelButton: false,
    showConfirmButton: false,
    showCloseButton: true,
    allowOutsideClick: false,
    heightAuto: false,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });

  setTimeout(function () {
    // Retrasar la detonacion en 1 segundo (1000 milisegundos) para que pueda ser creada en el DOM
    //llamamos las funciones desde el archivo functions.js para detonarlas🤣 aqui
    accion.getid(cierre_suparg).addEventListener("click", function () {
      // funciones.copiarMovtosArgentina();
    });
  }, 1000);
});

/************************* CIERRE CAMPAÑAS UNICAS  ****************************/ 

/*  CIERRE  */
accion.getid("btn_campanaunica").addEventListener("click", function () {
  console.log(
    "%c Cierre CES",
    `color:#fffff;
  font-family:lucida sans;
  padding:0.5rem;
  background:#e20808;
  `
  );
  Swal.fire({
    customClass: "swal_width",
    title: "Cierre Campañas Unicas",
    html: `
    <div class="container">
    <div class="fecha" >
    <p>Cierre solo para campañas que tienen control de informes</p>
    <select class="campo_select_ces" id="campain_campanaunica">
    <option value="OPERACIONARGENTINA">Operación Argentina</option>
    <option value="PRESTAMOALINEADO">Prestamo Alineado</option>
    <option value="CLUB_VIAL">Club Proteccion Vial</option>
    <option value="CLUB_MOTOS">Club Proteccion Motos</option>
    <option value="CLUB_SALUD">Club Proteccion Salud</option>
    <option value="EVALUACIONCANALESALTERNOS">Evaluacion De Canalaes Alternos</option>
    </select>
    <input class="campo_fecha" id="fecha_campanaunica" type="date">
    </div>

   <div class="btns_CES">
   <button class="btn-ces" id="btn_copiar_movtos_ci">
    <svg id="img-movtos-ci" width='24px' height='24px' viewBox='0 0 24 24' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
      <g id='页面-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
      <g id='Arrow' transform='translate(-912.000000, 0.000000)' fill-rule='nonzero'>
      <g id='transfer_line' transform='translate(912.000000, 0.000000)'>
      <path d='M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z' id='MingCute' fill-rule='nonzero'></path>
      <path d='M20,14 C20.5523,14 21,14.4477 21,15 C21,15.51285 20.613973,15.9355092 20.1166239,15.9932725 L20,16 L6.41421,16 L8.70711,18.2929 C9.09763,18.6834 9.09763,19.3166 8.70711,19.7071 C8.34662077,20.0675615 7.77939355,20.0952893 7.38709848,19.7902834 L7.29289,19.7071 L3.4636,15.8778 C2.7983584,15.212616 3.2240608,14.0940048 4.12621381,14.0055802 L4.24142,14 L20,14 Z M15.2929,4.29289 C15.6533615,3.93241 16.2206207,3.90468077 16.6128973,4.20970231 L16.7071,4.29289 L20.5364,8.12218 C21.20168,8.7874312 20.7759699,9.90599901 19.8738074,9.99442003 L19.7586,10 L4,10 C3.44772,10 3,9.55228 3,9 C3,8.48716857 3.38604429,8.06449347 3.88337975,8.0067278 L4,8 L17.5858,8 L15.2929,5.70711 C14.9024,5.31658 14.9024,4.68342 15.2929,4.29289 Z' id='形状' fill='currentcolor'></path></g></g></g>
      </svg><br>
      <span class="loader" id="cargando_ci"></span>
      <p class="texto_generico"> Movtos Control de Informes</p></button>
   </div>
    </div>
    `,
    showCancelButton: false,
    showConfirmButton: false,
    showCloseButton: true,
    allowOutsideClick: false,
    heightAuto: false,
    showClass: {
      popup: "animate__animated animate__fadeInDown",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutUp",
    },
  });
  setTimeout(function () {
    $("#cargando_ci").hide();

    document
      .getElementById("btn_copiar_movtos_ci")
      .addEventListener("click", function () {
        campanaunica.copymovtos(); //exportamos la funcion del archivo funciones.js
      });
  }, 1000);
});

// document.addEventListener("DOMContentLoaded", function () {
//     var scrollButton = document.getElementById("serviciosbtn");
//     var selected = document.getElementById("div1");

/********************************************** CES *****************************************/

/********************************************* MONITOR ***********************************************/

accion.getid("btn_search_ces").addEventListener("click", function () {
  monitor.monitor_ces(); //exportamos la funcion del archivo monitor.js
});
document.getElementById("btn_monitor_medallia").addEventListener("click", function () {
  monitor.monitor_medallia(); //exportamos la funcion del archivo monitor.js
});
document.getElementById("btn_monitor_coppel_pay").addEventListener("click", function () {
  monitor.monitor_coppel_pay(); //exportamos la funcion del archivo monitor.js
});
document.getElementById("btn_monitor_datos_erroneos").addEventListener("click", function () {
  monitor.monitor_datoserroneos(); //exportamos la funcion del archivo monitor.js
});
document.getElementById("btn_monitor_referenciasincompletas").addEventListener("click", function () {
  monitor.monitor_referenciasincompletas(); //exportamos la funcion del archivo monitor.js
});
document.getElementById("btn_monitor_solcreditoargentina").addEventListener("click", function () {
  monitor.monitor_sol_credito_argentina(); //exportamos la funcion del archivo monitor.js
});
document.getElementById("btn_monitor_campanaunica").addEventListener("click", function () {
  monitor.monitor_campanaunica(); //exportamos la funcion del archivo monitor.js
});
document.getElementById("btn_monitor_confirmacion_off").addEventListener("click", function () {
  monitor.monitor_conoff(); //exportamos la funcion del archivo monitor.js
});
document.getElementById("btn_monitor_lym").addEventListener("click", function () {
  monitor.monitor_lym(); //exportamos la funcion del archivo monitor.js
});
document.getElementById("btn_monitor_conON").addEventListener("click", function () {
  monitor.monitor_conON(); //exportamos la funcion del archivo monitor.js
});
/*****************************************************************************************************/
