const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function populateProductOptions() {
    
    const productSelect = document.getElementById('productName');
    if (!productSelect) return;

    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        productSelect.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', () => {
   
    const REVIEW_COUNT_KEY = 'review-count';

    populateProductOptions();

    const reviewForm = document.querySelector('form');
    if (reviewForm) {
        reviewForm.addEventListener('submit', (event) => {
            
            event.preventDefault(); 

            let reviewCount = Number(window.localStorage.getItem(REVIEW_COUNT_KEY)) || 0;
            window.localStorage.setItem(REVIEW_COUNT_KEY, reviewCount + 1);

            
    }
});