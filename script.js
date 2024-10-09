document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.main_promotion .slider div');
    const totalSlides = slides.length;
    const dots = document.querySelectorAll('.dot'); // Lấy tất cả các chấm

    // Cập nhật vị trí slider
    function updateSlidePosition() {
        const offset = -currentIndex * 100 / totalSlides;
        document.querySelector('.main_promotion .slider').style.transform = `translateX(${offset}%)`;

        // Cập nhật chấm
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Chuyển đến slide tiếp theo
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    }

    // Thêm sự kiện cho các chấm để điều khiển slide
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlidePosition();
        });
    });

    // Chuyển slide tự động mỗi 3 giây
    setInterval(nextSlide, 3000);

    // Đảm bảo các chấm được cập nhật lần đầu tiên
    updateSlidePosition();
});
