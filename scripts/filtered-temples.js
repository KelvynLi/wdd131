  // Data for the temples
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },


  {    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },

  
{    templeName: "São Paulo Brazil",
    location: "São Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 59246 ,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
  },

  {
    templeName: "Brasília Brazil",
    location: "Brasília, Brazil",
    dedicated: "2019, December, 15",
    area: 25000 ,
 
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39184-main.jpg"
  },

  {    templeName: "Fortaleza Brazil",
    location: "Fortaleza, Brazil",
    dedicated: "2020, December, 15",
    area: 36000,
    imageUrl: 
  "https://churchofjesuschristtemples.org/assets/img/temples/fortaleza-brazil-temple/fortaleza-brazil-temple-5569-main.jpg"},
    

    { templeName: "provo utah",
    location: "Provo, Utah, United States",
    dedicated: "1972, March, 9",
    area: 185084,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-56386-main.jpg"
    }
];



// Function to create and return a temple card element
const createTempleCard = (temple) => {
    const card = document.createElement("figure");
    card.classList.add("temple-card");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy"; // Native lazy loading

    const caption = document.createElement("figcaption");

    const name = document.createElement("h3");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

    const area = document.createElement("p");
    area.innerHTML = `<strong>Size:</strong> ${temple.area.toLocaleString()} sq ft`;

    caption.append(name, location, dedicated, area);
    card.append(img, caption);

    return card;
};

// Function to display a list of temples
const displayTemples = (templeList) => {
    const container = document.getElementById('temple-grid-container');
    container.innerHTML = ""; // Clear previous content
    templeList.forEach(temple => {
        container.appendChild(createTempleCard(temple));
    });
};

// Main execution block
document.addEventListener('DOMContentLoaded', () => {
    // --- Hamburger Menu and Footer Logic ---
    const menuToggle = document.getElementById('menu');
    const mainNav = document.getElementById('main-nav');
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    const lastModifiedElement = document.getElementById('lastmodified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = new Date(document.lastModified).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    }

    // --- Filtering Logic ---
    const pageTitle = document.querySelector("#Title");

    document.querySelector("#nav-home").addEventListener("click", (e) => {
        e.preventDefault();
        pageTitle.textContent = "Temple Album";
        displayTemples(temples);
    });

    document.querySelector("#nav-old").addEventListener("click", (e) => {
        e.preventDefault();
        pageTitle.textContent = "Old Temples (before 1900)";
        displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
    });

    document.querySelector("#nav-new").addEventListener("click", (e) => {
        e.preventDefault();
        pageTitle.textContent = "New Temples (after 2000)";
        displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
    });

    document.querySelector("#nav-large").addEventListener("click", (e) => {
        e.preventDefault();
        pageTitle.textContent = "Large Temples (> 90,000 sq ft)";
        displayTemples(temples.filter(t => t.area > 90000));
    });

    document.querySelector("#nav-small").addEventListener("click", (e) => {
        e.preventDefault();
        pageTitle.textContent = "Small Temples (< 10,000 sq ft)";
        displayTemples(temples.filter(t => t.area < 10000));
    });

    // Initial load: display all temples
    displayTemples(temples);
});
