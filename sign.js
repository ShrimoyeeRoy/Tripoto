
let ary=JSON.parse(localStorage.getItem("arr"))||[]
document.getElementById("sign").addEventListener("click",Signfun)
function Signfun(e){
e.preventDefault();
let name=document.getElementById("user_name").value;
let email=document.getElementById("user_email").value;
let password=document.getElementById("user_password").value;
if(name==""|| email==""|| password=="" )
{
alert("please fill all the details ")
}
else{
//console.log(name,email,password);
let obj={name,email,password};
//console.log(obj);
ary.push(obj);
localStorage.setItem("arr",JSON.stringify(ary))
alert("signedup")
window.location.href="./log.html"
}
}

