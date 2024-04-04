import * as accion from "../funciones.js"; // importamos las funciones que usamos generalmente

export function copymovtos() {
    function spinner(show) {
      if (show) {
        $("#cargando_ci").show();
        $("#img-movtos-ci").hide();
      } else {
        $("#cargando_ci").hide();
        $("#img-movtos-ci").show();
      }
    }
    // console.log("Ward");
    // return;
  
    // $("#cargando3-ces").show();
    // $("#img-movtos-ci").hide();
  
    function controlinformes() {
      spinner(true);
      
      // console.log('Control de informes: ', campain);
  
      let parametros = {
        opc: "copiarmovtosViMo",
        fecha: accion.value("fecha_campanaunica"),
        campain: accion.value("campain_campanaunica"),
      };
      //  console.log(parametros);
  
      let verficarcampos = Object.values(parametros).every(
        (value) => value != null && value !== ""
      );
        if (verficarcampos) {
          $.post(
            "./assets/php/CampanaUnica/funciones_campanaunica.php",
            parametros,
            function (response) {
              switch (response.estado) {
                case 1:
                  accion.ToastSuccess(response.mensaje, 8000);
                  accion.BotonSuccess('btn_copiar_movtos_ci');
                  spinner(false);
                  break;
                default:
                  accion.ToastError(`Error: ${response.mensaje}`, 10000);
                  accion.BotonError('btn_copiar_movtos_ci');
                  spinner(false);
              }
            }
          )
            .fail(function (jqXHR, textStatus, errorThrown) {
              accion.ToastError(
                `Falló la petición: ${jqXHR.status} ${jqXHR.statusText}`,
                10000
              );
              accion.BotonError('btn_copiar_movtos_ci');
              spinner(false);
            })
            .always(function () {
              spinner(false);
            });
        } else {
          accion.ToastInfo("Rellene todos los campos");
          spinner(false);
        }
    }
    controlinformes();
  }