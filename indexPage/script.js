// Espera a página carregar completamente
window.addEventListener('load', function() {
    // Pega o elemento do loader
    const loader = document.getElementById('loader');
    
    // Adiciona a classe 'hidden' para desaparecer suavemente
    loader.classList.add('hidden');
    
    // Opcional: Remove o elemento do DOM após a animação
    setTimeout(function() {
        loader.style.display = 'none';
    }, 500); // Aguarda a transição terminar
});

// Também pode usar DOMContentLoaded para uma experiência mais rápida
// window.addEventListener('DOMContentLoaded', function() {
//     const loader = document.getElementById('loader');
//     loader.classList.add('hidden');
// });