
  document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu');
    const nav = document.getElementById('main-nav');

    menuButton.addEventListener('click', () => {
      
      menuButton.classList.toggle('active');

      
      nav.classList.toggle('show');
    });
  });


window.addEventListener('DOMContentLoaded', () => {
    const heroImg = document.querySelector('.hero img');
     console.log('heroImg:', heroImg);

    if (heroImg && window.innerWidth > 768) {
        document.body.style.backgroundImage = `url('${heroImg.src}')`;
    } else {
        document.body.style.backgroundImage = 'none';
    }

const currentYearElement = document.getElementById('currentyear');
if (currentYearElement) { 
    currentYearElement.textContent = new Date().getFullYear();
}

const lastModifiedElement = document.getElementById('lastmodified');
if (lastModifiedElement) { 
    lastModifiedElement.textContent = document.lastModified;
}



});