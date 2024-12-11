// Animation khi cuộn
window.addEventListener('scroll', function() {
    const landmarks = document.querySelectorAll('.landmark');
    landmarks.forEach(landmark => {
        const position = landmark.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            landmark.classList.add('visible');
        }
    });
});
