window.onload = () => {
    "use strict";
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js");
    }
};

let selecionado;
let jogador = "X";
