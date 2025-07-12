document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu');
    const mainNav = document.getElementById('main-nav');

    // Verifica se ambos os elementos existem antes de adicionar o event listener
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            
            mainNav.classList.toggle('active');

            menuToggle.classList.toggle('active');
        });
    } else {
        console.log('Erro: Elementos do menu (botão ou navegação) não encontrados no DOM.');
    }
    const lastModifiedElement = document.getElementById('lastmodified');

    if (lastModifiedElement) {
        
        lastModifiedElement.textContent = new Date(document.lastModified).toLocaleDateString('pt-BR');
    }
});