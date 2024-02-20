let currentSlide = 1;
showSlide(currentSlide);

function changeSlide(n) {
  showSlide(currentSlide += n);
}

function showSlide(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {currentSlide = 1}
  if (n < 1) {currentSlide = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[currentSlide-1].style.display = "block";
}


function burger_dropdown(){
    document.querySelector('.burger_icon').addEventListener('click',
    document.querySelector('.dropdown_links').classList.toggle('show'));
}