import * as accion from "../funciones.js"; // importamos las funciones que usamos generalmente

export function generearces() {
  function spinner(show) {
    if (show) {
      $("#generacion-ces").show();
      $("#img_generacion_ces").hide();
    } else {
      $("#generacion-ces").hide();
      $("#img_generacion_ces").show();
    }
  }
  function generacion() {
    spinner(true);
    // Obtén el elemento de entrada de archivo con el ID 'file'
    var fileInput = document.getElementById("file");
    var file = fileInput.files[0];
    var formData = new FormData();

    // Agrega el archivo, la fecha y el valor de opc al FormData
    formData.append("archivo", file);
    // formData.append("fecha", accion.value("fecha_ces_gen"));
    formData.append("opc", "generacion_ces"); // Agrega el valor de opc

    console.log(file.name);
    // console.log(accion.value("fecha_ces_gen"));

    // Verifica que todos los campos estén llenos antes de enviar
    let verificarCampos = Object.values(formData).every(
      (value) => value != null && value !== ""
    );

    if (verificarCampos) {
      // Envía los datos
      $.ajax({
        url: "./assets/php/CES/funciones_ces.php", // Asegúrate de que esta es la URL correcta
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
          switch (response.estado) {
            case 0:
              accion.ToastSuccess(response.mensaje, 8000);
              accion.BotonSuccess('generacion_ces');
              descargarArchivo("./assets/php/CES/listas De Marcacion/"+response.lista);
              spinner(false);
              break;
              default:
                accion.ToastError(`Error: ${response.mensaje}`, 40000);
                console.log(response);
                accion.BotonError('generacion_ces');
                spinner(false);
          }
        },
      });
    } else {
      accion.ToastInfo("Rellene todos los campos");
      spinner(false);
    }
  }
  generacion();
}

export function movtosl() {
  function spinner(show) {
    if (show) {
      $("#cargando1-ces").show();
      $("#img_movtosl_ces").hide();
    } else {
      $("#cargando1-ces").hide();
      $("#img_movtosl_ces").show();
    }
  }
  function generarmovtosl() {
    spinner(true);

    let parametros = {
      opc: "movtosl",
      fecha: accion.value("fecha_ces_cierre"),
      campain: accion.value("campain_ces"),
    };

    let verficarcampos = Object.values(parametros).every(
      (value) => value != null && value !== ""
    );
    
      if (verficarcampos) {
        $.post(
          "./assets/php/CES/funciones_ces.php",
          parametros,
          function (response) {
            switch (response.estado) {
              case 1:
                accion.ToastSuccess(response.mensaje, 8000);
                accion.BotonSuccess('btn_generar_L');
                console.log(response.mensaje);
                spinner(false);
                break;
              default:
                accion.ToastError(`Error: ${response.mensaje}`, 10000);
                accion.BotonError('btn_generar_L');
                spinner(false);
            }
          }
        )
          .fail(function (jqXHR, textStatus, errorThrown) {
            accion.ToastError(
              `Falló la petición: ${jqXHR.status} ${jqXHR.statusText}`,
              10000
            );
          })
          .always(function () {
            spinner(false);
          });
      } else {
        accion.ToastInfo("Rellene todos los campos");
        spinner(false);
      }
  }
  generarmovtosl();
}
/**
 * Descarga un archivo en el navegador.
 * El argumento debe ser la ruta de un archivo hasta el final con su extensión.
 * @param {string} archivo La ruta relativa o absoluta seguida de el nombre del archivo con extensión.
 */
function descargarArchivo(archivo) {
  var link = document.createElement("a");
  link.href = archivo;
  link.download = ''; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  // delete link;
}


export function respaldardirectorio() {
  function spinner(show) {
    if (show) {
      $("#cargando2-ces").show();
      $("#img-directorio").hide();
    } else {
      $("#cargando2-ces").hide();
      $("#img-directorio").show();
    }
  }
  function cargacampaña(campain) {
    spinner(true);
    console.log(campain);

    if (
      [
        "OPERACIONARGENTINA",
        "PRESTAMOALINEADO",
        "CLUB_VIAL",
        "CLUB_MOTOS",
        "CLUB_SALUD",
        "LIGUEDECREDITO",
        "EVALUACIONCANALESALTERNOS",
      ].includes(campain)
    ) {
      accion.ToastWarning(
        "Esta campaña aun no esta disponible en este apartado",
        8000
      );
      spinner(false);
    } else {
      let parametros = {
        opc: "direcmovtos",
        fecha: accion.value("fecha_ces_cierre"),
        campain: accion.value("campain_ces"),
      };

      // nos aseguramos de que todo los campos esten llenos correctamente
      let verficarcampos = Object.values(parametros).every(
        (value) => value != null && value !== ""
      );

      if (verficarcampos) {
        $.post(
          "./assets/php/CES/funciones_ces.php",
          parametros,
          function (response) {
            // var response = JSON.parse(response);
            // console.log(response[response.mensaje]);
            switch (response.estado) {
              case 1:
                accion.ToastSuccess(response.mensaje, 8000);
                accion.BotonSuccess('btn_copy_movtosdir');
                spinner(false);
                break;
              default:
                accion.ToastError(`Error: ${response.mensaje}`, 10000);
                accion.BotonError('btn_copy_movtosdir');
                spinner(false);
            }
          }
        )
          .fail(function (jqXHR, textStatus, errorThrown) {
            accion.ToastError(
              `Falló la petición: ${jqXHR.status} ${jqXHR.statusText}`,
              10000
            );
          })
          .always(function () {
            spinner(false);
          });
      } else {
        accion.ToastInfo("Rellene todos los campos");
        spinner(false);
      }
    }
  }

  // 🔥mos a la function cargar campaña para asegurarnos que se ejecute correctamente todo 😉
  cargacampaña(accion.value("campain_ces"));
}

export function respaldargeneracion() {
  function spinner(show) {
    if (show) {
      $("#cargando4-ces").show();
      $("#img-generacion").hide();
    } else {
      $("#cargando4-ces").hide();
      $("#img-generacion").show();
    }
  }
  function cargacampaña(campain) {
    spinner(true);

    if (
      [
        "OPERACIONARGENTINA",
        "PRESTAMOALINEADO",
        "CLUB_VIAL",
        "CLUB_MOTOS",
        "CLUB_SALUD",
        "LIGUEDECREDITO",
        "EVALUACIONCANALESALTERNOS",
      ].includes(campain)
    ) {
      accion.ToastWarning(
        "Esta campaña aun no esta disponible en este apartado",
        8000
      );
      spinner(false);
    } else {
      let parametros = {
        opc: "respaldageneracion",
        fecha: accion.value("fecha_ces_cierre"),
        campain: accion.value("campain_ces"),
      };

      // nos aseguramos de que todo los campos esten llenos correctamente
      let verficarcampos = Object.values(parametros).every(
        (value) => value != null && value !== ""
      );
      if (verficarcampos) {
        $.post(
          "./assets/php/CES/funciones_ces.php",
          parametros,
          function (response) {
            // var response = JSON.parse(response);
            // console.log(response[response.mensaje]);
            switch (response.estado) {
              case 1:
                accion.ToastSuccess(response.mensaje, 8000);
                accion.BotonSuccess('btn_copiar_gen_ces');
                spinner(false);
                break;
              default:
                accion.ToastError(`Error: ${response.mensaje}`, 10000);
                accion.BotonError('btn_copiar_gen_ces');
                spinner(false);
            }
          }
        )
          .fail(function (jqXHR, textStatus, errorThrown) {
            accion.ToastError(
              `Falló la petición: ${jqXHR.status} ${jqXHR.statusText}`,
              10000
            );
          })
          .always(function () {
            spinner(false);
          });
      } else {
        accion.ToastInfo("Rellene todos los campos");
        spinner(false);
      }
    }
  }

  // 🔥mos a la function cargar campaña para asegurarnos que se ejecute correctamente todo 😉
  cargacampaña(accion.value("campain_ces"));
}
