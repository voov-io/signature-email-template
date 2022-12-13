



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
    <table id="sign" style="width: 650px; height: 278px;">
            <tbody>
                <tr>
                    <td style="width: 85px;vertical-align: top;"> 
                        <img id="photouser"  style="
                        width: 110px;
                        height: 130px;
                        vertical-align: top;
                        padding-right:17px;
                    " src=" ${Signature.PictureCode}" alt="Profile image - ${Signature.Name}"></td>
                    <td><section>
                        <h1 id="nombre" style="font-size:20px; font-weight: 700; font-family: Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;text-transform: uppercase;color: black; margin-bottom: 0;">${Signature.Name}</h1>
                        <span id="rol" style="font-size:8px; font-weight: 400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;text-transform: uppercase;color: black; margin-bottom:5px;">${Signature.Title}</span>
                        <table>
                            <tr>
                                <td><p id="sign_mobile" style="font-size: 9px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;"> <strong style="font-size:9px;font-weight: 600; color:black;">MOBILE</strong></p>
                                    <p style="font-size: 9px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;"> <strong style="font-size:9px;font-weight: 600; color:black;margin:0px;">OFFICE</strong></p>
                                    <p style="font-size: 9px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;"> <strong style="font-size:9px;font-weight: 600; color:black;margin:0px;">EMAIL</strong></p>
                                    <p style="font-size: 9px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;"> <strong style="font-size:9px;font-weight: 600; color:black;margin:0px;">WEBSITE</strong></p>
                                    <p style="font-size: 9px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;"> <strong style="font-size:9px;font-weight: 600; color:black;margin:0px;">WEBSITE</strong></p>
                                    <p style="font-size: 9px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;"> <strong style="font-size:9px;font-weight: 600; color:black;margin:0px;">ADDRESS</strong></p>
                                </td>
                                <td><p id="mobile" style="font-size: 9px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;">${Signature.CellPhone}</p>
                                    <p id="office" style="font-size: 9px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;">(585) 623-1515 </p>
                                    <p id="email" style="font-size: 9px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;">robert@rppsoldteam.com</p>
                                    <p id="website" style="font-size: 9px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;">www.rppsoldteam.com</p>
                                    <p id="website2" style="font-size: 9px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;">www.robert.findrochesternyhomes.com</p>
                                    <p id="address" style="font-size: 9px;margin: 0; color: black; font-weight:400; font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;">2171 Monroe Ave Rochester, NY 14618</p></td>
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
                            <a href="https://www.findrochesternyhomes.com/results-gallery/?UserID=All
                            " style="cursor:pointer ;"><img style="width:485px;height: auto;" src="https://lh3.googleusercontent.com/drive-viewer/AFDK6gMLlRuGtCVT1PgM-WKojEKmhHQyB9cf6kg_8DezR_8zO2qWDaMMAaytM6qyyUzVBc2rJ4YI-nqk5rTgSWCXCknBQrt5uA=w1920-h557" alt="Banner to visit our website"></a>

                        </div>
                </td>
                <td>
                    <div>
                        <a href="https://www.facebook.com/rppsoldteam" target="_blank"><img style="height:28px;width:28px; margin:4px 3px; cursor: pointer;" src="https://lh3.googleusercontent.com/drive-viewer/AFDK6gNH-flXhsdMZ7953sXKxrkQF3AJa61bCwCsqPZEPBbsWXks4xrI58joBVMNo9_UL8FGB3ViObOzQzlUStt74mKGc0p9=w1920-h557" alt="Icon FaceBook"></a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/company/rpp-sold-team/" target="_blank"><img style="height:28px;width:28px; margin:4px 3px; cursor: pointer;" src="https://lh3.googleusercontent.com/drive-viewer/AFDK6gMpzXIko-NcQVwsSDtQn-Z4SXtok4eQKIEdanG3rq2o7LQ9UbUQMyemtgcbLLHZK92uruXzNKMKbgBEFuqSlL-UKHqD=w1920-h557" alt="Icon LinkedIn"></a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/rppsoldteam/" target="_blank"><img style="height:28px;width:28px; margin:4px 3px; cursor: pointer;" src="https://lh3.googleusercontent.com/drive-viewer/AFDK6gOgrFJv4GW-i-JWmpjdy8vP22A-88kCgRfJjgGI8z7On4dN58A2jGQJ0JFsw6frdPQfZwm22N3LMA4r0ANRRGcCoJdN=w1920-h557" alt="Icon Instagram"></a>
                    </div>
                </td>
                <td colspan="2">
                        <div style="
                        padding: 5px 3px;
                            width: 127px;
                            height: 28px;
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
                                <a href="https://www.findrochesternyhomes.com/contactus/" style="
                                
                                text-decoration: none;
                                color: white;
                                vertical-align: middle;
                                ">SCHEDULE MEETING</a>

                        </div>
        
                        <div style="padding: 5px 3px;
                            width: 127px;
                            height: 28px;
                            border: none;
                            background: #23C075;
                            text-align: center;
                            color: white;
                            text-transform: uppercase;
                            font-family:  Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif;
                            font-weight: 600;
                            font-size: 11px;
                            cursor: pointer;
                            text-decoration: none;
                            margin:0 auto;
                            margin-bottom: 5px"
                            > 
                                <a ref="https://www.findrochesternyhomes.com/contactus/" style="
                                text-decoration: none;
                                color: white;
                                vertical-align: middle;
                                ">SEARCH HOMES</a>              
                        </div>

                        <div style="padding: 5px 3px;
                        width: 127px;
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
                        text-decoration: none;
                        margin-bottom: 5px">
                                <a href="https://www.findrochesternyhomes.com/home-valuation/"
                                style="
                                text-decoration: none;
                                color: white;
                                vertical-align: middle;
                            ">YOUR HOMES VALUE</a>
                        </div>

                </td>
                <td s></td>
            </tr>
            <tr>
                <td colspan="4">
                    <p style="color:black; font-family: Roboto,system-ui, -apple-system,Arial, sans-serif, Helvetica, sans-serif; font-weight: 400; font-size: 7px; color: #A8A8A8 ;">
                        
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











