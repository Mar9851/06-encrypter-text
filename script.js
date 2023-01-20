
const expresionPositiva = /^[a-z\s?]+$/;



let btnEncrypt = document.getElementById("btn-encrypt");
let btnDecrypt = document.getElementById("btn-decrypt");
let btnCopy = document.getElementById("btn-copy");
let textArea1 = document.getElementById('textarea1');
let rightArea = document.querySelector('.right-textarea');

btnEncrypt.addEventListener('click',encrypt);
btnDecrypt.addEventListener('click',decrypt);
btnCopy.addEventListener('click',copyText);



/**bloque de validacion de texto y estilos de validacion */

const validarTextarea = (e) => {
   if(expresionPositiva.test(e.target.value)){
    // desactivo el modo incorrecto de bordes e icono y activo modo valido
    document.getElementById('area1').classList.remove('validation-icono-bordes-incorrecto');
    document.getElementById('area1').classList.add('validation-icono-bordes-valido');
    // desactivo texto incorrecto y activo correcto
    document.getElementById('text-1').classList.add('text-correcto');
    document.getElementById('text-1').classList.remove('text-incorrecto');
    // cambio de icono incorrecto a correcto
    document.querySelector('#area1 i').classList.add('fa-circle-check');
    document.querySelector('#area1 i').classList.remove('fa-circle-xmark');
    // vuelven los botones a su estado inicial
    document.getElementById('buttons').style.visibility = 'initial';

   }else{
    // escondo los botones
    document.getElementById('buttons').style.visibility = 'hidden';
    // le coloco el incono de incorrecto
    document.querySelector('#area1 i').classList.add('fa-circle-xmark');
    // coloco estilos a los bordes y el icono cuando es incorrecto
    document.getElementById('area1').classList.add('validation-icono-bordes-incorrecto');
    // desactivo el texto correcto y activo el incorrecto
    document.getElementById('text-1').classList.remove('text-correcto');
    document.getElementById('text-1').classList.add('text-incorrecto');
   }
}

textArea1.addEventListener('keyup', validarTextarea);
textArea1.addEventListener('blur', validarTextarea);

btnEncrypt.addEventListener('button', (e) => {
  e.preventDefault();
})
btnDecrypt.addEventListener('button', (e) => {
  e.preventDefault();
})
/************************************************************************************************ */




/**bloque de funcion encriptar desencriptar y copiar */
function encrypt() {
  var text = textArea1.value.toLowerCase();

  
  
  var textEncrypt = text.replace(/e/gim, "enter");
  var textEncrypt = textEncrypt.replace(/o/gim, "ober");
  var textEncrypt = textEncrypt.replace(/i/gim, "imes");
  var textEncrypt = textEncrypt.replace(/a/gim, "ai");
  var textEncrypt = textEncrypt.replace(/u/gim, "ufat");
  textArea1.value = '';
  
  document.getElementById("textarea-2").style.opacity = 1;
  document.querySelector(".right-textarea").innerHTML = textEncrypt;
 
}



function decrypt() {
  var text = textArea1.value.toLowerCase();

  var textEncrypt = text.replace(/enter/gim, "e");
  var textEncrypt = textEncrypt.replace(/ober/gim, "o");
  var textEncrypt = textEncrypt.replace(/imes/gim, "i");
  var textEncrypt = textEncrypt.replace(/ai/gim, "a");
  var textEncrypt = textEncrypt.replace(/ufat/gim, "u");
  textArea1.value = '';
  
  document.getElementById("textarea-2").style.opacity = 1;
  
  document.querySelector(".right-textarea").innerHTML = textEncrypt;

}

function copyText() {

  let text = rightArea;
  text.select();
  document.execCommand("copy");
  document.getElementById("textarea-2").style.opacity = 0;
  
  
}

/********************************************************************************************** */



  

  
  


