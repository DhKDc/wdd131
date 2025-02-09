const temperature = 25;
const windSpeed = 10;

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

const windChillElement = document.querySelector(".weather li:nth-child(4)");

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `Wind Chill: ${windChill.toFixed(1)}°C`;
} else {
    windChillElement.textContent = "Wind Chill: N/A";
}