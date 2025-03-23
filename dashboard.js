const dots = document.querySelectorAll('.dot');
const bannerTrack = document.querySelector('.banner-track');
const slides = document.querySelectorAll('.banner-track img');
let index = 0;
const totalSlides = slides.length;
const intervalTime = 3000; // Adjusted to sync with animation

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function updateBanner() {
    index = (index + 1) % totalSlides;
    bannerTrack.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
}

// Auto slide every intervalTime milliseconds
setInterval(updateBanner, intervalTime);

// Click event to manually navigate using dots
dots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => {
        index = dotIndex;
        bannerTrack.style.transform = `translateX(-${index * 100}%)`;
        updateDots();
    });
});

