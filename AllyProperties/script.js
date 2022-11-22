function LengthConverterFM(valNum) {
    document.getElementById("outputMeters").innerHTML = valNum / 10.76391;
}

function LengthConverterMF(valNum) {
    document.getElementById("outputFeet").innerHTML = valNum * 10.76391;
}

function SwapConverter() {
    var x = document.getElementById("converterFM");
    if (x.style.display === "block") {
        x.style.display = "none";
        x = document.getElementById("converterMF");
        x.style.display = "block"
    } else {
        x.style.display = "block";
        x = document.getElementById("converterMF");
        x.style.display = "none"
    }
}

function openNavM() {
    document.getElementById("mySidepanelM").style.width = "43%";
}

function openNavS() {
    document.getElementById("mySidepanelS").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidepanelM").style.width = "0";
    document.getElementById("mySidepanelS").style.width = "0";
}

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
  if (n > slides.length) {slideIndex = 1}    
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
