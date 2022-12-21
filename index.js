//* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//* evento click que ejecute un console log con la información del evento del click

const button = document.querySelector(".click");
button.setAttribute("type", "button");
button.setAttribute("id", "btnToClick");
button.setAttribute("value", "CLICK!!");

const info = function(event){
    console.log(event);
}

const button1 = document.getElementById("btnToClick");
button1.addEventListener("click", info);



//* 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const focus = document.querySelector(".focus");

const btnFocus = function btnToFocus(event){
    console.log(event.target.value);
}

focus.addEventListener("focus", btnFocus);



//* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const value = document.querySelector(".value");

const btnValue = function btnToValue(event){
    console.log(event.target.value);
}

value.addEventListener("input", btnValue);