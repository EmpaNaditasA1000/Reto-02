import { imagenes, Nombre, Descripcion } from "./info.js"

const { 
    ImgHtml, 
    BNombre, 
    FDerecha, 
    FIzquierda 
  } = {
    ImgHtml: document.getElementById("ImgHtml"),
    BNombre: document.getElementById("BNombre"),
    FDerecha: document.getElementById("FDerecha"),
    FIzquierda: document.getElementById("FIzquierda")
  };


  const [golem, pekka, caballero, bruja, pillos, goblin, arquero, montaPuercos, minero, principe, bebeDragon] = imagenes;
  const [nombreGolem, nombrePekka, nombreCaballero, nombreBruja, nombrePillos, nombreGoblin, nombreArquero, nombreMontaPuercos, nombreMinero, nombrePrincipe, nombreBebeDragon] = Nombre;
  const [descripcionGolem, descripcionPekka, descripcionCaballero, descripcionBruja, descripcionPillos, descripcionGoblin, descripcionArquero, descripcionMontaPuercos, descripcionMinero, descripcionPrincipe, descripcionBebeDragon] = Descripcion;
  

let Actual;


if (localStorage.getItem("Actual")) {
    Actual = parseInt(localStorage.getItem("Actual"));
} else {
    Actual = 0;
}

function actualizarCarta() {
    ImgHtml.setAttribute("src", imagenes[Actual]);
    BNombre.innerText = Nombre[Actual];

    if (Actual === 0) {
        FIzquierda.style.backgroundColor = "gray";
        FIzquierda.disabled = true;
        FIzquierda.style.cursor = "default";
    } else {
        FIzquierda.style.backgroundColor = "rgba(18, 46, 205, 0.83)";
        FIzquierda.disabled = false;
        FIzquierda.style.cursor = "pointer";

    }

    if (Actual === 10) {
        FDerecha.style.backgroundColor = "gray";
        FDerecha.disabled = true;
        FDerecha.style.cursor = "default";
    } else {
        FDerecha.style.backgroundColor = "rgba(18, 46, 205, 0.83)";
        FDerecha.disabled = false;
        FDerecha.style.cursor = "pointer";
    }

    localStorage.setItem("Actual", Actual.toString());
}

function avanzar() {
    if (Actual < 10) {
        Actual++;
        actualizarCarta();
    }
}

function retroceder() {
    if (Actual > 0) {
        Actual--;
        actualizarCarta();
    }
}

FDerecha.addEventListener("click", avanzar);
FIzquierda.addEventListener("click", retroceder);

actualizarCarta();



BNombre.addEventListener("click", function () {
    Cuadro.style.display = "none";
    CuadroDesc.style.display = "flex";

    let ImgHtmlDesc = CuadroDesc.querySelector(".Img2");
    let h1 = CuadroDesc.querySelector("#TituloDesc");
    let Parrafo = CuadroDesc.querySelector("#ParrDesc");

    ImgHtmlDesc.setAttribute("src", imagenes[Actual]);
    h1.innerText = Nombre[Actual];
    Parrafo.innerText = Descripcion[Actual];
});

let Volver = document.querySelector("#Volver");

Volver.addEventListener("click", function () {
    Cuadro.style.display = "flex";
    CuadroDesc.style.display = "none";

});
