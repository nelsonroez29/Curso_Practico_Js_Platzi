// Replica el comportamiento del siguiente código que usa la sentencia 
// switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}


// Interpretacion en if, else if, else

const tipoDeSuscripcion2 = "Basic";

if(tipoDeSuscripcion2 === "Free"){
    console.log("Solo puedes tomar los cursos gratis");

}else if(tipoDeSuscripcion2 === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");

}else if(tipoDeSuscripcion2 === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");

}else if(tipoDeSuscripcion2 === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");

}else{
    console.log("Eleccion incorrecta");

}


// Interpretacion solo con if

const tipoDeSuscripcion3 = "Basic";
if(tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");

}if(tipoDeSuscripcion3 === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");

}if(tipoDeSuscripcion3 === "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");

}if(tipoDeSuscripcion3 === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");

}


// con arrays y un solo condicional. 😏


var menssages = [
    "Solo puedes tomar los cursos gratis",
    "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Puedes tomar casi todos los cursos de Platzi durante un año",
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
];

const tipoDeSuscripcion4 = "Basic";

console.log(tipoDeSuscripcion4 === "Free" ? menssages[0] : tipoDeSuscripcion4 === "Basic" ? menssages[1] :tipoDeSuscripcion4 === "Expert" ? menssages[2] : tipoDeSuscripcion4 === "ExpertPlus" ? menssages[3] : "Elección Incorrecta");