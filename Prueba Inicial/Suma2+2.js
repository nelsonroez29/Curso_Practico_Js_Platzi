// Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.


//Usando el Ciclo while

//Version 01, con (if)
i=1;
while(i===1){
    var respuesta = prompt("¿Cuánto es 2 + 2?", "Escribe tú respuesta");

    if(respuesta === "4"){
        alert("¡Felicitaciones, tú Respuesta es Correcta!");
        i=0;

    }else{
        alert("Losentimos, ¿Volvemos a empezar?");

    }

}


//Version 02,  con (switch)
i=1;
while(i===1){
    var respuesta = prompt("¿Cuánto es 2 + 2?", "Escribe tú respuesta");

    switch(respuesta === "4"){

        case true:
            alert("¡Felicitaciones, tú Respuesta es Correcta!");
            i=0;
            break

        default:
            alert("Losentimos, ¿Volvemos a empezar?");

    }

}


//Version 03, con un (operador ternario)
i=1;
while(i===1){
    var respuesta = prompt("¿Cuánto es 2 + 2?", "Escribe tú respuesta");
    alert(respuesta === "4" ? i="¡Felicitaciones, tú Respuesta es Correcta!" : "Losentimos, ¿Volvemos a empezar?");

}

//Usando el Ciclo for

//Version 01, con (if)
i=1;
for(i=1; i===1; i = i === 1 ? 1 : 0 ){
    var respuesta = prompt("¿Cuánto es 2 + 2?", "Escribe tú respuesta");

    if(respuesta === "4"){
        alert("¡Felicitaciones, tú Respuesta es Correcta!");
        i=0;

    }else{
        alert("Losentimos, ¿Volvemos a empezar?");

    }

}

//Version 02,  con (switch)
i=1;
for(i=1; i===1; i = i === 1 ? 1 : 0 ){
    var respuesta = prompt("¿Cuánto es 2 + 2?", "Escribe tú respuesta");

    switch(respuesta === "4"){

        case true:
            alert("¡Felicitaciones, tú Respuesta es Correcta!");
            i=0;
            break

        default:
            alert("Losentimos, ¿Volvemos a empezar?");

    }

}

//Version 03,  con un (operador ternario)
for(i = 1; i===1; i= i === 1 ? 1 : 0){
    var respuesta = prompt("¿Cuánto es 2 + 2?", "Escribe tú respuesta");
    alert(respuesta === "4" ? i = "¡Felicitaciones, tú Respuesta es Correcta!" : "Losentimos, ¿Volvemos a empezar?");

}
