const images = document.querySelectorAll(".model img");
const sliderBtns = document.querySelectorAll(".slider-btn");
let currentIndex = 0;
let autoPlayTimer; // Variable to hold our interval timer

// 1. Existing Click Listeners (Updated to reset the timer)
sliderBtns.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
        if (e.target.classList.contains("slider-active")) {
            return;
        }
        changeImage(i);
        resetAutoPlay(); // Reset timer when user interacts manually
    })
});

// 2. The Core Image Change Function (from before)
function changeImage(newIndex) {
    sliderBtns[currentIndex].classList.remove("slider-active");
    images[currentIndex].classList.remove("active");

    currentIndex = newIndex;

    sliderBtns[currentIndex].classList.add("slider-active");
    images[currentIndex].classList.add("active");
}

// 3. Auto-play Logic
function nextImage() {
    // Calculate the next index. 
    let nextIndex = currentIndex + 1;
    
    // If we reach the end of the images, loop back to 0
    if (nextIndex >= images.length) {
        nextIndex = 0; 
    }
    
    changeImage(nextIndex);
}

function startAutoPlay() {
    // Run nextImage every 1000 milliseconds (1 second)
    autoPlayTimer = setInterval(nextImage, 3000); 
}

function resetAutoPlay() {
    // Stop the current timer and start a fresh one
    clearInterval(autoPlayTimer);
    startAutoPlay();
}

// 4. Kick off the auto-play when the script loads
startAutoPlay();