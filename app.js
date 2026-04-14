async function sendMsg(){
 let input=document.getElementById("msg");
 let chat=document.getElementById("chat");

 let user=input.value;
 if(!user) return;

 chat.innerHTML += "<div>🧑 "+user+"</div>";
 input.value="";

 const res = await fetch("http://localhost:3000/api/chat",{
   method:"POST",
   headers:{"Content-Type":"application/json"},
   body:JSON.stringify({message:user})
 });

 const data = await res.json();
 chat.innerHTML += "<div>🤖 "+data.reply+"</div>";
}
