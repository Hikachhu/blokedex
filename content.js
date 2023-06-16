var newdiv = document.createElement("div");
newdiv.id = "hellothere";
newdiv.style.background = "blue";
newdiv.style.color = "white";
newdiv.style.zIndex = 1000;
newdiv.style.position = "absolute";
newdiv.style.top = 0;
newdiv.style.left = 0;
newdiv.style.width = "200px";
newdiv.style.height = "100px";
newdiv.style.display = "flex";
newdiv.style.justifyContent = "center";
newdiv.style.alignItems = "center";
newdiv.innerText = "I am here";
document.body.appendChild(newdiv)