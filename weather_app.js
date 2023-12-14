// Inside the updateWeatherData function
function updateWeatherData(location) {
    // ... (your existing code)

    const weatherIcon = document.getElementById('icon');
    weatherIcon.src = 'https://example.com/clear-sky-icon.png';
    weatherIcon.alt = 'Clear Sky Icon';  // Add alt text dynamically based on weather conditions
}
