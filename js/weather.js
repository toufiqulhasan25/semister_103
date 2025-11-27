
// Array of objects
const weatherData = [
    { city: "Dhaka", temperature: 32, condition: "Sunny", img: "sunny.png" },
    { city: "Sylhet", temperature: 27, condition: "Rainy", img: "rainy.png" },
    { city: "Khulna", temperature: 30, condition: "Cloudy", img: "cloudy.png" }
];

function showWeather() {
    const selectedCity = document.getElementById("citySelect").value;
    const message = document.getElementById("msg");
    const result = document.getElementById("result");

    // clear old messages
    message.textContent = "";
    result.innerHTML = "";

    // If no city selected
    if (selectedCity === "") {
        message.textContent = "⚠️ Please select a city!";
        return;
    }

    // Find object of selected city
    const data = weatherData.find(item => item.city === selectedCity);

    // Show result
    result.innerHTML = `
        <h3>${data.city}</h3>
        <p>Temperature: ${data.temperature}°C</p>
        <p>Condition: ${data.condition}</p>
        <img src="${data.img}" width="120">
    `;
}

