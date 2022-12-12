/*Function to copy signatures and show message */
document.getElementById("copy-signature").addEventListener("click", function(event) {
    event.preventDefault();
    copyElementToClipboard;
});
function copyElementToClipboard(element) {
   
    window.getSelection().removeAllRanges();
    let range = document.createRange();
    range.selectNode(typeof element === 'string' ? document.getElementById(element) : element);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    
    swal("Good job!", "You have copied this template!", "success");
}
/*Funtion to catch the key up of the inputs and switch data */    

    document.getElementById('imageLink').addEventListener("keyup",function(event){
        let element = document.getElementById("imageLink").value;
        document.getElementById("photouser").src = element;
        
    })

document.addEventListener('keyup', function(event){
    let elementId = event.target.getAttribute('data-id-element');
    let elementFormId = event.target.getAttribute('id');

    let valueInputs = document.getElementById(elementFormId).value;
    document.getElementById(elementId).innerHTML = valueInputs;
    
});
/*function to save signture as html */

let btnSave = document.getElementById('save-signature'); 

btnSave.addEventListener("click", function (event) {
    let signId = document.getElementById("sign");
    let htmlsignature = [ signId.outerHTML];
    var bl = new Blob(htmlsignature, {type: "text/html"});
    btnSave.href = URL.createObjectURL(bl);
 
});