const button = document.getElementById("btn");
button.addEventListener("click", () => {
  //Twit del usuario
  let twit = document.getElementById("input").value;
  document.getElementById("input").value = " ";
  if (twit.length == 0 || twit == null) {
    alert("No vas a twitear nada? :(")
    return false;
  }

  // Contenedor de twits: sugar daddy
  const twitbox = document.getElementById("comment");
  //Div contenedor: mantenido
  const newTwits = document.createElement("div");
  //Nodo de texto: texto per se
  let userTwit = document.createTextNode(twit);

  //Cajitas de texto que aparecen
  const elementContainer = document.createElement("p");

  elementContainer.appendChild(userTwit);
  newTwits.appendChild(elementContainer);
  twitbox.appendChild(newTwits);
  
})