const user = document.getElementById('user')
const btnLogin = document.getElementById('login')
const btnAdmin = document.getElementById('admin')



btnLogin.addEventListener("click", () => {
  let userLogged = getUser()
  if(btnLogin.textContent === "Logout") {
    user.classList.toggle('d-none')
    localStorage.removeItem('user')
    btnLogin.textContent = "Login"
    if(isAdmin(userLogged.rol)) btnAdmin.classList.toggle('d-none')
  }
  else window.open("../pages/login.html", "_self");  
})

const isAdmin = rol => rol === "admin"

const getUser = () => JSON.parse(localStorage.getItem('user'))

const showUser = () => {
  let userLogged = getUser()
  
  if(userLogged) {
    const {name, rol} = userLogged
    user.textContent = `Hi @${name}`
    user.classList.toggle('d-none')
    btnLogin.textContent = "Logout"
    if(isAdmin(rol)) btnAdmin.classList.toggle('d-none') 
  }
}
showUser()