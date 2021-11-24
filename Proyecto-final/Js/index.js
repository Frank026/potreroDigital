var campo=document.getElementById("campo");
var magiaYtrampa=document.getElementById("myt");
var magiadeCampo=document.getElementById("mC");
var deck=document.getElementById("deck");
var extraDeck=document.getElementById("extraD");
var cementerioyDest=document.getElementById("cementerioyD");
var escalaPenduIzq=document.getElementById("ePI");
var escalaPenduDerec=document.getElementById("ePD");


function mostrarCampo(){
    var imagen = document.getElementById("tapete");
    if(imagen.src.match("on")){
        imagen.src= "../img/arcv_duelfield-600x350.png";
    }else{
        imagen.src="../img/campo-de-juego.png";
    }
}

campo.onmouseover=function(){
    campo.style.backgroundColor="rgb(103, 50, 18)"
    
}
campo.onmouseout=function(){
    campo.style.backgroundColor="transparent"
    
}
magiaYtrampa.onmouseover=function(){
    magiaYtrampa.style.backgroundColor="rgb(30, 207, 216)"
    
}
magiaYtrampa.onmouseout=function(){
    magiaYtrampa.style.backgroundColor="transparent"
    
}
magiadeCampo.onmouseover=function(){
    magiadeCampo.style.backgroundColor="rgb(43, 194, 26)"
    
}
magiadeCampo.onmouseout=function(){
    magiadeCampo.style.backgroundColor="transparent"
    
}
deck.onmouseover=function(){
    deck.style.backgroundColor="rgb(220, 51, 39)"
    
}
deck.onmouseout=function(){
    deck.style.backgroundColor="transparent"
    
}
extraDeck.onmouseover=function(){
    extraDeck.style.backgroundColor="rgb(159, 24, 190)"
    
}
extraDeck.onmouseout=function(){
    extraDeck.style.backgroundColor="transparent"
    
}
cementerioyDest.onmouseover=function(){
    cementerioyDest.style.backgroundColor="rgb(39, 39, 39)"
    
}
cementerioyDest.onmouseout=function(){
    cementerioyDest.style.backgroundColor="transparent"
    
}
escalaPenduIzq.onmouseover=function(){
    escalaPenduIzq.style.backgroundColor="rgb(87, 189, 249)"
    
}
escalaPenduIzq.onmouseout=function(){
    escalaPenduIzq.style.backgroundColor="transparent"
    
}
escalaPenduDerec.onmouseover=function(){
    escalaPenduDerec.style.backgroundColor="rgb(238,96,99)"
}
escalaPenduDerec.onmouseout=function(){
    escalaPenduDerec.style.backgroundColor="transparent"
}





