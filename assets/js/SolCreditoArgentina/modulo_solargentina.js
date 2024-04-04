import * as accion from "../funciones.js"; // importamos las funciones que usamos generalmente

export function copiarmovtos(){
    function spinner(show) {
        if (show) {
          $("#cargando1-solargentina").show();
          $("#img_movtosarg").hide();
        } else {
          $("#cargando1-solargentina").hide();
          $("#img_movtosarg").show();
        }
      }
      function copiarmovimentos() {
        spinner(true);
    
        let parametros = {
          opc: "copymovtos",
          fecha: accion.value("fecha_argentina"),
        };
    
        let verficarcampos = Object.values(parametros).every(
          (value) => value != null && value !== ""
        );
        
          if (verficarcampos) {
            $.post(
              "./assets/php/SolCreditoArgentina/funciones_solargentina.php",
              parametros,
              function (response) {
                switch (response.estado) {
                  case 1:
                        accion.ToastSuccess(response.mensaje, 8000);
                        accion.BotonSuccess('btn_copiar_movtos_argentina');
                        spinner(false);
                        console.log(response.mensaje);
                    break;
                  default:
                    accion.ToastError(`Error: ${response.mensaje}`, 10000);
                    spinner(false);
                    console.log(response.mensaje);
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
      copiarmovimentos()
}

export function respaldardirectorio(){
  function spinner(show) {
    if (show) {
      $("#cargando3-solargentina").show();
      $("#img_dir_arg").hide();
    } else {
      $("#cargando3-solargentina").hide();
      $("#img_dir_arg").show();
    }
  }
  function Directorio() {
    spinner(true);

    let parametros = {
      opc: "CopiarDirectorio",
      fecha: accion.value("fecha_argentina"),
    };

    let verficarcampos = Object.values(parametros).every(
      (value) => value != null && value !== ""
    );

      if (verficarcampos) {
        $.post(
          "./assets/php/SolCreditoArgentina/funciones_solargentina.php",
          parametros,
          function (response) {
            switch (response.estado) {
              case 1:
                    accion.ToastSuccess(response.mensaje, 8000);
                    accion.BotonSuccess('btn_copia_direct_arg');
                    spinner(false);
                    console.log(response.mensaje);
                break;
              default:
                accion.ToastError(`Error: ${response}`, 10000);
                accion.BotonError('btn_copia_direct_arg');
                spinner(false);
                console.log(response);
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
  Directorio()
}

// export function generarmovtostrab(){
//   function spinner(show) {
//     if (show) {
//       $("#cargando2-solargentina").show();
//       $("#img_movtrab_arg").hide();
//     } else {
//       $("#cargando2-solargentina").hide();
//       $("#img_movtrab_arg").show();
//     }
//   }
//   function MovtosTtrab() {
//     spinner(true);

//     let parametros = {
//       opc: "MovtosTtrab",
//       fecha: accion.value("fecha_argentina"),
//     };

//     let verficarcampos = Object.values(parametros).every(
//       (value) => value != null && value !== ""
//     );
//       if (verficarcampos) {
//         $.post(
//           "./assets/php/SolCreditoArgentina/funciones_solargentina.php",
//           parametros,
//           function (response) {
//             switch (response.estado) {
//               case 0:
//                     accion.ToastSuccess(response.mensaje, 8000);
//                     spinner(false);
//                     console.log(response.mensaje);
//                 break;
//               case 2:
//                     accion.ToastWarning(response.mensaje, 8000);
//                     spinner(false);
//                 break;
//               default:
//                 accion.ToastError(`Error: ${response}`, 10000);
//                 spinner(false);
//                 console.log(response);
//             }
//           }
//         )
//           .fail(function (jqXHR, textStatus, errorThrown) {
//             accion.ToastError(
//               `Falló la petición: ${jqXHR.status} ${jqXHR.statusText}`,
//               10000
//             );
//           })
//           .always(function () {
//             spinner(false);
//           });
//       } else {
//         accion.ToastInfo("Rellene todos los campos");
//         spinner(false);
//       }
//   }
//   MovtosTtrab()
// }

export function generarcobertura(){
  function spinner(show) {
    if (show) {
      $("#cargando4-solargentina").show();
      $("#img_cobertura_arg").hide();
    } else {
      $("#cargando4-solargentina").hide();
      $("#img_cobertura_arg").show();
    }
  }
  function Cobertura() {
    spinner(true);

    let parametros = {
      opc: "Cobertura",
      fecha: accion.value("fecha_argentina"),
    };

    let verficarcampos = Object.values(parametros).every(
      (value) => value != null && value !== ""
    );
      if (verficarcampos) {
        $.post(
          "./assets/php/SolCreditoArgentina/funciones_solargentina.php",
          parametros,
          function (response) {
            switch (response.estado) {
              case 0:
                accion.ToastSuccess(response.mensaje, 8000);
                accion.BotonSuccess('btn_cobertura_arg');
                spinner(false);
                break;
              default:
                accion.ToastError(`Error: ${response}`, 10000);
                accion.BotonError('btn_cobertura_arg');
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
  Cobertura()
}