let slideIndex = 0;
showSlides();


function showSlides() {
    let slides = document.getElementsByClassName("image_slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}


document.addEventListener("DOMContentLoaded", function() {
    let canvas = document.getElementById('doodlingCanvas');
    let ctx = canvas.getContext('2d');
    let reset = document.getElementById('reset_doodle');

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    ctx.strokeStyle = '#84308a';
  
    function startPosition(e) {
      painting = true;
      draw(e); 
    }
  
    function endPosition() {
      painting = false;
      ctx.beginPath();
    }

    function resetCanvas() {
        
        ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetWidth);
    }
  
    function draw(e) {
      if (!painting) return;
      ctx.lineWidth = 7;
      ctx.lineCap = 'round'; 

      ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);
    reset.addEventListener('click', resetCanvas);
  });



