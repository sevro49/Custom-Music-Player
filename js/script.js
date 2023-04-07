const wrapper = document.querySelector(".wrapper"),
    musicImg = wrapper.querySelector(".img-area img"),
    musicName = wrapper.querySelector(".song-details .name"),
    musicArtist = wrapper.querySelector(".song-details .artist"),
    mainAudio = wrapper.querySelector("#main-audio"),
    playPauseBtn = wrapper.querySelector(".play-pause"),
    prevBtn = wrapper.querySelector("#prev"),
    nextBtn = wrapper.querySelector("#next");

let musicIndex = 3;

window.addEventListener("load", () => {
    loadMusic(musicIndex); // calling load music function once window loaded
});

// Load music function
function loadMusic(indexNumb) {
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicImg.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
    mainAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
}

//play music function
function playMusic() {
    wrapper.classList.add("paused");
    playPauseBtn.querySelector("i").innerText = "pause";
    mainAudio.play();
}

//pause music function
function pauseMusic() {
    wrapper.classList.remove("paused");
    playPauseBtn.querySelector("i").innerText = "play_arrow";
    mainAudio.pause();
}

//next music function
function nextMusic() {
    // here we'll just increment of index by 1
    musicIndex++;
    // If musicIndex greater than array length, then musicIndex will be 1 and first song will play
    musicIndex > allMusic.length ? (musicIndex = 1) : (musicIndex = musicIndex);
    loadMusic(musicIndex);
    playMusic();
}

//prev music function
function prevMusic() {
    // here we'll just decrement of index by 1
    musicIndex--;
    // If musicIndex less than 1, then musicIndex will be array length and last song will play
    musicIndex < 1 ? (musicIndex = allMusic.length) : (musicIndex = musicIndex);
    loadMusic(musicIndex);
    playMusic();
}

// play or pause music button event
playPauseBtn.addEventListener("click", () => {
    const isMusicPaused = wrapper.classList.contains("paused");

    // If isMusicPaused is true then call pauseMusic, else call playMusic
    isMusicPaused ? pauseMusic() : playMusic();
});

//  next music btn event
nextBtn.addEventListener("click", () => {
    nextMusic(); // calling next music function
});
//  prev music btn event
prevBtn.addEventListener("click", () => {
    prevMusic(); // calling prev music function
});

