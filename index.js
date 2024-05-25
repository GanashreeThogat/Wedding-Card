// Countdown Timer Script (customize date and time)
var countDownDate = new Date("may 28, 2024 00:00:00").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Updated: Check if the element exists before updating its content
    var countdownElement = document.getElementById("countdown");
    if (countdownElement) {
        countdownElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }

    if (distance < 0) {
        clearInterval(x);
        // Updated: Check if the element exists before updating its content
        if (countdownElement) {
            countdownElement.innerHTML = "EXPIRED";
        }
    }
}, 1000); // Add a closing parenthesis and adjust the interval to 1000 milliseconds (1 second)

// Create an array of image URLs
const backgroundImages = [
    'background.jpg',
    'background 1.jpg',
    'background 2.jpg'
];
let currentIndex = 0;

function changeBackground() {
    const backgroundContainer = document.getElementById('background');
    const imageUrl = `url('${backgroundImages[currentIndex]}')`;

    setTimeout(() => {
        backgroundContainer.style.backgroundImage = imageUrl;
        backgroundContainer.style.opacity = 1;
    }, 500);

    currentIndex = (currentIndex + 1) % backgroundImages.length;
}

// Change the background image every 5 seconds
setInterval(changeBackground, 5000);

// Initial background image change
changeBackground();