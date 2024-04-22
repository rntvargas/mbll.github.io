const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1");
const imageTwo = document.querySelector(".image-2");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

// Función para obtener un número aleatorio entre un rango dado
function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
}

// Evento para cambiar la posición del botón 'No' al pasar el ratón por encima
function moveButton() {
  const containerHeight = container.getBoundingClientRect().height;
  const containerWidth = container.getBoundingClientRect().width;
  const btnHeight = btnNo.getBoundingClientRect().height;
  const btnWidth = btnNo.getBoundingClientRect().width;
  const btnTop = btnNo.getBoundingClientRect().top;
  const btnLeft = btnNo.getBoundingClientRect().left;

  let newTop = btnTop;
  let newLeft = btnLeft;
  while (Math.abs(newTop - btnTop) < containerHeight / 3) {
    newTop = getRandomNumber(0, containerHeight - btnHeight);
  }

  while (Math.abs(newLeft - btnLeft) < containerWidth / 3) {
    newLeft = getRandomNumber(0, containerWidth - btnWidth);
  }

  btnNo.style.top = Math.floor(newTop) + "px";
  btnNo.style.left = Math.floor(newLeft) + "px";
}

// Evento al pasar el ratón sobre el botón 'No'
btnNo.addEventListener("mouseover", moveButton);

// Evento al tocar el botón 'No' en dispositivos táctiles
btnNo.addEventListener("touchstart", (event) => {
  // Evita el comportamiento predeterminado del evento táctil
  event.preventDefault();
  
  // Llama a la función para mover el botón
  moveButton();
});

// Evento al hacer clic en el botón 'Yes'
btnYes.addEventListener("click", (e) => {
  // Ocultar el botón 'No', imagen uno y mostrar la imagen dos
  btnNo.classList.add("hide");
  imageOne.classList.add("hide");
  imageTwo.classList.remove("hide");

  // Cambiar el mensaje del botón 'Yes'
  btnYes.textContent = "sabia que escogerias el si, go mlbb!"; 
});

