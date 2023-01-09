const user = document.getElementById('user')
const btnLogin = document.getElementById('login')

btnLogin.addEventListener("click", () => {
  console.log(btnLogin.textContent)
  if(btnLogin.textContent === "Logout") {
    user.classList.toggle('d-none')
    localStorage.clear()
    btnLogin.textContent = "Login"
  }
  else window.open("../pages/login.html", "_self");  
    
})

const mostrarUsuario = () => {
  let userLogged = JSON.parse(localStorage.getItem('user'))
  console.log(userLogged)
  if(userLogged !== null) {
    user.textContent = `Bienvenido/a   ${userLogged.usserName}`
    user.classList.toggle('d-none')
    btnLogin.textContent = "Logout"
  }
}
mostrarUsuario()