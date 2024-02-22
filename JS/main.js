let dataHeaderNomina;

fetch("JS/data/headerNomina.json")
    .then((response) => response.json())
    .then((data) => {
        dataHeaderNomina = data;
        console.log(dataHeaderNomina);

        // dataHeaderNomina.forEach( dada => {
        //     console.log(dada.empresa);
        // });

    
    printHeaderNomina(dataHeaderNomina[Math.floor(Math.random()*11)]);

    })


function printHeaderNomina(arrayDataHeader){
    let taulaHeaderNomina = document.getElementById("encapcalament");
    
    let printarTaulaHeaderNomina = ( ` 
                                    <label> EMPRESA:</label>  ${arrayDataHeader.empresa}
                                    <label> DOMICILI:</label> ${arrayDataHeader.Domicili}                           
                                    <label> NIF:</label> ${arrayDataHeader.NIF_Empresa}
                                    <label> CC SS:</label> ${arrayDataHeader.CCSS}    
                                    <label for="nom_treballador"> TREBALLADOR/A:</label>   
                                    <input type="text" id="nom_treballador">
                                    <label> NIF:</label> ${arrayDataHeader.NIF_Empleat}
                                    <label for="NASS"> Número Afiliació SS:</label> 
                                    <input type="text" id="NASS">
                                    <label for="grup_professional"> GRUP PROFESSIONAL:</label> 
                                    <input type="text" id="grup_professional">
                                    <label for="grup_cotitzacio"> GRUP COTITZACIÓ:</label>
                                    <input type="text" id="grup_cotitzacio">
                                    <label for="antiguitat"> Antiguitat:</label> 
                                    <input type="text" id="antiguitat"">
                                    ` );
    taulaHeaderNomina.innerHTML = printarTaulaHeaderNomina;
}


