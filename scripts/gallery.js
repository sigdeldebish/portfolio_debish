let slideIndex = 0;
showSlides();

function plusSlides(n) {
    clearTimeout(timer);
    slideIndex += n - 1;
    console.log(slides.length)
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    else if (slideIndex >= slides.length) { slideIndex = 0; }
    console.log(slides.length)
    showSlides();
}


function showSlides() {
    let slides = document.getElementsByClassName("image_slides");
    console.log(slides)
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "grid";  
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

function resetTimer() {
    clearTimeout(showSlides);
    setTimeout(showSlides, 4000);
}

