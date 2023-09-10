document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    let currentSlide = 0;

    // 다음 슬라이드 표시 함수
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    // 이전 슬라이드 표시 함수
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    // 특정 슬라이드로 이동하는 함수
    function goToSlide(n) {
        slides[currentSlide].style.opacity = 0;
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].style.opacity = 1;
    }

    // 다음 버튼 클릭 시 다음 슬라이드 표시
    nextButton.addEventListener("click", nextSlide);

    // 이전 버튼 클릭 시 이전 슬라이드 표시
    prevButton.addEventListener("click", prevSlide);

    // 초기 슬라이드 표시
    slides[currentSlide].style.opacity = 1;

    // 3초마다 자동으로 슬라이드 넘김
    setInterval(nextSlide, 3000);
});
