const video = document.getElementById("videoplayer");
video.load();
video.autoplay = false;
video.loop = false;

function slidevideo() {
    let text = document.getElementById("volume");
    let slidebar = document.getElementById("slider");
    text.innerHTML = slidebar.value;
    video.volume = slidebar.value / 100;
}
document.getElementById("slider").addEventListener("change", slidevideo);



function playvideo() {
    video.play();
}
document.getElementById("play").addEventListener("click", playvideo);



function pausevideo() {
    video.pause();
}
document.getElementById("pause").addEventListener("click", pausevideo);



const slowerButton = document.getElementById("slower");
slowerButton.addEventListener("click", function () {
    if (video.playbackRate == 0.5) {
        alert("Video is at slowest speed!");
    }
    else {
        video.playbackRate /= 2;
    }
});


const fasterButton = document.getElementById("faster");
fasterButton.addEventListener("click", function () {
    if (video.playbackRate == 2) {
        alert("Video is at fastest speed!");
    }
    else {
        video.playbackRate *= 2;
    }
    })




const muteButton = document.getElementById("mute");
muteButton.addEventListener('click', function () {
    if (video.muted) {
        video.muted = false;
        muteButton.innerHTML = "Mute";
    } else {
        video.muted = true;
        muteButton.innerHTML = "UnMute";
    }
});

const skipButton = document.getElementById("skip");
skipButton.addEventListener("click", function () {
    console.log("current time", video.currentTime);
    if (video.currentTime <= (video.duration - 15)) {
        video.currentTime += 15;
    } else {
        video.currentTime = 0;
    }
    console.log("after skip time", video.currentTime);
});

const volumeSet = document.getElementById("volume");
volumeSet.innerHTML = slider.value;
slider.oninput = function () {

    volumeSet.innerHTML = this.value;
    video.volume = this.value / 100;
    if (video.volume === 0) {
        video.muted = true;
        muteButton.textContent = 'Unmute';
    } else {
        video.muted = false;
        muteButton.textContent = 'Mute';
    }
};
