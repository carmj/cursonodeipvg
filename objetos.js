const producto = {
    nombre : "Monitor Gamer 20\"",
    precio : 300000,
    informacion : {
        peso : "1kg",
        medida: "50cm"
    },
    disponibilidad : ["Los Angeles", "Chillán", "Concepción"]
}

//const {nombre, precio, informacion: {peso, medida}} = producto;

//congela un objeto, no permite modificaciones a los valores constantes, pero si eliminar
Object.freeze(producto);

//no permite eliminar valores ni agregar, pero si modificar valores
Object.seal(producto);


producto.nombre = "Computador";

function imprimir({nombre, precio, informacion: {peso} }) {
    console.log(`Nombre: ${nombre} precio: $ ${precio} peso: ${peso}`);

}

imprimir(producto);

//console.log(peso);