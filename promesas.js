let paises=[];

/* const agregarPais = function(pais){
    paises.push(pais)
}*/

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

agregarPais('Chile')
    .then(resultado=>{
        console.log(resultado);
        console.log(paises);
        return agregarPais("Argentina");
    })
    .then(resultado => {
        console.log(resultado);
        console.log(paises);    
        return agregarPais("Peru");
    })
    .then(resultado => {
        console.log(resultado);
        console.log(paises);    
        return agregarPais("Bolivia");
    })
    .then(resultado => {
        console.log(resultado);
        console.log(paises);    
    })
    .catch(error=>{
        console.log(error);
    })