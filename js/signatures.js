



/* functions to get data to de db of signature and render it in the DOM */

async function load(){

    const $listSignatures = document.getElementById('listSignatures');
    
    async function getDataSignatures(url) {
        const response = await fetch(url);
        const data = response.json();
    
        return data;
    }

    function renderSignaturesList(list, $container){
        list.forEach(Signature => {
           
            const HTMLString = SignatureTemplate(Signature);
            const SignatureElement = createTemplate(HTMLString);
    
            $container.append(SignatureElement);
            addEvenClick(SignatureElement)
    
        });
    }


function addEvenClick($element){
    $element.addEventListener("click", event =>{
        copyElementToClipboard($element);
    });
}

function SignatureTemplate(Signature){
    return `
    <div class="card" style="width: 18rem;">
            <img src="${Signature.url_photo}" class="card-img-top" alt="photo of ${Signature.name}">
            <div class="card-body">
              <h5 class="card-title">${Signature.name}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
    `
}

function createTemplate(HTMLString){
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;

    return html.body.children[0]

}

const URL_API =  "./utils/BDsignatures.json";
const {signatures} = await getDataSignatures(URL_API);
console.log(signatures)

renderSignaturesList(signatures, $listSignatures)

}

load();











