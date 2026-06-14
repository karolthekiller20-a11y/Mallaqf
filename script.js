const mallaData = {
  "1° Semestre": [
    {
      id: "QFAR111",
      nombre: "Química General I",
      req: []
    },
    {
      id: "QFAR112",
      nombre: "Matemáticas",
      req: []
    }
  ],

  "2° Semestre": [
    {
      id: "QFAR121",
      nombre: "Química General II",
      req: ["QFAR111"]
    }
  ]
};

const contenedor = document.getElementById("malla");

let aprobados = [];

function cumpleReq(reqs) {
  return reqs.every(r => aprobados.includes(r));
}

function render() {

  contenedor.innerHTML = "";

  for (const semestre in mallaData) {

    const columna = document.createElement("div");
    columna.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = semestre;

    columna.appendChild(titulo);

    mallaData[semestre].forEach(ramo => {

      const div = document.createElement("div");

      div.className = "ramo";

      if (!cumpleReq(ramo.req)) {
        div.classList.add("bloqueado");
      }

      div.textContent =
        `${ramo.id} - ${ramo.nombre}`;

      columna.appendChild(div);

    });

    contenedor.appendChild(columna);

  }

}

render();
