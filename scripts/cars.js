// --- Menu Hambúrguer ---
    const hamButton = document.querySelector('.hamButton');
    const navigation = document.querySelector('nav');

    // Garante que os elementos existem antes de adicionar o evento
    if (hamButton && navigation) 
        hamButton.addEventListener('click', () => {
            // Alterna a classe 'active' na navegação para mostrar/esconder o menu
            navigation.classList.toggle('active');
            // Alterna a classe 'active' no botão para animar o ícone (de hambúrguer para 'X')
            hamButton.classList.toggle('active');
        });