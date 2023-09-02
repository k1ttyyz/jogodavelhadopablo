window.onload = () => {
    "use strict";
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js");
    }
};

let selecionado;
let jogador = "X";

let posicoes = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  
  function movimento(e) {
    const index = e.target.getAttribute("data-jogodavelha");
    e.target.innerHTML = jogador;
    e.target.removeEventListener("click", movimento);
    selecionado[index] = jogador;
  
    setTimeout(() => {
      quemganhou();
    }, [100]);
    jogador = jogador === "X" ? "O" : "X";
   
  }

  function inicio() {
    selecionado = [];
    document.querySelectorAll(".jogodavelhadopablo button").forEach((item) => {
      item.innerHTML = "";
      item.addEventListener("click", movimento);
    });
  }
  
  inicio();