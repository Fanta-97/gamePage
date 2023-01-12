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
          login()
        }
        // else login()
        form.classList.add('was-validated')
        
      }, false)
    })
})()

const getUsers = async() => {
  return (
    await fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(users => users)
        )
}

const saveUser = user => localStorage.setItem('user', JSON.stringify(user))

const login = async() => {
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const users = await getUsers()

  const user = users.find(user => user.emil === email && user.password === email.password)

  if(user === undefined) return alert('EL USUARIO QUE DESEA INGRESAR NO ESTA REGISTRADO')
  saveUser(user)
  window.open(window.open("../pages/index.html", "_self"))

}