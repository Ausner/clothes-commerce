const images = document.querySelectorAll('img');

images.forEach((img) => {
    img.addEventListener('click', () => {
        const link = img.getAttribute('data-link');
        if (link) {
            window.location.href = link;
        }
    });
});
