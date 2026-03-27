function generateQR(){
  const container = document.getElementById("qr");

  // temporärer Code
  const token = "PAY-" + Date.now();

  const qr = document.createElement("div");
  qr.innerText = "QR CODE: " + token;

  container.innerHTML = "";
  container.appendChild(qr);

  // nach 5 Sekunden löschen
  setTimeout(()=>{
    container.innerHTML = "❌ QR abgelaufen";
  }, 5000);
}
