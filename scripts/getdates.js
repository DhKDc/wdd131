const currentYear = new Date().getFullYear();
document.querySelector('footer p:first-of-type').textContent = `Copyright © ${currentYear}`;

const lastModified = document.lastModified;
document.querySelector('footer p:nth-of-type(2)').textContent = `Last Modified: ${lastModified}`;
