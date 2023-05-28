const forms = document.querySelector(".forms"),
passwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

passwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault();
 forms.classList.toggle("show-signup");
})
})





let password=document.getElementsByClassName('password').value
let email=document.getElementById('email').value
let username=document.getElementsByClassName('username').value
let firstname=document.getElementsByClassName('firstname').value
let lastname=document.getElementsByClassName('lastname').value
let privatenumber=document.getElementsByClassName('privatenumber').value

function func0() {
      fetch('https://kketelauri-001-site1.gtempurl.com/api/user/adduser'), {

        



      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
          "email": email.value,
          "password":password.value,
    })
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))
  }
}

function func1() {
  
fetch('https://kketelauri-001-site1.gtempurl.com/api/user/adduser', {

method: 'POST',
headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
},
body: JSON.stringify({ 
    "userName": username.value,
    "firstName": firstname.value,
    "lastName": lastname.value,
    "email": email.value,
    "privateNumber": privatenumber.value,
    "password": password.value,
    "active": true})
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))
}