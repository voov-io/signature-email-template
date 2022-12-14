



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
    <table id="sign" style="width: 650px; height: 278px;">
            <tbody>
                <tr>
                    <td style="width: 85px;vertical-align: top;"> 
                        <img id="photouser"  style="
                        width: 150px;
                        height: 200px;
                        max-width: 150px;
                        max-height: 220px;
                        vertical-align: top;
                        padding-right:17px;
                        object-fit: cover;
                        object-position: center;
                    " src=" ${Signature.PictureCode}" alt="Profile image - ${Signature.Name}"></td>
                    <td><section>
                        <h1 id="nombre" style="font-size:25px; font-weight: 700; font-family: Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;text-transform: uppercase;color: black; margin-bottom: 0;">${Signature.Name}</h1>
                        <span id="rol" style="font-size:14px; font-weight: 400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;text-transform: uppercase;color: black; margin-bottom:5px;">${Signature.Title}</span>
                        <table style="margin-top: 20px;">
                            <tr>
                                <td><p id="sign_mobile" style="font-size: 14px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;"> <strong style="font-size:14px;font-weight: 600; color:black;">MOBILE</strong></p>
                                    <p style="font-size: 14px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;"> <strong style="font-size:14px;font-weight: 600; color:black;margin:0px;">OFFICE</strong></p>
                                    <p style="font-size: 14px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;"> <strong style="font-size:14px;font-weight: 600; color:black;margin:0px;">EMAIL</strong></p>
                                    <p style="font-size: 14px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;"> <strong style="font-size:14px;font-weight: 600; color:black;margin:0px;">WEBSITE</strong></p>
                                    <p style="font-size: 14px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;"> <strong style="font-size:14px;font-weight: 600; color:black;margin:0px;">WEBSITE</strong></p>
                                    <p style="font-size: 14px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;"> <strong style="font-size:14px;font-weight: 600; color:black;margin:0px;">ADDRESS</strong></p>
                                </td>
                                <td><p id="mobile" style="font-size: 14px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;">${Signature.CellPhone}</p>
                                    <p id="office" style="font-size: 14px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;">${Signature.OfficePhone}</p>
                                    <p id="email" style="font-size: 14px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;">robert@rppsoldteam.com</p>
                                    <p id="website" style="font-size: 14px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;">www.rppsoldteam.com</p>
                                    <p id="website2" style="font-size: 14px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;">www.robert.findrochesternyhomes.com</p>
                                    <p id="address" style="font-size: 14px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;">2171 Monroe Ave Rochester, NY 14618</p></td>
                                </tr>
                        </table>
                    </section>
                </td>
                <td ></td>
                <td ></td>
            </tr> 
            <tr>
                <td colspan="2">
                        <div>
                            <img style="width:485px;height: auto;" src="https://lh3.googleusercontent.com/drive-viewer/AFDK6gMPCqgnFSsrgRiaZbig85FrzSbdy9S3OuzYiWxh0avSX5uP_D200G42MSa2W2fdHXtfJByj1rErOnHxI5tKSqdwrgQv=w1920-h932" alt="Banner to visit our website">
                        </div>
                </td>
                <td>
                    <div>
                        <a href="${Signature.Facebook}" target="_blank"><img style="height:28px;width:28px; margin:4px 3px; cursor: pointer;" src="https://lh3.googleusercontent.com/drive-viewer/AFDK6gO4RTQuWR-LXbPgJg_m-3tNRgeHrWEKS0J65wgX5PJKOm4GFQEjhs66YN0xH9otwuCvEI8Y_sAyXasqN5oI1gqB4sRElw=w1920-h532" alt="Icon FaceBook"></a>
                    </div>
                    <div>
                        <a href="${Signature.Linkedin}" target="_blank"><img style="height:28px;width:28px; margin:4px 3px; cursor: pointer;" src="https://lh3.googleusercontent.com/drive-viewer/AFDK6gOwkEqvKU8kCtFNV6yDMnjWhGDjUDNv5lX4Qxqfmj8DNI32XUe5y7rsERqF1EgL-kF2YtBXnKPuTMts_MClVwUMq2Of=w1920-h532" alt="Icon LinkedIn"></a>
                    </div>
                    <div>
                        <a href="${Signature.Instagram}" target="_blank"><img style="height:28px;width:28px; margin:4px 3px; cursor: pointer;" src="https://lh3.googleusercontent.com/drive-viewer/AFDK6gM5eh0iQ2kqaxqrVQtjrC1NmABAz69jOMpEnLguDcRe0zDYr8YQ-6QWOAXk6OSw2bCFS24_Ylx8Oz-2KgrUsXjQanczQg=w1920-h932" alt="Icon Instagram"></a>
                    </div>
                </td>
                <td  style="width: 230px;
                 height: 30px;" >
                        <div style="
                        padding: 5px 3px;
                            width: 230px;
                             height: 30px;
                            border: none;
                            background: #DF1C2D;
                            text-align: center;
                            text-transform: uppercase;
                            font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;
                            font-weight: 600;
                            font-size: 14px;
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

                        <div style="padding: 5px 3px;
                        width: 230px;
                         height: 30px;
                        border: none;
                        background: #23C075;
                        text-align: center;
                        margin:0 auto;
                        text-transform: uppercase;
                        font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;
                        font-weight: 600;
                        font-size: 14px;
                        cursor: pointer;
                        text-decoration: none;
                        margin-bottom: 5px">
                                <a href="${Signature.Searchhomes}"
                                style="
                                text-decoration: none!important;
                                color: white;
                                vertical-align: middle;
                            ">SEARCH HOMES</a>
                        </div>
                        <div style="padding: 5px 3px;
                        width: 230px;
                         height: 30px;
                        border: none;
                        background: #002D6F;
                        text-align: center;
                        margin:0 auto;
                        text-transform: uppercase;
                        font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;
                        font-weight: 600;
                        font-size: 14px;
                        cursor: pointer;
                        text-decoration: none;
                        margin-bottom: 5px">
                                <a href="${Signature.Yourhomevalue}"
                                style="
                                text-decoration: none!important;
                                color: white;
                                vertical-align: middle;
                            ">YOUR HOMES VALUE</a>
                        </div>

                </td>
                <td s></td>
            </tr>
            <tr>
                <td colspan="4">
                    <p style="color:black; font-family: Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif; font-weight: 400; font-size: 12px; color: #A8A8A8 ;">
                        
                        This message and any attachments are confidential and only intended to be read by the addressed recipient. If you are not the intended recipient, please contact us, immediately delete the message from your computer and destroy any copies. Robert Piazza Palotto Sold Team | RE/MAX Plus: 2171 Monroe Avenue, Rochester, NY 14618. Each office Independently Owned and operated

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











