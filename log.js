
let ary=JSON.parse(localStorage.getItem("arr"))
document.getElementById("log").addEventListener("click",Logfun)
function Logfun(e){
e.preventDefault();
let lemail=document.getElementById("log_email").value;
let lpassword=document.getElementById("log_password").value;
//console.log(lemail,lpassword)
if(lemail==""|| lpassword==""){
alert("invalid userdata");
}
else{
let data=false;
for(let i=0;i<ary.length;i++){
if(ary[i].email==lemail && ary[i].password==lpassword){
data=true;
}
}
data?alert("login sucess") : alert("invalid password");
window.location.href="./index.html"
}

}
