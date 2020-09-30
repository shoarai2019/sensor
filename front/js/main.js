function playVideo() {
    const video = document.getElementById('video');
    video.load();
    video.play();
    video.currentTime = 0;
}

document.addEventListener('DOMContentLoaded', () => {
    document.oncontextmenu = () => {return false}
    setTimeout(() => {
        menu.style.opacity = '1';
    }, 300)

    playVideo()

}, false)
