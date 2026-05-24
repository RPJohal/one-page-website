// Variable to keep track of the current slide active index
let slideIndex = 1;

// Function to open the Lightbox Modal overlay
function openLightbox() {
    document.getElementById("myLightbox").style.display = "block";
}

// Function to close the Lightbox Modal overlay
function closeLightbox() {
    document.getElementById("myLightbox").style.display = "none";
}

// Next/Previous Controls logic
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image selection logic
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Main logic core engine managing slide visibility toggles
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let captionText = document.getElementById("caption");
    
    // If index loops past the maximum, jump back to slide #1
    if (n > slides.length) { slideIndex = 1 }
    // If index drops under 1, jump directly to the last slide available
    if (n < 1) { slideIndex = slides.length }
    
    // Explicitly loop through and hide every slide asset
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Unhide the specific slide requested by the active index state
    slides[slideIndex - 1].style.display = "block";
    
    // Auto-populate the modal text caption based on the thumbnail alt attributes
    let thumbnails = document.getElementsByClassName("hover-shadow");
    if(thumbnails[slideIndex - 1]) {
        captionText.innerHTML = thumbnails[slideIndex - 1].alt;
    }
}