let TOKEN = null;

async function login(){
  const pw = document.getElementById("pw").value;

  const res = await fetch("http://localhost:3000/login",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({password: pw})
  });

  const data = await res.json();
  TOKEN = data.token;

  document.getElementById("app").style.display="block";
}

function pay(value){
  const data = btoa(JSON.stringify({value}));
  const url = "https://api.qrserver.com/v1/create-qr-code/?data="+data;

  document.getElementById("qr").innerHTML =
    `<img src="${url}">`;
}
