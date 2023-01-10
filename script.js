let btnEncrypt = document.querySelector(".btn-encrypt");
let btnDecrypt = document.querySelector(".btn-decrypt");
let btnCopy = document.querySelector(".btn-copy");
let leftArea = document.getElementById('left-area');
let rightArea = document.getElementById('right-area');

btnEncrypt.addEventListener('click',encrypt);
btnDecrypt.addEventListener('click',decrypt)
btnCopy.addEventListener('click',copyText)



function encrypt() {
  var text = leftArea.value.toLowerCase();

  
  
  var textEncrypt = text.replace(/e/gim, "enter");
  var textEncrypt = textEncrypt.replace(/o/gim, "ober");
  var textEncrypt = textEncrypt.replace(/i/gim, "imes");
  var textEncrypt = textEncrypt.replace(/a/gim, "ai");
  var textEncrypt = textEncrypt.replace(/u/gim, "ufat");
  leftArea.value = '';
  
  document.querySelector(".image-container").style.display = "none";
  document.querySelector(".right-textarea").innerHTML = textEncrypt;
 
}



function decrypt() {
  var text = leftArea.value.toLowerCase();

  var textEncrypt = text.replace(/enter/gim, "e");
  var textEncrypt = textEncrypt.replace(/ober/gim, "o");
  var textEncrypt = textEncrypt.replace(/imes/gim, "i");
  var textEncrypt = textEncrypt.replace(/ai/gim, "a");
  var textEncrypt = textEncrypt.replace(/ufat/gim, "u");
  leftArea.value = '';

  document.querySelector(".image-container").style.display = "none";
  document.querySelector(".right-textarea").innerHTML = textEncrypt;

}

function copyText() {
  let text = rightArea;
  text.select();
  document.execCommand("copy");
  document.querySelector('.image-container').style.display = "initial";

}
  

  
  


