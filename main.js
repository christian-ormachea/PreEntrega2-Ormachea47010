permitirEntrada();

class Producto {
    constructor(nombre, precio){
        this.id = 0;
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = false;
    }
    vender() {
        this.vendido = true; 
    }
    
}
const productos = [
    {id: 1, nombre: "Hamburguesa1", precio: 4500, vendido: false},
    {id: 2, nombre: "Hamburguesa2", precio: 3500, vendido: false},
    {id: 2, nombre: "Hamburguesa3", precio: 2500, vendido: false},
    {id: 3, nombre: "Hamburguesa4", precio: 1500, vendido: false},
];

// VALIDACION DE ENTRADA AL SITIO

function entradaInicial(){
    let nombre = prompt("Hola que tal, ingrese su nombre para continuar");
    alert('Hola que tal ' + nombre);
}

function sortearEdad(edad){
    if(edad >= 18){
        permitirEntrada = 1;
    } else {
        permitirEntrada = 0;
    }
    return(permitirEntrada);
}

function permitirEntrada(){
    entradaInicial();
    let edad = 0;
    let contadorDeIntentos = 4;
    do{
        edad = parseInt(prompt("Ingrese su edad"));
        contadorDeIntentos--;
    } while(edad < 18 && contadorDeIntentos != 0); 
      
    if(sortearEdad(edad) == 1){
        ingresarAlSitio();
    } else {
        alert("Error, demasiados intentos... debe ser mayor de edad para ingresar al sitio");
    }


}

// ADENTRO DEL ECOMMERCE
// Esta Parte no pude resolverla.






const comprar => (productos, carrito);{
    carrito = [];
    let productosVendidosHastaAhora = [];
    let cantidadTotalAPagar = [];
    let cantidadDeProductosVendidosHastaAhora = [];
    
    alert("Hola, que tal, bienvenido a nuestro eCommerce de consola! usted puede comprar: /n");
    productos.forEach(producto => console.log("el nombre de la hamburguesa es: " + producto.nombre + " y su precio es: " + producto.precio));
    let productoAComprar = prompt("Que hamburguesa quiere comprar??");
}


function ingresarAlSitio(){
    alert("Bienvenido a nuestro e-commerce! ");
    comprar(productos, carrito);
}

function eliminarProducto(id){
    arrayFiltrado = productos.filter(id => productos.id == id);

    return(arrayFiltrado);
}

function agregarProductos(Producto){
    productos.push(Producto)
}

