const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.querySelector('form')
const loader = document.querySelector("#loading")
const warning_ = document.getElementById('warning')
form.addEventListener('submit',function(e){
    warning_.innerText = null;
    loader.classList.add('display')
    e.preventDefault()
    chk()

})
function chk(){
    fetch('https://mock-server-api-attempt-2.onrender.com/Users')
    .then(res=>res.json())
    .then(data=>{
        loader.classList.remove('display')
        let flag = false
        data.forEach(element => {
            if(element.Email==email.value && element.Password==password.value){
                flag = true
            
            }
        });
        if(flag){
            var warning = document.createElement("p");
            warning.innerHTML = "Login Success";
            warning.style.color = "green";
            warning.style.fontWeight = "bold";
            warning.style.textAlign = "center";
            warning.style.marginTop = "10px";
            warning_.appendChild(warning);

        } 
        else{
            var warning = document.createElement("p");
            warning.innerHTML = "Email id or Password is Incorrect";
            warning.style.color = "red";
            warning.style.fontWeight = "bold";
            warning.style.textAlign = "center";
            warning.style.marginTop = "10px";
            warning_.appendChild(warning);
        }

    })
    .catch(error=>{
        console.log(error)
    })
}

function chkAdmin(){

    if(email.value =='Admin'&&password.value=='Admin'){
        window.location.href = "/admin.html";
    }
    else{
        alert("Incorrect Details")
    }

}