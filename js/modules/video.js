const videoContainer = document.querySelector('.video__block');
const videoControls = document.querySelector('.video__control');
const videoSource = document.querySelector('.video__source');

videoContainer.addEventListener('click', function() {
    if (videoSource.paused) {
        videoSource.play();
        videoContainer.classList.add('video-is-playing');
    }
    else {
            videoSource.pause();
            videoContainer.classList.remove('video-is-playing')
            videoSource.load()
    }
})