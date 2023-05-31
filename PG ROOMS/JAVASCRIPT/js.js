document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.querySelector(".carousel-container");
    const prevButton = document.querySelector(".carousel-prev");
    const nextButton = document.querySelector(".carousel-next");
    const slideWidth = carouselContainer.querySelector(".carousel-slide").clientWidth;
  
    let slideIndex = 0;
    let timer;
  
    function goToSlide(index) {
      slideIndex = index;
      carouselContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    }
  
    function goToNextSlide() {
      slideIndex = (slideIndex + 1) % carouselContainer.children.length;
      goToSlide(slideIndex);
    }
  
    prevButton.addEventListener("click", function () {
      slideIndex = slideIndex > 0 ? slideIndex - 1 : carouselContainer.children.length - 1;
      goToSlide(slideIndex);
      resetTimer();
    });
  
    nextButton.addEventListener("click", function () {
      goToNextSlide();
      resetTimer();
    });
  
    function startTimer() {
      timer = setInterval(goToNextSlide, 3000); // Change slide every 3 seconds
    }
  
    function resetTimer() {
      clearInterval(timer);
      startTimer();
    }
  
    startTimer();
  });
  