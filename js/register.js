(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  
  // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados

  // Bucle sobre ellos y evitar el envío
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        // else login()
        form.classList.add('was-validated')
        
      }, false)
    })
})()