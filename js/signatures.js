



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
        window.getSelection().removeAllRanges();
        let range = document.createRange();
        range.selectNode(typeof element === 'string' ? document.getElementById($element) : $element);
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        
        swal("Good job!", "You have copied this template!", "success");
    });
}

function SignatureTemplate(Signature){
    return `
    <table cellpadding="0" cellspacing="0" width="750" id="sign" style="border: none; width: 750px; max-width:750px; height: 278px;" title="Click to copy signature">
            <tbody style="border: none; ">
                <tr style="border: none; ">
                    <td  style="border: none; width: 85px;vertical-align: top;"> 
                        <img width="150" id="photouser"  style="
                        width:  150px;
                        height: 200px;
                        max-width: 150px;
                        max-height:200px;
                        vertical-align: top;
                        padding-right:17px;
                        object-fit: cover;
                        object-position: center;
                    " src="${Signature.PictureCode}" alt="Profile image - ${Signature.Name}"></td>
                    <td style="border: none; "><section>
                        <h1 id="nombre" style="font-size:25px; font-weight: 700; font-family: Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;text-transform: uppercase;color: black; margin-bottom: 0;">${Signature.Name}</h1>
                        <span id="rol" style="font-size:14px; font-weight: 400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;text-transform: uppercase;color: black; margin-bottom:5px;">${Signature.Title}</span>
                        <table cellpadding="0" cellspacing="0" style="margin-top: 20px;border: none;">
                            <tr style="border: none; ">
                                
                                ${
                                    (() => {
                                        if(Signature.Cellphone !="") {
                                            return `<td style="border: none; "><p id="sign_mobile" style="font-size: 14px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;"> <strong style="font-size:14px;font-weight: 600; color:black;">MOBILE</strong></p>`;
                                            
                                        } else {
                                            return `<td style="border: none; "><p id="sign_mobile" style="font-size: 14px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;"> <strong style="font-size:14px;font-weight: 600; color:black;"></strong></p>`;
                                            
                                        }

                                    })()

                                }
                                ${
                                    (() => {
                                        if(Signature.OfficePhone !="") {
                                            return `<p style="font-size: 14px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;"> <strong style="font-size:14px;font-weight: 600; color:black;margin:0px;">OFFICE</strong></p>`;
                                            
                                        } else {
                                            return `<p style="font-size: 14px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;"> <strong style="font-size:14px;font-weight: 600; color:black;margin:0px;"></strong></p>`;
                                            
                                        }

                                    })()

                                }
                                    
                                    <p style="font-size: 14px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;"> <strong style="font-size:14px;font-weight: 600; color:black;margin:0px;">EMAIL</strong></p>
                                    <p style="font-size: 14px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;"> <strong style="font-size:14px;font-weight: 600; color:black;margin:0px;">WEBSITE</strong></p>
                                    <p style="font-size: 14px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;"> <strong style="font-size:14px;font-weight: 600; color:black;margin:0px;">ADDRESS</strong></p>
                                </td>
                                <td colspan="2" style="border: none; ">
                                 
                                ${
                                    (() => {
                                        if(Signature.Cellphone !="") {
                                            return `<p id="mobile" style="font-size: 14px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;">${Signature.Cellphone}</p>`;
                                            
                                        } else {
                                            return `<p id="mobile" style="font-size: 14px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;"></p>`;
                                            
                                        }

                                    })()

                                }
                                ${
                                    (() => {
                                        if(Signature.OfficePhone !="") {
                                            return `<p id="office" style="font-size: 14px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;">${Signature.OfficePhone}</p>`;
                                            
                                        } else {
                                            return `<p id="office" style="font-size: 14px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;"></p>`;
                                            
                                        }

                                    })()

                                }
                                
                                    <p id="email" style="font-size: 14px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;">${Signature.Email}</p>
                                    <p id="website" style="font-size: 14px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;">${Signature.Website}</p>
                                    <p id="address" style="font-size: 13px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;">${Signature.Address}</p></td>
                                </tr>
                        </table>
                    </section>
                </td>
                <td style="border: none; "></td>
                <td style="border: none; "></td>
            </tr> 
            <tr style="border: none; ">
                <td colspan="2" style="border: none; ">
                        <div>
                            <a href="${Signature.Searchhomes}" style="cursor:pointer ;"><img width="485" style="width:485px;max-width: 485px; height: auto;" src="https://raw.githubusercontent.com/voov-io/signature-email-template/main/imgs/banner.png" alt="Banner to visit our website"></a>

                        </div>
                </td>
                <td style="border: none; ">
                    <div>
                        <a href="${Signature.Facebook}" target="_blank"><img width="28" style="height:28px;width:28px; max-width: 28px; margin:4px 3px; cursor: pointer;" src="https://raw.githubusercontent.com/voov-io/signature-email-template/main/imgs/facebook.png" alt="Icon FaceBook"></a>
                    </div>
                    <div>
                        <a href="${Signature.Linkedin}" target="_blank"><img width="28" style="height:28px;width:28px; max-width: 28px; margin:4px 3px; cursor: pointer;" src="https://raw.githubusercontent.com/voov-io/signature-email-template/main/imgs/linkedin.png" alt="Icon LinkedIn"></a>
                    </div>
                    <div>
                        <a href="${Signature.Instagram}" target="_blank"><img width="28" style="height:28px;width:28px; max-width: 28px; margin:4px 3px; cursor: pointer;" src="https://raw.githubusercontent.com/voov-io/signature-email-template/main/imgs/instagram.png" alt="Icon Instagram"></a>
                    </div>
                </td>
                <td style="width: 200px;
                height: 28px;
                border: none;">
                        <div style="
                            padding: 5px 4px;
                            width: 175px;
                            max-width: 175px;
                            min-width: 175px;
                            height: 28px;
                            min-height: 28px;
                            border: none;
                            background: #DF1C2D;
                            text-align: center;
                            text-transform: uppercase;
                            font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;
                            font-weight: 600;
                            font-size: 11px;
                            cursor: pointer;
                            margin: auto;
                            margin-bottom: 5px
                        ">
                                <a href="${Signature.Contactus}" style="
                                
                                text-decoration: none!important;
                                color: white;
                                vertical-align: middle;
                                ">SCHEDULE MEETING</a>

                        </div>
                        <div style="
                            padding: 5px 4px;
                            width: 175px;
                            max-width: 175px;
                            min-width: 175px;
                            height: 28px;
                            min-height: 28px;
                            border: none;
                            background: #23C075;
                            text-align: center;
                            text-transform: uppercase;
                            font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;
                            font-weight: 600;
                            font-size: 11px;
                            cursor: pointer;
                            margin: auto;
                            margin-bottom: 5px
                        ">
                                <a href="${Signature.Searchhomes}" style="
                                
                                text-decoration: none!important;
                                color: white;
                                vertical-align: middle;
                                ">SEARCH HOMES</a>

                        </div>
                        <div style="padding: 5px 4px;
                        width: 175px;
                        max-width: 175px;
                        min-width: 175px;
                        min-height: 28px;
                        height: 28px;
                        border: none;
                        background: #002D6F;
                        text-align: center;
                        margin:0 auto;
                        text-transform: uppercase;
                        font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;
                        font-weight: 600;
                        font-size: 11px;
                        cursor: pointer;
                        margin-bottom: 5px">
                                <a href="${Signature.Yourhomevalue}"
                                style="
                                text-decoration: none!important;
                                color: white;
                                vertical-align: middle;
                            ">YOUR HOME VALUE</a>
                        </div>

                </td>
            </tr>
            <tr style="border: none; ">
                <td colspan="4" style="border: none; ">
                    <p style="color:black; font-family: Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif; font-weight: 400; font-size: 12px; color: #A8A8A8 ;">
                        
                        This message and any attachments are confidential and only intended to be read by the addressed recipient. If you are not the intended recipient, please contact us, immediately delete the message from your computer and destroy any copies. Robert Piazza Palotto Sold Team | RE/MAX Plus: 2171 Monroe Avenue, Rochester, NY 14618. Each office Independently owned and operated.

                    </p>

                </td>
            </tr>
            
        </tbody>
        </table>
        
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











