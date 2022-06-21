//Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

//1
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

//interpretacion while

//Version 01
var i = 0;
while(i<5){
    console.log("El valor de i es: " + i);
    i++
}

//Version 02
var i = [0,1,2,3,4,5]
while(i[0]<5){
    p = i.shift();
    console.log("El valor de i es: " + p);

}

//Version 03
var i = [4,3,2,1,0]
while(i[0]<5){
    p = i.pop();
    console.log("El valor de i es: " + p);

}


//2
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}


//interpretacion while

// Version 01
var i = 10;
while(i>1){
    console.log("El valor de i es: " + i);
    i--
}

//Version 02
var i = [10,9,8,7,6,5,4,3,2,1];
while(i[0]>1){
    p = i.shift();
    console.log("El valor de i es: " + p);

}

//Version 03
var i = [10,9,8,7,6,5,4,3,2,1];
while(i.length > 1){
    p = i.shift();
    console.log("El valor de i es: " + p);

}

//Version 04
var i = [1,2,3,4,5,6,7,8,9,10];
while(i.length > 1){
    p = i.pop();
    console.log("El valor de i es: " + p);

}