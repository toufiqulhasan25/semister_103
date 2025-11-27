
const weatherData = [
    { district: "Dhaka", temperature: 32, condition: "Sunny" },
    { district: "Sylhet", temperature: 27, condition: "Rainy" },
    { district: "Khulna", temperature: 30, condition: "Cloudy" }
];
function showWeather() {
const selectedCity = document.getElementById("citySelect").value;
const img = document.getElementById("weatherImage");
const error = document.getElementById("error");

error.textContent = "";
img.style.display = "none";

if (selectedCity === "") {
    error.textContent = "Please select a city!";
    return;
}

const data = weatherData.find(item => item.district === selectedCity);

if (data) {
    if (data.condition === "Sunny") {
        img.src = "../img/sunny.jpg"; 
    } else if (data.condition === "Rainy") {
        img.src = "../img/rainny.jpg";  
    } else if (data.condition === "Cloudy") {
        img.src = "../img/cloudy.jpg"; 
    }

    img.style.display = "block";
}
}
