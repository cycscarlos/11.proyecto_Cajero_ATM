// Creamos una clase "Billete" y con el constructor definimos sus dos atributos "valor" y "cantidad"
class Billete {
  constructor(v, c) {
    this.valor = v;
    this.cantidad = c;
  }
}

function entregarDinero() {
  var t = document.getElementById("dinero");
  var dinero = parseInt(t.value);
  for (var money of caja) {
    if (dinero > 0) {
      div = Math.floor(dinero / money.valor);

      if (div > money.cantidad) {
        papeles = money.cantidad;
      } else {
        papeles = div;
      }

      entregado.push(new Billete(money.valor, papeles));
      dinero = dinero - money.valor * papeles;
    }
  }
  if (dinero > 0) {
    document
      .getElementById("box")
      .insertAdjacentHTML(
        "beforeend",
        `"Soy un cajero automático pobre y no tengo suficiente dinero"`
      );
  } else {
    for (var e of entregado) {
      if (e.cantidad > 0) {
        document
          .getElementById("box")
          .insertAdjacentHTML(
            "beforeend",
            `Se entregó ${e.cantidad} billetes de ${e.valor} Bs. <br />`
          );
      }
    }
  }
}

// Creamos dos array "caja" y "entregado". El 1ro. contendrá los billetes que habrá dentro del ATM, y el 2do. los billetes dispensados
var caja = [];
var entregado = [];
caja.push(new Billete(100, 5));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 5));
caja.push(new Billete(10, 10));
caja.push(new Billete(5, 5));

// Originalmente definimos el valor de la cantidad de dinero que se puede extraer, pero después lo solicitaremos a través del input HTML
var dinero = 0;

// La variable "div" es el resultado de la división cada vez que iteramos el bucle "for"
var div = 0;
var papeles = 0;

var boton = document.getElementById("retirar");
boton.addEventListener("click", entregarDinero);
document.getElementById("dinero").value = "";
