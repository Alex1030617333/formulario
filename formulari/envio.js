
   function mensaje() {
       
 let enve =  document.getElementById("mensaje").innerHTML = 'SU ENVIO A SIDO EFECTIVO, GRACIAS' ;
 document.querySelector("#mensaje").style.backgroundColor = "blue";
 
}
 function datos(e){
     let nombre = document.getElementById("nombre").value;
     let apellido = document.getElementById("apellido").value;
     let telefono = document.getElementById("telefono").value;
     let correo = document.getElementById("correo").value;
     let pais = document.getElementById("pais").value;
     
     
     alert( " su nombre es:" +" "+nombre+" "+apellido);
     alert("su telefono es "+ telefono+ " "+"y su correo "+" "+  correo );
     swal( " su pais de origen es: "+" "+pais);
     swal( "GRACIAS...", ' success');
     
 }
     
window.onload = function aumatico(){
  
  swal(', ' , ' success');

  swal ( "¡ BIENVENIDOS  AL FORMULARIO DE HAFRACABLACK! " , "¡PARA CONTINUAR CON SU REGITRO PESIONE OK " ,  {   
    botón : "¡ aceptar! " , 
 
    
  } ) ;


}





