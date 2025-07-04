
const currentYearElement = document.getElementById('currentyear');
if (currentYearElement) { 
    currentYearElement.textContent = new Date().getFullYear();
}

const lastModifiedElement = document.getElementById('lastmodified');
if (lastModifiedElement) { 
    lastModifiedElement.textContent = document.lastModified;
}