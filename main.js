//Bienvenida al usuario
//Vamos a utilizar en esta 1era pre entrega , alert para mostrar información, y prompt para recibir datos (en forma de strings)
//Como es el nombre de una variable utilizo el fomrato lowerCamelCase

function comprar() {
  let destinoJujuy = 200;
  let detinoMendoza = 400;
  let destinoTierraDelFuego = 600;
  let ctdadPasajeros = 0;

  var destino = prompt(
    "Tenemos 3 destinos posibles!!\nJujuy\nMendoza\nTierra Del Fuego\nEscribe el destino al que quieres ir: "
  );

  function destinoElegido() {
    if (destino === "Jujuy") {
      alert("El precio por persona es de $" + destinoJujuy);
      return destinoJujuy;
    } else if (destino === "Mendoza") {
      alert("El precio por persona es de $" + detinoMendoza);
      return detinoMendoza;
    } else if (destino === "Tierra Del Fuego") {
      alert("El precio por persona es de $" + destinoTierraDelFuego);
      return destinoTierraDelFuego;
    } else {
      destino = prompt(
        "Lo siento, no es un destino disponible.\nIngrese el destino nuevamente: "
      );
      destinoElegido();
    }
  }

  let suDestino = destinoElegido();
  let ctdadPasajerosString = prompt(
    "Ahora indique cuantos pasajeros quieren viajar:"
  );

  ctdadPasajeros = Number(ctdadPasajerosString);
  let totalViaje = ctdadPasajeros * suDestino;
  return totalViaje;
}

function consultarPrecios() {}

function mostrarPromociones() {}

function mostrarComprasRealizadas() {}

function mostarMenu(numMenu) {
  switch (numMenu) {
    case 1:
      alert("A continuación accederemos a realizar la compra");
      var suCompra = comprar();
      alert(
        "El total de su compra para la cantidad de pasajeros elegidos es de: $" +
          suCompra
      );
      break;
    case 2:
      alert("A continuación accederemos a consultar los precios");
      consultarPrecios();
      break;
    case 3:
      alert("A continuación accederemos a mostrar las promociones disponibles");
      mostrarPromociones();
      break;
    case 4:
      alert("A continuación accederemos a mostrar las compras realizadas");
      mostrarComprasRealizadas();
      break;
    case 5:
      alert(
        "Muchas gracias por utilizar el sistema de compras de pasajes de Viaje Bien, vuelva pronto."
      );
      break;
    default:
      alert("Ese número no es una opción. Ingrese una opción nuevamente");
      var menu = prompt(
        "¿Que desea realizar?\n1-Comprar Pasajes\n2-Consultar precio\n3-Ver promociones\n4-Consultar compras realizadas\n5-Salir"
      );
      var numMenu = Number(menu);
      alert("Has elegido la opción: " + numMenu);
      mostarMenu(numMenu);
  }
}

function main() {
  alert("Bienvenido a la plataforma ViajeBien!!");
  var menu = prompt(
    "¿Que desea realizar?\n1-Comprar Pasajes\n2-Consultar precio\n3-Ver promociones\n4-Consultar compras realizadas\n5-Salir"
  );
  var numMenu = Number(menu);
  alert("Has elegido la opción: " + numMenu);
  mostarMenu(numMenu);
}

//Para ejecutar el programa llamo a la funcion padre con los parámetros necesarios
main();
