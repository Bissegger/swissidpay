function analyzeNote(){
  const file = document.getElementById("file").files[0];
  if(!file){
    alert("Keine Datei!");
    return;
  }

  const reader = new FileReader();

  reader.onload = function(e){
    const img = new Image();
    img.src = e.target.result;

    img.onload = function(){
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img,0,0);

      const data = ctx.getImageData(0,0,canvas.width,canvas.height).data;

      let brightness = 0;

      for(let i=0;i<data.length;i+=4){
        brightness += data[i] + data[i+1] + data[i+2];
      }

      brightness = brightness / (data.length/4);

      let result;

      if(brightness > 400){
        result = "Sehr hell → evtl. Fälschung";
      } else if(brightness > 250){
        result = "Normal → wahrscheinlich echt";
      } else {
        result = "Dunkel → prüfen";
      }

      document.getElementById("result").innerHTML =
        "<b>AI Analyse:</b><br>" + result;
    }
  }

  reader.readAsDataURL(file);
}
