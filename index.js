
function joinow(){
    window.location.href="/signup.html"
}   

let baseServerURL=`https://mock-server-api-attempt-2.onrender.com`

const toursURL = `${baseServerURL}/cities`;

let mainSection = document.getElementById("tour-list-wrapper");



let loginWrapper= document.getElementById("login-wrapper")

let userName=localStorage.getItem("user_name") || null ;


if(userName){
    loginWrapper.innerHTML=userName
}


const btn= document.getElementById("searchbtn")

btn.addEventListener("click",function(e){
  e.preventDefault()
  let x=document.getElementById("inp").value
  localStorage.setItem("input",x)
  window.location.href="./search.html"; 
  
})

// let form=document.querySelector("form")


// form.addEventListener("submit",function(){
//     x=document.getElementById("inp").value
//    localStorage.setItem("input",x)
    
//    console.log(x)
// })
  
  




