let texto = "Node. js es un entorno de tiempo de ejecución de JavaScript (de ahí su terminación en . js haciendo alusión al lenguaje JavaScript). Este entorno de tiempo de ejecución en tiempo real incluye todo lo que se necesita para ejecutar un programa escrito en JavaScript."

//console.log("texto original: "+texto);
//console.log("");

let data = texto.replaceAll(".","").replaceAll("\(","").replaceAll("\)","").split(" ");

//console.log("nuevo texto: "+data);
console.log("largo array: "+data.length);

//elimino duplicados
//let result = data.filter((item,index)=>{
//  return data.indexOf(item) === index;
//})
//console.log(result); //[1,2,6,5,9,'33']

let repetidos = {};

data.forEach(function(palabra){
  repetidos[palabra] = (repetidos[palabra] || 0) + 1;
});

console.log(repetidos);