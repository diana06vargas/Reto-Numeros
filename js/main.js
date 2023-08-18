'use strict'  ;

function calcularNumeros() {
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const numerosDiv = document.getElementById("numeros");
    numerosDiv.innerHTML = "";
for (let i = 1; i <= cantidad; i++) {
      const input = document.createElement("input");
      input.type = "number";
      input.placeholder = `Número ${i}`;
      input.id = `numero${i}`;
      numerosDiv.appendChild(input);
    }

    const button = document.createElement("button");
    button.textContent = "Mostrar Resultados";
    button.onclick = mostrarResultados;
    numerosDiv.appendChild(button);
  }

  function mostrarResultados() {
    const cantidad = parseInt(document.getElementById("cantidad").value);
    let numeroMayor = Number(document.getElementById(`numero1`).value);
    let numeroMenor = Number(document.getElementById(`numero1`).value);

    for (let i = 2; i <= cantidad; i++) {
      const numero = Number(document.getElementById(`numero${i}`).value);
      if (numero > numeroMayor) {
        numeroMayor = numero;
      }
      if (numero < numeroMenor) {
        numeroMenor = numero;
      }
    }

    document.getElementById("mayor").textContent = numeroMayor;
    document.getElementById("menor").textContent = numeroMenor;
    document.getElementById("resultado").style.display = "block";
  }