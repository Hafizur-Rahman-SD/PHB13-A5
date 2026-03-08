const form = document.getElementById("loginForm")

form.addEventListener("submit", function(event){

event.preventDefault()

const username = document.getElementById("username").value
const password = document.getElementById("password").value

const errorMsg = document.getElementById("errorMsg")

const adminUser = "admin"
const adminPass = "admin123"

if(username === adminUser && password === adminPass){

alert("Login Successful!")

window.location.href = "index.html"

}
else{

errorMsg.textContent = "Invalid username or password"

}

})