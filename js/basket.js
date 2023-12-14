document.addEventListener('DOMContentLoaded', function() {
    const basketButton = document.querySelector('.header-button__basket');

    if (basketButton) {
        basketButton.addEventListener('click', function() {
            window.location.href = 'basket.html';
        });
    }
});
