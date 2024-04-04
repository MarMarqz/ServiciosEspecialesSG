function getid(id) {
  return document.getElementById(id);
}
function value(id) {
  return document.getElementById(id).value;
}
export function monitor_ces() {
  console.log("Estan Pasando Cosas en el ces🤯");

  let parametros = {
    opc: "ces_campain",
    campain: value("campains_monitor_ces"),
    fecha: value("fecha_monitor_ces"),
  };

  // console.log(parametros);

  // Verificamos si todos los campos estan llenados
  let verficarcampos = Object.values(parametros).every(
    (value) => value != null && value !== ""
  );

  verficarcampos //Hacemos un if para saber si es verdad
    ? $.post(
        "./assets/php/monitor/monitor.php",
        parametros,
        function (response) {
          // Verifica si la respuesta es un JSON válido
          // console.log("estan pasando cosas en el post");
          // console.trace(response);
          // alert("alertamesta");
          if (typeof response === "object" || typeof response === "string") {
            if (typeof response === "string") {
              if (!response.startsWith("{")) {
                // console.error("Error al analizar la respuesta JSON:", error);
                alert("error al consultar la tabla, probablemente no exista🤔")
                return;
              }
              var response = JSON.parse(response);
            }
            try {
              // console.log(response);

              // Accede a las propiedades del objeto response
              var productivo = response.productivo;
              var historico = response.historico;

              // Actualiza los elementos de la tabla con los resultados recibidos
              $("#carga_ces").text(productivo.generacion);
              $("#directrio_ces").text(productivo.directorio);
              $("#movimientos_ces").text(productivo.movimientos);
              $("#carga_ces_historico").text(historico.generacion);
              $("#directrio_ces_historico").text(historico.directorio);
              $("#movimientos_ces_historico").text(historico.movimientos);
            } catch (error) {
              console.error("Error al analizar la respuesta JSON:", error);
            }
          } else {
            console.error("La respuesta no es un JSON válido:", response);
          }
        }
      ).fail(function () {
        // Aquí manejas cualquier error que pueda ocurrir durante la solicitud
        // console.debug('no pasaron cosas');
        console.error("Error al obtener los datos");
        Toastify({
          text: "Error al obtener los datos",
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #d40101, #ff5959)",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
      })
    : Toastify({
        text: "Rellene todos los campos pariente 😒",
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background:
            "linear-gradient(125deg, rgba(0,117,167,1) 11%, rgba(0,172,224,1) 41%, rgba(0,217,255,1) 100%)",
        },
      }).showToast();
}

export function monitor_medallia() {
  console.log("Estan Pasando Cosas en medallia🤯");

  let parametros = {
    opc: "medallia",
    fecha: value("fecha_monitor_medallia"),
  };

  // console.log(parametros);

  // Verificamos si todos los campos estan llenados
  let verficarcampos = Object.values(parametros).every(
    (value) => value != null && value !== ""
  );

  verficarcampos //Hacemos un if para saber si es verdad
    ? $.post(
        "./assets/php/monitor/monitor.php",
        parametros,
        function (response) {
          // Verifica si la respuesta es un JSON válido
          console.log("estan pasando cosas en el post");
          // console.trace(response);
          // alert("alertamesta");
          if (typeof response === "object" || typeof response === "string") {
            if (typeof response === "string") {
              if (!response.startsWith("{")) {
                console.error("Error al analizar la respuesta JSON:", error);
                return;
              }
              var response = JSON.parse(response);
            }
            try {
              // console.log(response);

              // Accede a las propiedades del objeto response
              var productivo = response.productivo;
              var historico = response.historico;

              // Actualiza los elementos de la tabla con los resultados recibidos
              $("#carga_medallia").text(productivo.generacion);
              $("#directrio_medallia").text(productivo.directorio);
              $("#movimientos_medallia").text(productivo.movimientos);
              $("#carga_medallia_hist").text(historico.generacion);
              $("#directrio_medallia_hist").text(historico.directorio);
              $("#movimientos_medallia_hist").text(historico.movimientos);
            } catch (error) {
              console.error("Error al analizar la respuesta JSON:", error);
            }
          } else {
            console.error("La respuesta no es un JSON válido:", response);
          }
        }
      ).fail(function () {
        // Aquí manejas cualquier error que pueda ocurrir durante la solicitud
        // console.debug('no pasaron cosas');
        console.error("Error al obtener los datos");
        Toastify({
          text: "Error al obtener los datos",
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #d40101, #ff5959)",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
      })
    : Toastify({
        text: "Rellene todos los campos pariente 😒",
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background:
            "linear-gradient(125deg, rgba(0,117,167,1) 11%, rgba(0,172,224,1) 41%, rgba(0,217,255,1) 100%)",
        },
      }).showToast();
}

export function monitor_coppel_pay() {
  console.log("Estan Pasando Cosas  en coppel pay 🤯");

  let parametros = {
    opc: "coppel_pay",
    fecha: value("fecha_monitor_coppel_pay"),
  };

  // console.log(parametros);

  // Verificamos si todos los campos estan llenados
  let verficarcampos = Object.values(parametros).every(
    (value) => value != null && value !== ""
  );

  verficarcampos //Hacemos un if para saber si es verdad
    ? $.post(
        "./assets/php/monitor/monitor.php",
        parametros,
        function (response) {
          // Verifica si la respuesta es un JSON válido
          console.log("estan pasando cosas en el post");
          // console.trace(response);
          // alert("alertamesta");
          if (typeof response === "object" || typeof response === "string") {
            if (typeof response === "string") {
              if (!response.startsWith("{")) {
                console.error("Error al analizar la respuesta JSON:", error);
                return;
              }
              var response = JSON.parse(response);
            }
            try {
              // console.log(response);

              // Accede a las propiedades del objeto response
              var productivo = response.productivo;
              var historico = response.historico;

              // Actualiza los elementos de la tabla con los resultados recibidos
              $("#carga_coppelpay").text(productivo.generacion);
              $("#directrio_coppelpay").text(productivo.directorio);
              $("#movimientos_coppelpay").text(productivo.movimientos);
              $("#carga_coppelpay_historico").text(historico.generacion);
              $("#directrio_coppelpay_historico").text(historico.directorio);
              $("#movimientos_coppelpay_historico").text(historico.movimientos);
            } catch (error) {
              console.error("Error al analizar la respuesta JSON:", error);
            }
          } else {
            console.error("La respuesta no es un JSON válido:", response);
          }
        }
      ).fail(function () {
        // Aquí manejas cualquier error que pueda ocurrir durante la solicitud
        // console.debug('no pasaron cosas');
        console.error("Error al obtener los datos");
        Toastify({
          text: "Error al obtener los datos",
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #d40101, #ff5959)",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
      })
    : Toastify({
        text: "¿Que pasó pariente? rellene todos los campos😒",
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background:
            "linear-gradient(125deg, rgba(0,117,167,1) 11%, rgba(0,172,224,1) 41%, rgba(0,217,255,1) 100%)",
        },
      }).showToast();
}

export function monitor_datoserroneos() {
  console.log("Estan Pasando Cosas  en datos erroneos 🤯");

  let parametros = {
    opc: "datos_erroneos",
    fecha: value("fecha_monitor_datos_erroneos"),
  };

  // console.log(parametros);

  // Verificamos si todos los campos estan llenados
  let verficarcampos = Object.values(parametros).every(
    (value) => value != null && value !== ""
  );

  verficarcampos //Hacemos un if para saber si es verdad
    ? $.post(
        "./assets/php/monitor/monitor.php",
        parametros,
        function (response) {
          // Verifica si la respuesta es un JSON válido
          // console.log('estan pasando cosas en el post');
          // console.trace(response);
          // alert("alertamesta");
          if (typeof response === "object" || typeof response === "string") {
            if (typeof response === "string") {
              if (!response.startsWith("{")) {
                console.error("Error al analizar la respuesta JSON:", error);
                return;
              }
              var response = JSON.parse(response);
            }
            try {
              console.log(response);

              // Accede a las propiedades del objeto response
              var productivo = response.productivo;
              var historico = response.historico;

              // Actualiza los elementos de la tabla con los resultados recibidos
              $("#carga_datoserroneos").text(productivo.generacion);
              $("#directrio_datoserroneos").text(productivo.directorio);
              $("#movimientos_datoserroneos").text(productivo.movimientos);
              $("#carga_datoserroneos_historico").text(historico.generacion);
              $("#directrio_datoserroneos_historico").text(
                historico.directorio
              );
              $("#movimientos_datoserroneos_historico").text(
                historico.movimientos
              );
            } catch (error) {
              console.error("Error al analizar la respuesta JSON:", error);
            }
          } else {
            console.error("La respuesta no es un JSON válido:", response);
          }
        }
      ).fail(function () {
        // Aquí manejas cualquier error que pueda ocurrir durante la solicitud
        // console.debug('no pasaron cosas');
        console.error("Error al obtener los datos");
        Toastify({
          text: "Error al obtener los datos",
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #d40101, #ff5959)",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
      })
    : Toastify({
        text: "¿Que pasó pariente? rellene todos los campos😒",
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background:
            "linear-gradient(125deg, rgba(0,117,167,1) 11%, rgba(0,172,224,1) 41%, rgba(0,217,255,1) 100%)",
        },
      }).showToast();
}

export function monitor_referenciasincompletas() {
  console.log("Estan Pasando Cosas  en referencias incompletas 🤯");

  let parametros = {
    opc: "referencias_incompletas",
    fecha: value("fecha_monitor_referenciasincompletas"),
  };

  // console.log(parametros);

  // Verificamos si todos los campos estan llenados
  let verficarcampos = Object.values(parametros).every(
    (value) => value != null && value !== ""
  );

  verficarcampos //Hacemos un if para saber si es verdad
    ? $.post(
        "./assets/php/monitor/monitor.php",
        parametros,
        function (response) {
          // Verifica si la respuesta es un JSON válido
          // console.log('estan pasando cosas en el post');
          // console.trace(response);
          // alert("alertamesta");
          if (typeof response === "object" || typeof response === "string") {
            if (typeof response === "string") {
              if (!response.startsWith("{")) {
                console.error("Error al analizar la respuesta JSON:", error);
                return;
              }
              var response = JSON.parse(response);
            }
            try {
              // console.log(response);

              // Accede a las propiedades del objeto response
              var productivo = response.productivo;
              var historico = response.historico;

              // Actualiza los elementos de la tabla con los resultados recibidos
              $("#carga_referenciasincompletas").text(productivo.generacion);
              $("#directrio_referenciasincompletas").text(
                productivo.directorio
              );
              $("#movimientos_referenciasincompletas").text(
                productivo.movimientos
              );
              $("#carga_referenciasincompletas_historico").text(
                historico.generacion
              );
              $("#directrio_referenciasincompletas_historico").text(
                historico.directorio
              );
              $("#movimientos_referenciasincompletas_historico").text(
                historico.movimientos
              );
            } catch (error) {
              console.error("Error al analizar la respuesta JSON:", error);
            }
          } else {
            console.error("La respuesta no es un JSON válido:", response);
            Swal.fire({
              customClass: "swal_width",
              title: "La respuesta no es un JSON válido:",
              text: response,
              icon: "error",
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
          }
        }
      ).fail(function () {
        // Aquí manejas cualquier error que pueda ocurrir durante la solicitud
        // console.debug('no pasaron cosas');
        console.error("Error al obtener los datos");
        Toastify({
          text: "Error al obtener los datos",
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #d40101, #ff5959)",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
      })
    : Toastify({
        text: "¿Que pasó pariente? rellene todos los campos😒",
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background:
            "linear-gradient(125deg, rgba(0,117,167,1) 11%, rgba(0,172,224,1) 41%, rgba(0,217,255,1) 100%)",
        },
      }).showToast();
}

export function monitor_sol_credito_argentina() {
  console.log("Estan Pasando Cosas  en solicitud de credito argentina 👨🏽");

  let parametros = {
    opc: "solicitud_de_credito_argentina",
    fecha: value("fecha_monitor_solcreditoargentina"),
  };

  // console.log(parametros);

  // Verificamos si todos los campos estan llenados
  let verficarcampos = Object.values(parametros).every(
    (value) => value != null && value !== ""
  );

  verficarcampos //Hacemos un if para saber si es verdad
    ? $.post(
        "./assets/php/monitor/monitor.php",
        parametros,
        function (response) {
          // Verifica si la respuesta es un JSON válido
          // console.log('estan pasando cosas en el post');
          // console.trace(response);
          // alert("alertamesta");
          if (typeof response === "object" || typeof response === "string") {
            if (typeof response === "string") {
              if (!response.startsWith("{")) {
                // console.error("Error al analizar la respuesta JSON:", response);
                Swal.fire({
                  customClass: "swal_width",
                  title: "Ocurrio un error",
                  text: "Error al analizar la respuesta JSON",
                  icon: "error",
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
                return;
              }
              var response = JSON.parse(response);
            }
            try {
              // console.log(response);

              // Accede a las propiedades del objeto response
              var productivo = response.productivo;
              var historico = response.historico;

              // Actualiza los elementos de la tabla con los resultados recibidos
              $("#carga_solcreditoargentina").text(productivo.generacion);
              $("#directrio_solcreditoargentina").text(productivo.directorio);
              $("#movimientos_solcreditoargentina").text(
                productivo.movimientos
              );
              $("#carga_solcreditoargentina_historico").text(
                historico.generacion
              );
              $("#directrio_solcreditoargentina_historico").text(
                historico.directorio
              );
              $("#movimientos_solcreditoargentina_historico").text(
                historico.movimientos
              );
            } catch (error) {
              console.error("Error al analizar la respuesta JSON:", error);
              Swal.fire({
                customClass: "swal_width",
                title: "Error al analizar la respuesta JSON",
                text: error,
                icon: "error",
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
            }
          } else {
            console.error("La respuesta no es un JSON válido:", response);
            Swal.fire({
              customClass: "swal_width",
              title: "La respuesta no es un JSON válido:",
              text: response,
              icon: "error",
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
          }
        }
      ).fail(function () {
        // Aquí manejas cualquier error que pueda ocurrir durante la solicitud
        // console.debug('no pasaron cosas');
        console.error("Error al obtener los datos");
        Toastify({
          text: "Error al obtener los datos",
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #d40101, #ff5959)",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
      })
    : Toastify({
        text: "¿Que pasó pariente? rellene todos los campos😒",
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background:
            "linear-gradient(125deg, rgba(0,117,167,1) 11%, rgba(0,172,224,1) 41%, rgba(0,217,255,1) 100%)",
        },
      }).showToast();
}
export function monitor_conoff() {
  console.log("Estan Pasando Cosas en confirmacion Off 🥳");

  let parametros = {
    opc: "confirmacion_off",
    fecha: value("fecha_monitor_confirmacion_off"),
  };

  // console.log(parametros);

  // Verificamos si todos los campos estan llenados
  let verficarcampos = Object.values(parametros).every(
    (value) => value != null && value !== ""
  );

  verficarcampos //Hacemos un if para saber si es verdad
    ? $.post(
        "./assets/php/monitor/monitor.php",
        parametros,
        function (response) {
          // Verifica si la respuesta es un JSON válido
          // console.log('estan pasando cosas en el post');
          // console.trace(response);
          // alert("alertamesta");
          if (typeof response === "object" || typeof response === "string") {
            if (typeof response === "string") {
              if (!response.startsWith("{")) {
                console.error("Error al analizar la respuesta JSON:", error);
                return;
              }
              var response = JSON.parse(response);
            }
            try {
              // console.log(response);

              // Accede a las propiedades del objeto response
              var productivo = response.productivo;
              var historico = response.historico;

              // Actualiza los elementos de la tabla con los resultados recibidos
              $("#carga_confirmacion_off").text(productivo.generacion);
              $("#directrio_confirmacion_off").text(productivo.directorio);
              $("#movimientos_confirmacion_off").text(productivo.movimientos);
              $("#carga_confirmacion_off_historico").text(historico.generacion);
              $("#directrio_confirmacion_off_historico").text(
                historico.directorio
              );
              $("#movimientos_confirmacion_off_historico").text(
                historico.movimientos
              );
            } catch (error) {
              console.error("Error al analizar la respuesta JSON:", error);
            }
          } else {
            console.error("La respuesta no es un JSON válido:", response);
          }
        }
      ).fail(function () {
        // Aquí manejas cualquier error que pueda ocurrir durante la solicitud
        // console.debug('no pasaron cosas');
        console.error("Error al obtener los datos");
        Toastify({
          text: "Error al obtener los datos",
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #d40101, #ff5959)",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
      })
    : Toastify({
        text: "¿Que pasó pariente? rellene todos los campos😒",
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background:
            "linear-gradient(125deg, rgba(0,117,167,1) 11%, rgba(0,172,224,1) 41%, rgba(0,217,255,1) 100%)",
        },
      }).showToast();
}

export function monitor_campanaunica() {
  console.log("Estan Pasando Cosas  en campañas unicas 🤯");

  let parametros = {
    opc: "campanas_unicas",
    fecha: value("fecha_monitor_campanaunica"),
    campain: value("monitor_campain_campanaunica"),
  };

  // console.log(parametros);

  // Verificamos si todos los campos estan llenados
  let verficarcampos = Object.values(parametros).every(
    (value) => value != null && value !== ""
  );

  verficarcampos //Hacemos un if para saber si es verdad
    ? $.post(
        "./assets/php/monitor/monitor.php",
        parametros,
        function (response) {
          // Verifica si la respuesta es un JSON válido
          // console.log('estan pasando cosas en el post');
          // console.trace(response);
          // alert("alertamesta");
          if (typeof response === "object" || typeof response === "string") {
            if (typeof response === "string") {
              if (!response.startsWith("{")) {
                console.error("Error al analizar la respuesta JSON:", error);
                return;
              }
              var response = JSON.parse(response);
            }
            try {
              // console.log(response);

              // Accede a las propiedades del objeto response
              var productivo = response.productivo;
              var historico = response.historico;

              // Actualiza los elementos de la tabla con los resultados recibidos
              $("#carga_campanaunica").text(productivo.generacion);
              $("#directrio_campanaunica").text(productivo.directorio);
              $("#movimientos_campanaunica").text(productivo.movimientos);
              $("#carga_campanaunica_historica").text(historico.generacion);
              $("#directrio_campanaunica_historica").text(historico.directorio);
              $("#movimientos_campanaunica_historica").text(
                historico.movimientos
              );
            } catch (error) {
              console.error("Error al analizar la respuesta JSON:", error);
            }
          } else {
            console.error("La respuesta no es un JSON válido:", response);
          }
        }
      ).fail(function () {
        // Aquí manejas cualquier error que pueda ocurrir durante la solicitud
        // console.debug('no pasaron cosas');
        console.error("Error al obtener los datos");
        Toastify({
          text: "Error al obtener los datos",
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #d40101, #ff5959)",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
      })
    : Toastify({
        text: "¿Que pasó pariente? rellene todos los campos😒",
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background:
            "linear-gradient(125deg, rgba(0,117,167,1) 11%, rgba(0,172,224,1) 41%, rgba(0,217,255,1) 100%)",
        },
      }).showToast();
}
export function monitor_lym() {
  console.log("Estan Pasando Cosas en LyM 🤦🏽‍♂️");

  let parametros = {
    opc: "lym",
    fecha: value("fecha_monitor_lym"),
  };

  // console.log(parametros);

  // Verificamos si todos los campos estan llenados
  let verficarcampos = Object.values(parametros).every(
    (value) => value != null && value !== ""
  );

  verficarcampos //Hacemos un if para saber si es verdad
    ? $.post(
        "./assets/php/monitor/monitor.php",
        parametros,
        function (response) {
          // Verifica si la respuesta es un JSON válido
          // console.log('estan pasando cosas en el post');
          // console.trace(response);
          // alert("alertamesta");
          if (typeof response === "object" || typeof response === "string") {
            if (typeof response === "string") {
              if (!response.startsWith("{")) {
                console.error("Error al analizar la respuesta JSON:", error);
                Swal.fire({
                  customClass: "swal_width",
                  title: "Ocurrio un error",
                  text: "Error al analizar la respuesta JSON",
                  icon: "error",
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
                return;
              }
              var response = JSON.parse(response);
            }
            try {
              // console.log(response);

              // Accede a las propiedades del objeto response
              var productivo = response.productivo;
              var historico = response.historico;

              // Actualiza los elementos de la tabla con los resultados recibidos
              $("#carga_lym").text(productivo.generacion);
              $("#directrio_lym").text(productivo.directorio);
              $("#movimientos_lym").text(
                productivo.movimientos
              );
              $("#carga_lym_historico").text(
                historico.generacion
              );
              $("#directrio_lym_historico").text(
                historico.directorio
              );
              $("#movimientos_lym_historico").text(
                historico.movimientos
              );
            } catch (error) {
              console.error("Error al analizar la respuesta JSON:", error);
              Swal.fire({
                customClass: "swal_width",
                title: "Error al analizar la respuesta JSON",
                text: error,
                icon: "error",
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
            }
          } else {
            console.error("La respuesta no es un JSON válido:", response);
            Swal.fire({
              customClass: "swal_width",
              title: "La respuesta no es un JSON válido:",
              text: response,
              icon: "error",
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
          }
        }
      ).fail(function () {
        // Aquí manejas cualquier error que pueda ocurrir durante la solicitud
        // console.debug('no pasaron cosas');
        console.error("Error al obtener los datos");
        Toastify({
          text: "Error al obtener los datos",
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #d40101, #ff5959)",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
      })
    : Toastify({
        text: "¿Que pasó pariente? rellene todos los campos😒",
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background:
            "linear-gradient(125deg, rgba(0,117,167,1) 11%, rgba(0,172,224,1) 41%, rgba(0,217,255,1) 100%)",
        },
      }).showToast();
}

export function monitor_conON() {
  console.log("Estan Pasando Cosas en la confirmacion ON 🤦🏽‍♂️");

  let parametros = {
    opc: "confirmacion_on",
    fecha: value("fecha_monitor_conON"),
  };

  // console.log(parametros);

  // Verificamos si todos los campos estan llenados
  let verficarcampos = Object.values(parametros).every(
    (value) => value != null && value !== ""
  );

  verficarcampos //Hacemos un if para saber si es verdad
    ? $.post(
        "./assets/php/monitor/monitor.php",
        parametros,
        function (response) {
          // Verifica si la respuesta es un JSON válido
          // console.log('estan pasando cosas en el post');
          // console.trace(response);
          // alert("alertamesta");
          if (typeof response === "object" || typeof response === "string") {
            if (typeof response === "string") {
              if (!response.startsWith("{")) {
                console.error("Error al analizar la respuesta JSON:", error);
                Swal.fire({
                  customClass: "swal_width",
                  title: "Ocurrio un error",
                  text: "Error al analizar la respuesta JSON",
                  icon: "error",
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
                return;
              }
              var response = JSON.parse(response);
            }
            try {
              // console.log(response);

              // Accede a las propiedades del objeto response
              var productivo = response.productivo;
              var historico = response.historico;

              // Actualiza los elementos de la tabla con los resultados recibidos
              $("#carga_conON").text(productivo.generacion);
              $("#directrio_conON").text(productivo.directorio);
              $("#movimientos_conON").text(
                productivo.movimientos
              );
              $("#carga_conON_historico").text(
                historico.generacion
              );
              $("#directrio_conON_historico").text(
                historico.directorio
              );
              $("#movimientos_conON_historico").text(
                historico.movimientos
              );
            } catch (error) {
              console.error("Error al analizar la respuesta JSON:", error);
              Swal.fire({
                customClass: "swal_width",
                title: "Error al analizar la respuesta JSON",
                text: error,
                icon: "error",
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
            }
          } else {
            console.error("La respuesta no es un JSON válido:", response);
            Swal.fire({
              customClass: "swal_width",
              title: "La respuesta no es un JSON válido:",
              text: response,
              icon: "error",
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
          }
        }
      ).fail(function () {
        // Aquí manejas cualquier error que pueda ocurrir durante la solicitud
        // console.debug('no pasaron cosas');
        console.error("Error al obtener los datos");
        Toastify({
          text: "Error al obtener los datos",
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "linear-gradient(to right, #d40101, #ff5959)",
          },
          onClick: function () {}, // Callback after click
        }).showToast();
      })
    : Toastify({
        text: "¿Que pasó pariente? rellene todos los campos😒",
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background:
            "linear-gradient(125deg, rgba(0,117,167,1) 11%, rgba(0,172,224,1) 41%, rgba(0,217,255,1) 100%)",
        },
      }).showToast();
}

function formatDate(d) {
  var month = d.getMonth();
  var day = d.getDate().toString().padStart(2, '0');
  var year = d.getFullYear();
  
  // Obtener los últimos dos dígitos del año
  year = year.toString().substr(-2);
  
  // Incrementar el mes por  1 ya que está indexado desde  0
  month = (month +  1).toString().padStart(2, '0');

  // Devolver la cadena en formato "MMddyy"
  return month + day + year;
}

export function marcararchivo(){
  
  let archivos = {
    opc: "buscararchivo"
  }

  
}
