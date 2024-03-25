import * as accion from "../funciones.js"; // importamos las funciones que usamos generalmente

export function generar_ciudad() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');

  var valoresChecked = [];

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      valoresChecked.push(checkbox.value);
    }
  });
  console.log(valoresChecked);

  let parametros = {
    opc: "generaregion",
    region: valoresChecked,
  };
  console.log(parametros);

  $.post(
    "./assets/php/ActualizacionDeDomicilios/funciones_lym.php",
    parametros,
    function (response) {
      // maneja la respuesta aquí
      console.log("Entre en el post");

      var estado = response.estado;
      var mensaje = response.respuesta;

      Toastify({
        text: `Se han generado las regiones: ${valoresChecked}`,
        duration: 5000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #0a8a01, #16e300)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();

      console.log(estado), console.log(mensaje);
    }
  ).fail(function (jqXHR, textStatus, errorThrown) {
    // maneja el error aquí
    Toastify({
      text: `Error: ${jqXHR.status} ${jqXHR.statusText}`,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #d40101, #ff5959)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
    console.error(textStatus, errorThrown);
  });
}

export function movimientosL() {
  function spinner(show) {
    if (show) {
      $("#cargando1-movtoslym").show();
      $("#img-movtoslym").hide();
    } else {
      $("#cargando1-movtoslym").hide();
      $("#img-movtoslym").show();
    }
  }

  function cargarmovimientos() {
    spinner(true);
    console.log('Boton Cargar Movimientos');

    let parametros = {
      opc: "insertarmovimientos",
      fecha: accion.value("fecha_lym"),
    };

    let verficarcampos = Object.values(parametros).every(
      (value) => value != null && value !== ""
    );

    if (verficarcampos) {
      $.post(
        "./assets/php/ActualizacionDeDomicilios/funciones_lym.php",
        parametros,
        function (response) {
          switch (response.estado) {
            case 0:
              accion.ToastSuccess(response.mensaje, 8000);
              accion.BotonSuccess('btn_movimientosl_lym');
              spinner(false);
              break;
            default:
              accion.ToastError(`Error: ${response}`, 10000);
              accion.BotonError('btn_movimientosl_lym');
              console.log(response);
              spinner(false);
          }
        }
      ).fail(function (jqXHR, textStatus, errorThrown) {
        accion.ToastError(
          `Falló la petición: ${jqXHR.status} ${jqXHR.statusText}`,
          10000
        );
        spinner(false);
      });
    } else {
      accion.ToastInfo("Rellene todos los campos");
      spinner(false);
    }
  }
  cargarmovimientos(accion.value("fecha_lym"));
}

export function respaldarhistorico() {
  function spinner(show) {
    if (show) {
      $("#cargando2-movtoslym").show();
      $("#img_respaldalym").hide();
    } else {
      $("#cargando2-movtoslym").hide();
      $("#img_respaldalym").show();
    }
  }

  function respaldatodo() {
    spinner(true);
    console.log('Respalda Historico'); // para seber si entro nada mas, los debugger que jajaj

    let parametros = {
      opc: "respaldar",
      fecha: accion.value("fecha_lym"),
    };
  
    let verficarcampos = Object.values(parametros).every(
      (value) => value != null && value !== ""
    );

    if (verficarcampos) {
      $.post("./assets/php/ActualizacionDeDomicilios/funciones_lym.php",parametros,function (response) {

          switch (response.estado) {
            case 0:
              accion.ToastSuccess(response.mensaje, 8000);
              accion.BotonSuccess('btn_resapalda_lym');
              spinner(false);
              break;
            default:
              accion.ToastError(`Error: ${response}`, 10000);
              accion.BotonError('btn_resapalda_lym');
              console.log(response);
              spinner(false);
          }

        }
      ).fail(function (jqXHR, textStatus, errorThrown) {
        accion.ToastError(`Falló la petición: ${jqXHR.status} ${jqXHR.statusText}`,10000);
        spinner(false);
      });
    } else {
      accion.ToastInfo("Rellene todos los campos");
      spinner(false);
    }
  }
  respaldatodo();
}
