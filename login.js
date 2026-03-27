// stärker verschleiert
const _secure = ["Rzd2JDJwUSB4UjkjYkw4d1RmJjNrWnMx"];

function decode(x){
  return atob(x);
}

function login(){
  const input = document.getElementById("pw").value;

  if(input === decode(_secure[0])){
    document.getElementById("loginBox").style.display="none";
    document.getElementById("app").style.display="block";
  } else {
    alert("❌ Zugriff verweigert");
  }
}
