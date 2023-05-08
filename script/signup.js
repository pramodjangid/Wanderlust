const name_ = document.getElementById('name')
const email_ = document.getElementById('email')
const Age_ = document.getElementById('Age')
const password_ = document.getElementById('password')
const repassword_ = document.getElementById('password2')
const form = document.querySelector('form')
let data_length = 0
const loader = document.querySelector("#loading")
const warning_ = document.getElementById('warning')

form.addEventListener('submit',function(e){
    e.preventDefault();
   warning_.innerText = null
    chkunique()

    
})

function adduser(){
    fetch('https://mock-server-api-attempt-2.onrender.com/Users',{
        method : "POST",
        headers : {
            "Content-Type": "application/json"
        },
        body : JSON.stringify({
            "id" : data_length+1,
            "Name" : name_.value,
            "Email" : email_.value,
            "Age" : Age_.value,
            "Password" : password_.value, 
            "Bookings" : [],
            "Cancled" : []
        })
    }).then(data=>{
        var warning = document.createElement("p");
            warning.innerHTML = "User Registered";
            warning.style.color = "green";
            warning.style.fontWeight = "bold";
            warning.style.textAlign = "center";
            warning.style.marginTop = "10px";
            warning_.appendChild(warning);
    })
}


function chkunique(){
    loader.classList.add('display')
    fetch('https://mock-server-api-attempt-2.onrender.com/Users')
    
    .then(res=>{
        loader.classList.remove('display')
       return res.json()
    })
    .then(data=>{
        
        data_length = data.length
        let flag = true
        
        data.forEach(item=>{
            console.log(item.Email)
            if(item.Email == email_.value){
                flag = false
                
            }
        })

       
        if(password_.value == repassword_.value && flag===true){
                adduser()
            }
        else if(flag){
            var warning = document.createElement("p");
            warning.innerHTML = "Password Does not match";
            warning.style.color = "red";
            warning.style.fontWeight = "bold";
            warning.style.textAlign = "center";
            warning.style.marginTop = "10px";
            warning_.appendChild(warning);
        }
        else{
            var warning = document.createElement("p");
            warning.innerHTML = "Email Id Already Exists!";
            warning.style.color = "red";
            warning.style.fontWeight = "bold";
            warning.style.textAlign = "center";
            warning.style.marginTop = "10px";
            warning_.appendChild(warning);
        }

    })
    .catch(error=>{
        console.log(error);
    })
}
