//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos. 

const botonCalcular = document.querySelector("#calcular-tiempo");
const tiempoTotal = document.querySelector("#tiempo-total");

botonCalcular.addEventListener("clicl", function() {
    event.preventDefault()
    const primervidhoras = Number(document.querySelector("#video1-horas").value);
    const primervidminutos = Number(document.querySelector("#video1-minutos").value);
    const primervidsegundos = Number(document.querySelector("#video1-segundos").value);

    const segundovidhoras = Number(document.querySelector("#video2-horas").value);
    const segundovidminutos = Number(document.querySelector("#video2-minutos").value);
    const segundovidsegundos = Number(document.querySelector("#video2-segundos").value);

    const tercervidhoras = Number(document.querySelector("#video3-horas").value);
    const tercervidminutos = Number(document.querySelector("#video3-minutos").value);
    const tercervidsegundos = Number(document.querySelector("#video3-segundos").value);

    const cuartovidhoras = Number(document.querySelector("#video4-horas").value);
    const cuartovidminutos = Number(document.querySelector("#video4-minutos").value);
    const cuartovidsegundos = Number(document.querySelector("#video4-segundos").value);

    const quintovidhoras = Number(document.querySelector("#video5-horas").value);
    const quintovidminutos = Number(document.querySelector("#video5-minutos").value);
    const quintovidsegundos = Number(document.querySelector("#video5-segundos").value);

    const sextovidhoras = Number(document.querySelector("#video6-horas").value);
    const sextovidminutos = Number(document.querySelector("#video6-minutos").value);
    const sextovidsegundos = Number(document.querySelector("#video6-segundos").value);

    const tiempoTotalSegundos = (primervidhoras * 3600) + (primervidminutos * 60) + primervidsegundos +
                        (segundovidhoras * 3600) + (segundovidminutos * 60) + segundovidsegundos +
                        (tercervidhoras * 3600) + (tercervidminutos * 60) + tercervidsegundos +
                        (cuartovidhoras * 3600) + (cuartovidminutos * 60) + cuartovidsegundos +
                        (quintovidhoras * 3600) + (quintovidminutos * 60) + quintovidsegundos +
                        (sextovidhoras * 3600) + (sextovidminutos * 60) + sextovidsegundos;

    const tiempoTotalHoras = Math.floor(tiempoTotalSegundos / 3600);
    const tiempoTotalMinutos = Math.floor((tiempoTotalSegundos % 3600) / 60);
    const tiempoTotalSegundosRestantes = tiempoTotalSegundos % 60;
    tiempoTotal.textContent = `${tiempoTotalHoras} horas, ${tiempoTotalMinutos} minutos, ${tiempoTotalSegundosRestantes} segundos`;
}); 

