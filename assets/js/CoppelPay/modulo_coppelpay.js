import * as accion from "../funciones.js"; // importamos las funciones que usamos generalmente

export function MovtosLCoppelPay() {
    function spinner(show) {
      if (show) {
        $("#cargando2-coppelpay").show();
        $("#movtos_coppelpay").hide();
      } else {
        $("#cargando2-coppelpay").hide();
        $("#movtos_coppelpay").show();
      }
    }
  
    function cargarmovimientos() {
      spinner(true);
      console.log('Boton Cargar Movimientos');
  
      let parametros = {
        opc: "insertarmovimientos",
        fecha: accion.value("fecha_coppelpay"),
      };
  
      let verficarcampos = Object.values(parametros).every(
        (value) => value != null && value !== ""
      );
  
      if (verficarcampos) {
        $.post(
          "./assets/php/CoppelPay/funciones_coppelpay.php",
          parametros,
          function (response) {
            switch (response.estado) {
              case 0:
                accion.ToastSuccess(response.mensaje, 8000);
                accion.BotonSuccess('btn_insertar_movtos_coppelpay');
                spinner(false);
                break;
              default:
                accion.ToastError(`Error: ${response}`, 10000);
                accion.BotonError('btn_insertar_movtos_coppelpay');
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
    cargarmovimientos(accion.value("fecha_coppelpay"));
  }

  export function respaldoCoppelPay() {
    function spinner(show) {
      if (show) {
        $("#cargando3-coppelpay").show();
        $("#respaldar_coppelpay").hide();
      } else {
        $("#cargando3-coppelpay").hide();
        $("#respaldar_coppelpay").show();
      }
    }
  
    function respaldarCoppelpay() {
      spinner(true);
      console.log('Boton Respaldar');
  
      let parametros = {
        opc: "respaldar",
        fecha: accion.value("fecha_coppelpay"),
      };

      let verficarcampos = Object.values(parametros).every(
        (value) => value != null && value !== ""
      );

      if (verficarcampos) {

        $.post(
          "./assets/php/CoppelPay/funciones_coppelpay.php",
          parametros,
          function (response) {
            switch (response.estado) {
              case 0:
                accion.ToastSuccess(response.mensaje, 8000);
                accion.BotonSuccess('btn_respalda_movtos_coppelpay');
                spinner(false);
                break;
              default:
                accion.ToastError(`Error: ${response}`, 10000);
                accion.BotonError('btn_respalda_movtos_coppelpay');
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
    respaldarCoppelpay();
  }