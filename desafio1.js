const M = require("minimatch");

let texto = "Node. js es un entorno de tiempo de ejecución de JavaScript (de ahí su terminación en . js haciendo alusión al lenguaje JavaScript). Este entorno de tiempo de ejecución en tiempo real incluye todo lo que se necesita para ejecutar un programa escrito en JavaScript."

let newTexto = texto.replaceAll(".","").replaceAll("\(","").replaceAll("\)","").split(" ");
let largoArray = newTexto.length;

console.log("Texto: ", texto);
console.log("");
//console.log("newTexto: ", newTexto);
//console.log("largoArray: "+largoArray);

    //fuera los duplicados
    let result = newTexto.filter((item,index)=>{
      return newTexto.indexOf(item) === index;
    })
    //console.log(result); 

//console.log("largoResult: "+result.length);

for (let i=0; i<largoArray; i++)
{
    let cuenta = 0;
    let posicion = newTexto.indexOf(result[i]);
    while ( posicion != -1 ) {
        console.log("buscando........"+result[i]+" ..."+"encontrado en ..."+posicion);
        cuenta++;
        posicion = newTexto.indexOf(result[i],posicion+1);
        //console.log(newTexto[i] +" esta en posicion: "+posicion);
    }

}

let indices = new Array(result.length);
indices.fill(0);
let final = [];
let contaFinal = 0;

for (var i = 0; i < indices.length; i++) {

  for (var j = 0; j < newTexto.length; j++) {
    if (result[i] == newTexto[j]) {
      indices[i] = indices[i] + 1;
      contaFinal = indices[i];
      final.push('{ "'+newTexto[i]+'" : '+contaFinal+' }');
    }

  }
  
}
console.log(indices);
console.log(final);