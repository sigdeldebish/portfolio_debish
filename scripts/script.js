document.addEventListener('DOMContentLoaded', function() {
  let currentSlide = 1;
  showSlide(currentSlide);

  document.getElementById('prev').addEventListener('click', function(){
    showSlide(currentSlide -= 1)
  });
  document.getElementById('next').addEventListener('click', function(){
    showSlide(currentSlide += 1)
  });
    

  function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {currentSlide = 1}
    if (n < 1) {currentSlide = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[currentSlide-1].style.display = "block";
    
  };

});


document.addEventListener('DOMContentLoaded', function() {
  function burger_dropdown() {
    document.querySelector('.burger_icon').addEventListener('click', function() {
        document.querySelector('.dropdown_links').classList.toggle('show');
    });
  }
  burger_dropdown();
});


