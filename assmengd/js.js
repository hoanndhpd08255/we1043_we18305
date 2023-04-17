let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length)
   {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// The onmouseover Event
document.getElementById('banghe').addEventListener('mouseover', mouseOver);
document.getElementById('banghe').addEventListener('mouseout', mouseOut);

function mouseOver() {
document.getElementById('banghe').style.transform = 'scale(1.3)';
document.getElementById('banghe').style.transition = 'linear .25s';
}

function mouseOut() {
document.getElementById('banghe').style.transform = 'scale(1)'; 
}