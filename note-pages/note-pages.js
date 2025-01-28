let titulos = JSON.parse(localStorage.getItem('titulo')) || [];

let notas = JSON.parse(localStorage.getItem('nota')) || [];

let index = JSON.parse(localStorage.getItem('i')) || [];

if (localStorage.getItem("contador") === null) {
    localStorage.setItem("contador", 0);
}

let contador = parseInt(localStorage.getItem("contador"));

let c = 0;

const textarea = document.querySelector('textarea')
const title = document.querySelector('.title')
const note = document.querySelector('.note')
const backBtn = document.querySelector('.back-btn')

if(index.length > 0){
    title.disabled = "true";
}

backBtn.addEventListener("click", () => {
  // Si se está editando una nota existente
  if (index.length > 0) {

    // Restablecer el índice y redirigir
    index.length = 0;
    localStorage.setItem('i', JSON.stringify(index));
    window.location.href = "../index.html";
  } 
  // Si se está creando una nueva nota
  else {
    // Validar el título antes de crear la nota
    if (title.value.trim() === "") {
      alert("El título no puede estar vacío.");
      return;
    }

    // Asegurarse de que la nota esté inicializada
    if (titulos[contador] === undefined) {
      titulos[contador] = title.value; // Guardar el nuevo título
      localStorage.setItem('titulo', JSON.stringify(titulos));
    }

    if (notas[contador] === undefined) {
      notas[contador] = note.value || ""; // Guardar el contenido de la nueva nota
      localStorage.setItem('nota', JSON.stringify(notas));
    }

    // Incrementar el contador y redirigir
    aumentarContador();
    window.location.href = "../index.html";
  }
});

// mostrar el contenido guardado
if(index.length > 0){
    title.value = titulos[index];  
    note.value = notas[index]
} else {
    
}

// crear un nuevo titulo para una nueva nota
title.addEventListener("input",() => {
    if(index.length === 0){
      
      titulos[contador] = title.value
      localStorage.setItem('titulo', JSON.stringify(titulos));
    } 
    // si hay contenido dentro del index significa que es una nota creada que hay que abir
    else {
    
      titulos[contador] = title.value
      localStorage.setItem('titulo', JSON.stringify(titulos));
    }
})

// crear un nuevo contenido para una nueva nota
note.addEventListener("input",() => {
    if(index.length === 0){
      
      notas[contador] = note.value
      localStorage.setItem('nota', JSON.stringify(notas));
    } // abrir el contenido de una nota existente
    else {
    
      notas[contador] = note.value
      localStorage.setItem('nota', JSON.stringify(notas));
    }
});

// Función para aumentar el contador en 1
function aumentarContador() {
    let contador = parseInt(localStorage.getItem("contador"));
    contador += 1;  // Aumentar el contador
    localStorage.setItem("contador", contador);  
}

// Función para ajustar la altura del textarea
function ajustarAlturaTextarea() {
    textarea.style.height = "auto"; 
    if (textarea.scrollHeight > textarea.offsetHeight) {
        textarea.style.height = `${textarea.scrollHeight}px`; 
    }

    if (parseInt(textarea.style.height) > parseInt(getComputedStyle(textarea).maxHeight)) {
        textarea.style.overflowY = "scroll"; 
    } else {
        textarea.style.overflowY = "hidden";
    }
}

// Ajustar la altura al escribir
textarea.addEventListener("input", ajustarAlturaTextarea);

// Ajustar la altura al cargar la página
window.addEventListener("load", ajustarAlturaTextarea);