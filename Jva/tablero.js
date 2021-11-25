//var preguntar_tablero = prompt("¿Quieres que el tablero sea inicializado?");
var tablero = new Array(10);
var tablero1= new Array(10);
var n ="";
var x = "";

var p1 = [];
var p2 = [];
//var tablero = ["|0|", "|0|", "|0|", "|0|", "|0|", "|0|", "|0|", "|0|", "|0|", "|0|"];
//var tablero1 = ["|0|", "|0|", "|0|", "|0|", "|0|", "|0|", "|0|", "|0|", "|0|", "|0|"];
juego();

function juego(){
    alert("Welcome to battle worship please press continue or accept for continue the game");
    nombres();
    alert("¡Muy bien! Es hora de posicionar tus barcos jugador " + p1 + "" + "\n" + "RECORDATORIO :" + "\n" + "-Solo tienes 3 barcos para posicionar" + "\n" + "-Tu tablero es de 1 dimension y solo tiene 10 espacios" + "\n" + "-Recuerda No mostrar tu tablero");
    tableros();
    jugar();
}
function nombres() {
    let j1 = prompt("Ingresa el nombre del jugador 1");
    let j2 = prompt("Ingresa el nombre del jugador 2");
    p1.push(j1);
    p2.push(j2);
    alert("Gracias por jugar " + p1 + " y " + p2 )
}
function tableros(){
    for(let h = 1; h >= 10; h++){
        tablero.push("| |");
        tablero1.push("| |");
    }
    for(let e = 0; e < 2; e++){
        if(e == 0){
            alert("Jugador " + p1 + " El siguiente es tu tablero:" + "\n" + tablero);
            for (let i = 0; i < 3; i++) {
                let barco = parseInt(prompt(tablero + "\n" + "¿En que posicion deseas insertar el barco No." + (i + 1) + "?"));
                tablero[(barco - 1)] = "|☻|";
            }
            alert("Tus barcos han quedado posicionados asi:" + "\n" + tablero);
        }else{
            alert("Jugador " + p2 + " El siguiente es tu tablero:" + "\n" + tablero1);
                for (let i = 0; i < 3; i++) {
                    let barco = parseInt(prompt(tablero1 + "\n" + "¿En que posicion deseas insertar el barco No." + (i + 1) + "?"));
                    tablero1[(barco - 1)] = "|☻|";
            }
            alert("Tus barcos han quedado posicionados asi:" + "\n" + tablero1);
        }
    }
    alert("¿Listos para jugar?" + "\n" + "Presiona el boton Aceptar para continuar");
}

function jugar(){
    let desicion = "si"
    let dFinal = true;
    let aux = true;
    let hundido1 = 3;
    let hundido2 = 3;

    do{
    while(dFinal == true){
        if(aux == true){
            if(aux == true){
                alert("Es turno del jugador " + p1);
            }
            var p = parseInt(prompt("Ingresa la posicion en el tablero de tu contrincante donde crees que hay un barco"));
            if(tablero1[(p - 1)] == "|☻|"){
                tablero1[(p - 1)] = "| |"
                hundido2 -= 1;
                alert("¡Muy bien! Has hundido un barco de tu contrincante")
                console.log("Te han hundido un barco " + p2);
                alert("Es turno del jugador: " + p2);
                alert("Te han hundido un barco, tu tablero a quedado solo con " + hundido2 + " barcos:" + "\n" + tablero1);
            }else{
                alert("¡Que mala suerte! No has atinado" + "\n" + "¡Espera al siguiente turno!");
                console.log("No te han hundido ningun barco " + p2);
                alert("Es turno del jugador: " + p2);
            }
            aux = false;    
            if(aux == false){
                var p = parseInt(prompt("Ingresa la posicion en el tablero de tu contrincante donde crees que hay un barco"));
                if (tablero1[(p - 1)] == "|☻|") {
                    tablero1[(p - 1)] = "| |"
                    hundido1 -= 1; 
                    alert("¡Muy bien! Has hundido un barco de tu contrincante");
                    console.log("Te han hundido un barco " + p1);
                    alert("Te han hundido un barco, tu tablero a quedado solo con " + hundido1 + " barcos:" + "\n" + tablero);
                } else {
                    alert("¡Que mala suerte! No has atinado" + "\n" + "¡Espera al siguiente turno!");
                    console.log("No te han hundido ningun barco " + p1);
                }
            }
            aux = true;
        }
        if (hundido1 == 0) {
            dFinal = false;
            alert("El ganador es: " + p2 + "\n" + "Perdio" + p1);
            console.log("El ganador es: " + p2)
            console.log("El perdedor es: " + p1)
        }
        if(hundido2 == 0){
            dFinal = false;
            alert("El ganador es: " + p1 + "\n" + "Perdio" + p2);
            console.log("El ganador es: " + p1)
            console.log("El perdedor es: " + p2)
        }
    }
    desicion = prompt("¿Deseas volver a jugar?");
}while(desicion == "Si" || desicion == "si" || desicion == "sI" || desicion == "SI");
}



    
