document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");
    const sections = document.querySelectorAll("section");

    function setActiveClass() {
        let fromTop = window.scrollY + window.innerHeight / 2;

        menuItems.forEach(link => {
            let section = document.querySelector(link.hash);

            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    window.addEventListener("scroll", setActiveClass);
    window.addEventListener("hashchange", setActiveClass);

    // Initial call to set the active class
    setActiveClass();

    // Typing animation
    const typingElement = document.getElementById("typing");
    const typingTexts = ["a Developer", "Passionate about Innovation", "a Quick Learner"];
    let typingIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < typingTexts[typingIndex].length) {
            typingElement.textContent += typingTexts[typingIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingElement.textContent = typingTexts[typingIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            typingIndex = (typingIndex + 1) % typingTexts.length;
            setTimeout(type, 200);
        }
    }

    type();
});