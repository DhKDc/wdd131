const currentYear = new Date().getFullYear();
const currentYearElement = document.getElementById("currentyear");
currentYearElement.textContent = currentYear;
const lastModifiedDate = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = lastModifiedDate.toLocaleDateString(undefined, options);
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last Modified: ${formattedDate}`;