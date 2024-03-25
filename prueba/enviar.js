document.getElementById("enviar_archivo").addEventListener("click", function () {
    generearces(); //exportamos la funcion del archivo moduloces.js
  });

function generearces(){

    let fecGeneracion = document.getElementById('fecha_ces_gen').value;
    console.log(fecGeneracion);
     
    // Obtén el elemento de entrada de archivo con el ID 'file'
    var fileInput = document.getElementById('file');
    var file = fileInput.files[0];
     
    // Crea un nuevo objeto FormData y agrega el archivo y la fecha
    var formData = new FormData();
    formData.append('file', file);
    formData.append('fecha', fecGeneracion);
     
    console.log(file.name);
     
    // Verifica que todos los campos estén llenos antes de enviar
    let verificarCampos = Object.values(formData).every(value => value != null && value !== '');
     
    verificarCampos ?
      // Envía los datos 
      $(document).ready(function() {
        $('#enviar_archivo').on('click', function(e) {
            e.preventDefault();
            var formData = new FormData(this);
            $.ajax({
                url: $(this).attr('action'),
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function(response) {
                    alert(response);
                }
            });
        });
    })
      :
      alert("Rellene todos los campos");
  }