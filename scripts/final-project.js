document.addEventListener('DOMContentLoaded', () => {
    // --- Menu Hambúrguer ---
    const hamButton = document.querySelector('.hamButton');
    const navigation = document.querySelector('nav');

    // Garante que os elementos existem antes de adicionar o evento
    if (hamButton && navigation) {
        hamButton.addEventListener('click', () => {
            // Alterna a classe 'active' na navegação para mostrar/esconder o menu
            navigation.classList.toggle('active');
            // Alterna a classe 'active' no botão para animar o ícone (de hambúrguer para 'X')
            hamButton.classList.toggle('active');
        });
    }

   
    const carImages = [
        {
            imageUrl: "https://www.byd.com/content/dam/byd-site/us/home/kv-banner/han-blue-pc-new.jpg",
            altText: "BYD HAN"
        },
        {
            imageUrl: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Card-Model-Y-Desktop-US.png",
            altText: "Tesla Model 3"
        },
        {
            imageUrl: "https://media.toyota.com.br/ccfe76ab-e0e4-40b7-9dd5-82cb13e769c6.jpeg",
            altText: "Corolla Hybrid 2025"
        },
        {
            imageUrl: "https://www2.mercedes-benz.com.br/content/dam/hq/passengercars/electromobility/concept-cars-and-design/models/04-2022/images/mercedes-benz-concept-cars-eq-landingpage-models-eqe-764x573-04-2022.jpg/1740015910332.jpg?im=Crop,rect=(0,0,765,573);Resize=(512,383)",
            altText: "Mercedes-Benz EQE"
        }
    ];

    // --- Função para Criar os Slides Dinamicamente ---
    function createSlides() {
        const slidesContainer = document.querySelector('.slides');
        if (!slidesContainer) return;

        slidesContainer.innerHTML = ''; // Limpa qualquer conteúdo que já exista

        carImages.forEach(image => {
            const slideDiv = document.createElement('div');
            slideDiv.className = 'slide';

            const imgElement = document.createElement('img');
            imgElement.src = image.imageUrl;
            imgElement.alt = image.altText;

            const captionDiv = document.createElement('div');
            captionDiv.className = 'slide-caption';
            captionDiv.textContent = image.altText;

            slideDiv.append(imgElement, captionDiv);
            slidesContainer.appendChild(slideDiv);
        });
    }

    // --- Função para Iniciar a Lógica do Carrossel ---
    function initializeSlider() {
        const slidesContainer = document.querySelector('.slides');
        if (!slidesContainer || slidesContainer.children.length === 0) return;

        let slideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
        const nextButton = document.querySelector('.next');
        const prevButton = document.querySelector('.prev');

        function showSlide(index) {
            if (index >= totalSlides) slideIndex = 0;
            else if (index < 0) slideIndex = totalSlides - 1;
            else slideIndex = index;
            
            slidesContainer.style.transform = `translateX(${-slideIndex * 100}%)`;
        }

        if (nextButton && prevButton) {
            nextButton.addEventListener('click', () => showSlide(slideIndex + 1));
            prevButton.addEventListener('click', () => showSlide(slideIndex - 1));
        }
    

        // Troca automática de slide a cada 5 segundos
        setInterval(() => showSlide(slideIndex + 1), 5000);
    }

    // --- Lógica do Rodapé ---
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastmodified').textContent = document.lastModified;

    // --- Execução Principal ---
    createSlides();      // Primeiro, cria os slides com as imagens
    initializeSlider();  // Depois, inicia a animação do carrossel


});