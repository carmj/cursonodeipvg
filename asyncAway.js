let paises=[];

//funcion (agregarPais) que recibe un unico parametro y retorna un valor.
const agregarPais =  pais=> new Promise((resolve, reject) =>{
    setTimeout(()=>{
        //simula error
        if (pais == "Bolivia")
        {
            reject(`El pais ${pais} no tiene mar`);
        }


        paises.push(pais);
        //reject("Error al ingresar el pais");
        resolve(`Agregado ${pais}`);
    },3000);
}); 

async function iniciarProceso(){
    try {
        let resultado = await agregarPais("Chile");
        await agregarPais("Argentina");
        await agregarPais("Peru");
        await agregarPais("Bolivia");
        console.log(paises);
    } catch (error) {
        console.log(error)
    }
}

iniciarProceso();