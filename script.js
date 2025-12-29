const videoInput = document.getElementById('videoInput');
const mainVideo = document.getElementById('mainVideo');
const videoTitle = document.getElementById('videoTitle');

videoInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const videoUrl = URL.createObjectURL(file);
        mainVideo.src = videoUrl;
        videoTitle.innerText = file.name;
        mainVideo.play();
    }
});