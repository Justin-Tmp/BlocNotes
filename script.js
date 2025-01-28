const containerNotes = document.querySelector(".content-notes")
const inputTitulo = document.getElementById('titulo');
const crearNota = document.querySelector('.create-note')

let contador = 0;

let titulos = JSON.parse(localStorage.getItem('titulo')) || [];

let notas = JSON.parse(localStorage.getItem('nota')) || [];

let index = JSON.parse(localStorage.getItem('i')) || [];

document.addEventListener("DOMContentLoaded", () => {
    cargarNotas(); // Cargar todas las notas al abrir el navegador
});

function cargarNotas() {
    containerNotes.innerHTML = ""; // Limpiar el contenedor antes de cargar las notas

    titulos.forEach((titulo, i) => {
        const newNote = document.createElement("div");
        newNote.classList.add('note');
        
        const uniqueId = `note-${i}`;
        newNote.setAttribute('id', uniqueId);

        newNote.innerHTML = `
          <span>${titulo}</span>
          <button class="delete-btn">Eliminar</button>
        `;

        // Evento para abrir la nota
        newNote.addEventListener("click", (e) => {
            if (e.target.classList.contains("delete-btn")) return; // Evitar abrir al hacer clic en el botón
            openNote(i);
        });

        // Evento para eliminar la nota
        newNote.querySelector(".delete-btn").addEventListener("click", (e) => {
            e.stopPropagation(); // Detener la propagación al contenedor
            eliminarNota(i);
        });

        containerNotes.appendChild(newNote);
    });
}


crearNota.addEventListener("click",() => {
    window.location.href = "./note-pages/note-pages.html"
    })
   /*
    index.length = 0;
    titulos.length = 0;
    notas.length = 0;
    contador.length = 0;
    
    localStorage.setItem('i', JSON.stringify(index));
    localStorage.setItem('nota', JSON.stringify(notas));
    localStorage.setItem('titulo', JSON.stringify(titulos));
    localStorage.setItem('contador', JSON.stringify(contador));
    */
    
    console.log(titulos )
  //  console.log(notas)
  //  console.log(index)    
  //  console.log(contador)
    
    if (index.length > 0) {
    index.length = 0;
    localStorage.setItem('i', JSON.stringify(index));
    console.log(contador);
    containerNotes.innerHTML = "";
    
    titulos.forEach((titulo, i) => {
        const newNote = document.createElement("div");
        newNote.classList.add('note');
        
        const uniqueId = `note-${i}`;
        newNote.setAttribute('id', uniqueId);

        newNote.innerHTML = `
          <span>${titulo}</span>
          <button class="delete-btn">Eliminar</button>
        `;

        // Evento para abrir la nota
        newNote.addEventListener("click", (e) => {
            if (e.target.classList.contains("delete-btn")) return; // Evitar abrir al hacer clic en el botón
            openNote(i);
        });

        // Evento para eliminar la nota
        newNote.querySelector(".delete-btn").addEventListener("click", (e) => {
            e.stopPropagation(); // Detener la propagación al contenedor
            eliminarNota(i);
        });

        containerNotes.appendChild(newNote);
    });
}

function openNote(ind) {
    index.length = 0;
    localStorage.setItem('i', JSON.stringify(index));
    index.push(ind);
    localStorage.setItem('i', JSON.stringify(index));
    window.location.href = "./note-pages/note-pages.html";
}

function eliminarNota(index) {
    // Eliminar el div correspondiente
    const noteToRemove = document.getElementById(`note-${index}`);
    if (noteToRemove) {
        noteToRemove.remove();
    }

    // Actualizar los datos en localStorage
    titulos.splice(index, 1);
    notas.splice(index, 1);

    // Ajustar el contador
    let contador = parseInt(localStorage.getItem("contador"));
    if (contador > 0) {
        contador -= 1; // Reducir el contador
        localStorage.setItem("contador", contador);
    }

    // Guardar los datos actualizados en localStorage
    localStorage.setItem('titulo', JSON.stringify(titulos));
    localStorage.setItem('nota', JSON.stringify(notas));

    // Actualizar el índice de los divs y los eventos
    containerNotes.innerHTML = ""; // Limpiar el contenedor
    titulos.forEach((titulo, i) => {
        const newNote = document.createElement("div");
        newNote.classList.add('note');
        
        const uniqueId = `note-${i}`;
        newNote.setAttribute('id', uniqueId);

        newNote.innerHTML = `
          <span>${titulo}</span>
          <button class="delete-btn">Eliminar</button>
        `;

        // Evento para abrir la nota
        newNote.addEventListener("click", (e) => {
            if (e.target.classList.contains("delete-btn")) return; // Evitar abrir al hacer clic en el botón
            openNote(i);
        });

        // Evento para eliminar la nota
        newNote.querySelector(".delete-btn").addEventListener("click", (e) => {
            e.stopPropagation(); // Detener la propagación al contenedor
            eliminarNota(i);
        });

        containerNotes.appendChild(newNote);
    });
}        