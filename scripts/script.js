document.addEventListener('DOMContentLoaded', function() {
  if (document.title === 'Portfolio Knowledge Share Page'){
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
      if (slides[currentSlide-1].style.display) {
        slides[currentSlide-1].style.display = "block";
      };
      
    }
  }
});


document.addEventListener('DOMContentLoaded', function() {
  function burger_dropdown() {
    document.querySelector('.burger_icon').addEventListener('click', function() {
        document.querySelector('.dropdown_links').classList.toggle('show');
    });
  }
  burger_dropdown();
});


