window.onload = function(){
//window.addEventListener('load',function(){

    console.log("estoy en una hoja externa");

    let div = document.querySelector('div');

    let contador = 0;
    function tocar(){
        contador++;
        console.log("tocar el div "+contador+" veces.");
    }

    let notificaciones = [];

    function notificar(){
        let notificacion = document.querySelector(".nota");
        let texto = notificacion.value;
        notificaciones.push(texto);
        
        //tomo la caja actual
        let cajaNotificaciones = document.querySelector('div.notificaciones');
        //limpiar la caja de notificaciones
        cajaNotificaciones.innerHTML = "";
        notificaciones.forEach( noti => {
            //ingreso cada una
            cajaNotificaciones.innerHTML += "<div class='notificacion'><div onclick='cerrar(this)'>X</div>"+noti+"</div>";
        });
    }

    function cerrar(equis){
        console.log(equis.parentElement);
        let notificacion = equis.parentElement;
        notificacion.style.display = "none";
    }

    var cantclicks = 0;
    var letra = "O"

    let cajas = document.querySelectorAll('.caja');

    

    function elegir(){
        caja = this;
        cantclicks++;
        console.log(caja.innerText);
        if(caja.innerText == ""){
            //hacer la marca
            if(cantclicks%2==0){
                caja.innerText = "X";
            }else{
                caja.innerText = "O";
            }
            /*if(letra == "X"){
                caja.innerText = "O";
                letra = "O";
            }else{
                caja.innerText = "X";
                letra = "X";
            }*/
        }
        let caja1 = document.querySelector('.caja1').innerHTML;
        let caja2 = document.querySelector('.caja2').innerHTML;
        let caja3 = document.querySelector('.caja3').innerHTML;
        let caja4 = document.querySelector('.caja4').innerHTML;
        let caja5 = document.querySelector('.caja5').innerHTML;
        let caja6 = document.querySelector('.caja6').innerHTML;
        let caja7 = document.querySelector('.caja7').innerHTML;
        let caja8 = document.querySelector('.caja8').innerHTML;
        let caja9 = document.querySelector('.caja9').innerHTML;

        if(caja1 == caja2 && caja2 == caja3 && caja1 != ""){
            alert("ganaste!");
        }else if(caja4 == caja5 && caja5 == caja6 && caja4 != ""){
            alert("ganaste")
        }else if(caja7 == caja8 && caja8 == caja9 && caja7 != ""){
            alert("ganaste")
        }else if(caja1 == caja4 && caja4 == caja7 && caja1 != ""){
            alert("ganaste!")
        }else if(caja2 == caja5 && caja5 == caja8 && caja2 != ""){
            alert("ganaste!")
        }else if(caja3 == caja6 && caja6 == caja9 && caja3 != ""){
            alert("ganaste!")
        }else if(caja1 == caja5 && caja5 == caja9 && caja1 != ""){
            alert("ganaste")
        }else if(caja3 == caja5 && caja5 == caja7 && caja3 != ""){
            alert("ganaste")
        }
    }

    cajas.forEach(caja =>{
        caja.addEventListener("click", elegir);
    });
    
    let intervalo = setInterval(function(){ console.log("ya pasaron 3 segundos") },3000)
    clearInterval(intervalo)
}