// Home 섹션에 3초 이상 머물면 자동으로 About으로 스크롤
window.onload = function () {
    let timer = null;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Home이 보이면 3초 후 About으로 이동
                timer = setTimeout(() => {
                    document
                        .getElementById("about")
                        .scrollIntoView({ behavior: "smooth" });
                    }, 3000);
                } else {
                // Home에서 벗어나면 타이머 취소
                clearTimeout(timer);
            }
        });
    },
    {
        threshold: 1.0, // 100% 보일 때만 감지
    }
    );

    // 감시 대상: #home 섹션
    observer.observe(document.getElementById("home"));
};

window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("nav ul li a");
    let current = "";

    // 현재 화면에 보이는 section id 찾기
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    // 메뉴에서 active 클래스 토글
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
})

document.addEventListener("DOMContentLoaded", function () {
    var mySwiper = new Swiper(".swiper-container", {
        direction: "horizontal",
        loop: true,
        speed: 400,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});