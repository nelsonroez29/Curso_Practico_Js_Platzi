//2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

var frutas = [
    "Mango",
    "Manzana",
    "Pera",
    "Uva",
    "Fresa",
    "Guayaba",
    "Guanabana",
    "Banana",
    "Durazno",
    "Naranja"
]

function printarray(elementos){
    console.log(elementos[0]);

}

printarray(frutas);


//3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

var frutas = [
    "Mango",
    "Manzana",
    "Pera",
    "Uva",
    "Fresa",
    "Guayaba",
    "Guanabana",
    "Banana",
    "Durazno",
    "Naranja"
]

function printarray(elementos){

    for(elemento of elementos){
        console.log(elemento);

    }

}

printarray(frutas);


//4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

var Auto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: "2022",
    color: "Blanco",
    uso: "Particular",
    placa: "AXL SDD",
    serialCarroceria: "ASDFKJNSDOI444 OIASD444",
    serialMotor: "FFACCC333"
}


function printObject(object){
    keys = Object.keys(object);
    values = Object.values(object);
    
    for(i=0; keys.length > i; i++){
        console.log(`${keys[i]}: "${values[i]}"`);
    }
}

printObject(Auto);