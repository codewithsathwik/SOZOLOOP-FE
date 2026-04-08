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

// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    duration: 1.2, // Controls the speed/smoothness of the scroll
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false, // Keep false to let touch devices use native smooth scrolling
    touchMultiplier: 2,
});

// Create the animation loop
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

// Start the loop
requestAnimationFrame(raf);


document.getElementById('sl-submit').addEventListener('click', () => {
    const name = document.getElementById('sl-name').value.trim();
    const email = document.getElementById('sl-email').value.trim();
    const subject = document.getElementById('sl-subject').value.trim();
    const msg = document.getElementById('sl-msg').value.trim();
    const err = document.getElementById('sl-error');

    if (!name || !email || !subject || !msg) {
        err.style.display = 'block';
        return;
    }
    err.style.display = 'none';
    document.getElementById('sl-form-view').style.display = 'none';
    const sv = document.getElementById('sl-success-view');
    sv.style.display = 'block';
});