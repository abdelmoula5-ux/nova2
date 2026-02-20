async function sendMessage(event){
event.preventDefault();
let n=document.getElementById("name").value,
e=document.getElementById("email").value,
m=document.getElementById("message").value;
const res=await fetch("/messages.json");
const data=await res.json();
data.push({name:n,email:e,message:m});
await fetch("/messages.json",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
document.getElementById("successMsg").innerText="Message envoyé ✅";
document.querySelector(".contact-form").reset();
}