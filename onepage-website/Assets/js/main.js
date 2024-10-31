function switchToDark() {
    const themestyle = document.getElementById('themeStyle');
    const moonicon = document.getElementById('moonIcon');
    const topwhite = document.getElementById('topWhite');
    const topgrey = document.getElementById('topGrey');
    const topgreybottom = document.getElementById('topGreyBottom');
    

    if (themestyle.getAttribute('href') === '../css/light.css') {
        themestyle.setAttribute('href', '../css/dark.css');
        moonicon.className = 'fa-solid fa-toggle-on';
        topwhite.src = '../image/shape-top-black-80.png';
        topgrey.src = '../image/shape-top-dark-grey-80.png';
        topgreybottom.src = '../image/shape-top-dark-grey-80.png'
    }
    else {
        themestyle.setAttribute('href', '../css/light.css');
        moonicon.className = 'fa-solid fa-toggle-off';
        topwhite.src = '../image/shape-top-white-80.png';
        topgrey.src = '../image/shape-top-grey-80.png';
        topgreybottom.src = '../image/shape-top-grey-80.png'
    }
}

const menuIcon = document.getElementById('bar');
const navMenu = document.getElementById('navMenu');
 

function toggleMenu() {
    const isOpen = navMenu.classList.toggle('visible');
    
    // Switch between bar and X icon
    if (isOpen) {
        menuIcon.classList.replace('fa-bars', 'fa-times');
    } else {
        menuIcon.classList.replace('fa-times', 'fa-bars');
    }
}

// Put this at the end of your JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    updateCountdown(); // Start the countdown immediately
   
    // Update the target date in the countdown function
    function updateCountdown() {
        // Set your target date here
        const targetDate = new Date('2024-12-31 00:00:00').getTime();
       
        function update() {
            const currentDate = new Date().getTime();
            const difference = targetDate - currentDate;

            // Calculate time unit. days, hours, minute and seconds
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            // Update the display
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

            // Check if countdown is finished
            if (difference <= 0) {
                clearInterval(timer);
                document.getElementById('days').textContent = '00';
                document.getElementById('hours').textContent = '00';
                document.getElementById('minutes').textContent = '00';
                document.getElementById('seconds').textContent = '00';
            }
        }

        // Update immediately and then every second
        update();
        const timer = setInterval(update, 1000);
    }
});

window.addEventListener("scroll", function () {
    const header = document.getElementById("main");
    const stickyPoint = header.offsetTop;

    if (window.pageYOffset > stickyPoint) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});









// document.addEventListener("DOMContentLoaded", function() {
//     // Array of image URLs with the correct path
//     const images = [
//       '../image/1.jpg',
//       '../image/2.jpg',
//       '../image/3.jpg'
//     ];
  
//     // Get the element to apply the carousel
//     const carouselElement = document.querySelector('.section1');
  
//     // Set the initial index for the images array
//     let currentImageIndex = 0;
  
//     // Function to change the background image
//     function changeBackgroundImage() {
//         if (carouselElement) {
//             // Update the background image
//             carouselElement.style.backgroundImage = `url(${images[currentImageIndex]})`;
//             console.log(`Background changed to: ${images[currentImageIndex]}`);
  
//             // Move to the next image index, or loop back to the start
//             currentImageIndex = (currentImageIndex + 1) % images.length;
//         } else {
//             console.error("Element with class '.section1' not found.");
//         }
//     }
  
//     // Change the background every 5 seconds
//     setInterval(changeBackgroundImage, 5000); // 5000 ms = 5 seconds
  
//     // Initial call to display the first image
//     changeBackgroundImage();
//   });