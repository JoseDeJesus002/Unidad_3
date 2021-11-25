//var preguntar_tablero = prompt("¿Quieres que el tablero sea inicializado?");
//var tablero = new Array(10);
//var tablero1= new Array(10);


var p1 = [];
var p2 = [];
var tablero = [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0];
var tablero1 = [0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0 , 0];
juego();

function juego(){
    alert("Bienvenido a Battle worship Comencemos");
    nombres();
    alert("Hola de nuevo te doy las intrucciones: solo tienes disponibles 3 barcos" + "\n" + "Y la regla mayor es que gane el mejor!" );
    tableros();
    jugar();
}
function nombres() {
    let j1 = prompt("Capitan diganos su nombre");
    let j2 = prompt("Capitan diganos su nombre");
    p1.push(j1);
    p2.push(j2);
    alert("Aceptar para seguir " + p1 + " y " + p2 );
}
function tableros(){
    for(let e = 0; e < 2; e++){
        if(e == 0){
            alert("Capitan " + p1 + " Vea el oceano y eliga su posicion" + "\n" + tablero);
            for (let i = 0; i < 3; i++) {
                let barco = parseInt(prompt(tablero + "\n" + "¿En que posicion desea su barco Capitan "+ p1 + (i + 1) + "?"));
                tablero[(barco - 1)] = " 1 ";
            }
            alert("Capitan " + p1 +" estas son sus elecciones suerte en altamar  " + "\n" + tablero);
        }else{
            alert("Capitan " + p2 + " Vea el oceano y eliga su posicion" + "\n" + tablero1);
                for (let i = 0; i < 3; i++) {
                    let barco = parseInt(prompt(tablero1 + "\n" + "¿En que posicion desea su barco Capitan "+ p2 + (i + 1) + "?"));
                    tablero1[(barco - 1)] = " 1 ";
            }
            alert("Capitan "+ p2 +" estas son sus elecciones suerte en altamar " + "\n" + tablero1);
        }
    }
    alert("Listo Capitan " + p1 +" y Capitan " + p2 + "\n" +"Que comience la masacre");
}

function jugar(){
    let cuestions = "si"
    let dFinal = true;
    let verif = true;
    let buque = 3;
    let buque2 = 3;

    do{
    while(dFinal == true){
        if(verif == true){
            if(verif == true){
                alert("Es su turno Capitan " + p1);
            }
            let p = parseInt(prompt("Ingrese la posicion para aniquilar al enemigo Capitan " + p1));
            if(tablero1[(p - 1)] == " 1 "){
                tablero1[(p - 1)] = 0
                buque2 -= 1;
                alert("BIEN Capitan "+p1+" Vamos por mas")
                console.log("Capitan " + p2+" nos han hundido un barco");
                alert("Capitan " + p2+" es turno de atacar");
                alert("Capitan "+ p2 +" Nos hundieron el barco vengemonos " + " quedan"+ buque2 + " barcos " + "\n" + tablero1);
            }else{
                alert("Ouch A la proxima Capitan" + "\n" + "Espere ya llegara el momento de atacar");
                alert("Capitan  " + p2+" no hundieron ningun buque");
                alert("Es su turno Capitan " + p2);
            }
            verif = false;    
            if(verif == false){
                let p = parseInt(prompt("Ingrese la posicion para aniquilar al enemigo Capitan " + p2));
                if (tablero1[(p - 1)] == " 1 ") {
                    tablero1[(p - 1)] = 0;
                    buque -= 1; 
                    alert("BIEN Capitan "+p2+" Vamos por mas");
                    alert("Capitan " + p1+" nos han hundido un barco");
                    alert("Capitan " + p1 +"Nos hundieron el barco vengemonos" + "quedan "+ buque +" barcos" + "\n" + tablero);
                } else {
                    alert("Ouch A la proxima Capitan" + "\n" + "Espere ya llegara el momento de atacar");
                    alert("Capitan  " + p1+" no hundieron ningun buque");
                }
            }
            verif = true;
        }
        if (buque == 0) {
            dFinal = false;
            alert("Capitan  " + p2 +" usted es el ganador del oceano"+ "\n" + "Capitan" + p1+" Ha perdido la proxima sera mejor");
        }
        if(buque2 == 0){
            dFinal = false;
            alert("Capitan " + p1 +" usted es el ganador del oceano"+ "\n" + "Capitan " + p2+" Ha perdido la proxima sera mejor");
        }
    }
    cuestions = prompt("¿Quiere volver a jugar Capitan?");
}while(desicion == "Si" || desicion == "si" || desicion == "sI" || desicion == "SI");
}



    
