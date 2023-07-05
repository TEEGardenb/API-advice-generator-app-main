let Button = document.getElementById("button");
let CounterVariable = document.getElementById("counter-varible");
let ContainerText = document.getElementById("text");

//Evento al recargar la pagina_
window.onload = function () {
  fetch("https://api.adviceslip.com/advice", {})
    .then((response) => response.json())
    .then((data) => {
      const ID = data.slip.id;
      const Text_1 = data.slip.advice;

      CounterVariable.innerHTML = ID;
      ContainerText.innerHTML = '"' + Text_1 + '"';
    });
};

//Evento al hacer click en el boton
Button.onclick = function () {
  fetch("https://api.adviceslip.com/advice", {})
    .then((response) => response.json())
    .then((data) => {
      const ID = data.slip.id;
      const Text_1 = data.slip.advice;

      CounterVariable.innerHTML = ID;
      ContainerText.innerHTML = '"' + Text_1 + '"';
    });
};
