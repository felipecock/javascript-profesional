import MediaPlayer from '../assets/MediaPlayer.js';
import AutoPlay from './plugins/Autoplay.js'

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video, plugins:
    [
        new AutoPlay()
    ]
});

const playButton = document.getElementById("playButton");
playButton.onclick = () => player.togglePlay();

const muteButton = document.getElementById("muteButton");
muteButton.onclick = () => player.toggleMute();
