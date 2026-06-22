const slider =
    document.querySelector('.comparison-slider');

if (slider) {

    const beforeWrapper =
        document.querySelector('.before-wrapper');

    const sliderLine =
        document.querySelector('.slider-line');

    slider.addEventListener('input', () => {

        const value = slider.value;

        beforeWrapper.style.width =
            value + '%';

        sliderLine.style.left =
            value + '%';

    });

}

const faqItems =
    document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

    const button =
        item.querySelector('.faq-question');

    button.addEventListener('click', () => {

        item.classList.toggle('active');

    });

});