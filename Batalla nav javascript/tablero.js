//var preguntar_tablero = prompt("¿Quieres que el tablero sea inicializado?");
//var tablero = new Array(10);
//var tablero1= new Array(10);
var p1 = [];
var p2 = [];
var tablero = [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0];
var tablero1 = [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0];
game();
function game(){
    alert("Bienvenido a Battle worship Comencemos");
    names();
    alert("Hola de nuevo te doy las intrucciones: solo tienes disponibles 3 barcos" + "\n" + "Y la regla mayor es que gane el mejor!" );
    table();
    play();
}
function names() {
    let j1 = prompt("Capitan diganos su nombre");
    let j2 = prompt("Capitan 2 diganos su nombre");
    p1.push(j1);
    p2.push(j2);
    alert("Enter para continuar " + "capitan "+ p1 + " y " +"capitan "+ p2 );
}
function table(){
    for(let m = 0; m < 2; m++){
        if(m == 0){
            alert("Capitan " + p1 + " vea el oceano y eliga su posicion" + "\n" + tablero);
            for (let i = 0; i < 3; i++) {
                let ship = parseInt(prompt(tablero + "\n" + "¿En que posicion desea su barco  "+ (i + 1) + "?"));
                tablero[(ship - 1)] = " 1 ";
            }
            alert("Capitan " + p1 +" estas son sus elecciones suerte en altamar  " + "\n" + tablero);
        }else{
            alert("Capitan " + p2 + " vea el oceano y eliga su posicion" + "\n" + tablero1);
                for (let i = 0; i < 3; i++) {
                    let ship = parseInt(prompt(tablero1 + "\n" + "¿En que posicion desea su barco "+ (i + 1) + "?"));
                    tablero1[(ship - 1)] = " 1 ";
            }
            alert("Capitan "+ p2 +" estas son sus elecciones suerte en altamar " + "\n" + tablero1);
        }
    }
    alert("Listo Capitan " + p1 +" y Capitan " + p2 + "\n" +"Que comience la masacre");
}

function play(){
    let cuestions = "si"
    let term = true;
    let verif = true;
    let buque = 3;
    let buque2 = 3;

    do{
    while(term == true){
        if(verif == true){
            if(verif == true){
                alert("Es su turno Capitan " + p1);
            }
            let x = parseInt(prompt("Ingrese la posicion para aniquilar al enemigo Capitan " + p1));
            if(tablero1[(x - 1)] == " 1 "){
                tablero1[(x - 1)] = " 0 ";
                buque2 -= 1;
                alert("Bien capitan vamos por mas");
                alert("Capitan " + p2 +" nos han hundido un barco");
                alert("Capitan " + p2 +" es turno de atacar");
                alert("Capitan "+ p2 +" nos hundieron el barco vengemonos " + "  quedan "+ buque2 + " barcos " + "\n" + tablero1);
            }else{
                alert("Ouch a la proxima Capitan" + "\n" + "Espere ya llegara el momento de atacar");
                alert("Capitan " + p2 +" no hundieron ningun buque");
                alert("Es su turno Capitan " + p2);
            }
            verif = false;    
            if(verif == false){
                let x = parseInt(prompt("Ingrese la posicion para aniquilar al enemigo Capitan " + p2));
                if (tablero[(x - 1)] == " 1 ") {
                    tablero[(x - 1)] = " 0 ";
                    buque -= 1; 
                    alert("Bien capitan vamos por mas");
                    alert("capitan " + p1 +" nos han hundido un barco");
                    alert("capitan " + p1 +" nos hundieron el barco vengemonos " + "quedan "+ buque +" barcos" + "\n" + tablero);
                } else {
                    alert("Ouch a la proxima capitan" + "\n" + "Espere ya llegara el momento de atacar");
                    alert("Capitan  " + p1  +" no hundieron ningun buque");
                }
            }
            verif = true;
        }
        if (buque == 0) {
            term = false;
            alert("Capitan  " + p2 +" usted es el ganador del oceano"+ "\n" + " Capitan" + p1+" Ha perdido la proxima sera mejor");
        }
        if(buque2 == 0){
            term = false;
            alert("Capitan " + p1 +" usted es el ganador del oceano"+ "\n" + " Capitan " + p2 +" Ha perdido la proxima sera mejor");
        }
    }
    cuestions = prompt("¿Quiere volver a jugar Capitan?");
}while(cuestions == "Si" || cuestions == "si" || cuestions == "sI" || cuestions == "SI");
}



    
