//let paises = ["Chile", "Argentina", "Peru", "Bolivia"];
let paises = [];

function agregarPais(pais, callback){
    paises.push(pais);
    console.log(`Agrgando: ${pais}`);
    callback();
}

function mostrarPaises(){
    console.log(paises);
}

function iniciarIngresoPaises(){
    setTimeout(()=>{
        agregarPais("Chile", mostrarPaises);
    },3000);
}