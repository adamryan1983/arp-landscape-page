let slideIndex = 1;
const numSlides = document.getElementsByClassName("mySlides").length
const photoIndex = document.querySelector(".num-display");
const slideSection = document.querySelector(".slideshow-container")
const gridSection = document.querySelector(".image-grid")
photoIndex.innerHTML = slideIndex + " of " + numSlides;
let choice = "slides";


// Next/previous controls
const plusSlides = (n) => {
  // toggleSlide();
  showSlides(slideIndex += n);
  photoIndex.innerHTML = slideIndex + " of " + numSlides;
}

// Thumbnail image controls
const currentSlide = (n) => {
  showSlides(slideIndex = n);
}

const showSlides = (n) => {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
}
//toggle grid on or off
const toggleGrid = () => {

  document.querySelector(".closeGrid").style.visibility='visible'
  document.querySelector(".openGrid").style.visibility='hidden'
  document.querySelector(".controls").style.visibility='hidden'
  slideSection.style.display="none"
  gridSection.style.display="block"

}
const toggleSlide = () => {

  document.querySelector(".openGrid").style.visibility='visible'
  document.querySelector(".closeGrid").style.visibility='hidden'
  document.querySelector(".controls").style.visibility='visible'
  slideSection.style.display = "block"
  gridSection.style.display="none"

}

showSlides(slideIndex);

const retrieveImage = (n) => {
  toggleSlide();
  photoIndex.innerHTML = n + " of " + numSlides;
  currentSlide(n+1)
  console.log(n + " of " + numSlides)
}