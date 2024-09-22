var audio = document.getElementById("audio");
var playPauseButton = document.getElementById("playPauseButton");
var audioFiles = [
        {
        src: "songs/pinnedpaste.mp3",
        artist: "James Bandz",
        song: "Pinned Paste"
        },
        {
        src: "songs/elfen.mp3",
        artist: "Hi-C (luke)",
        song: "elfen lied 222"
        },
        {
        src: "songs/shotgun.mp3",
        artist: "Sematary (tosen)",
        song: "Shotgun"
        },
        {
        src: "songs/blv.mp3",
        artist: "glokk40spaz(religion)",
        song: "BLV Anthem"
        },
        {
        src: "songs/manny.mp3",
        artist: "Nemzzz (Sen)",
        song: "8AM IN MANNY"
        },
        {
        src: "songs/twizzy.mp3",
        artist: "Yeat (leak)",
        song: "Twizzy Rich"
        },
    

        
];

var artist = document.getElementById("artist");
var songTitle = document.getElementById("songTitle");

var shuffledAudioFiles = shuffleArray(audioFiles);
var currentAudioIndex = 0;

audio.addEventListener("ended", function() {
    nextAudio();
});

function playMedia() {
    audio.play();
    document.getElementById("overlays").classList.add("fade-out");
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = "<img src='icons/pause.png'>";
    } else {
        audio.pause();
        playPauseButton.innerHTML = "<img src='icons/play.png'>";
    }
}

function nextAudio() {
    currentAudioIndex = (currentAudioIndex + 1) % shuffledAudioFiles.length;
    loadAudio(currentAudioIndex);
}

function previousAudio() {
    if (audio.currentTime <= 3) {
        currentAudioIndex = (currentAudioIndex - 1 + shuffledAudioFiles.length) % shuffledAudioFiles.length;
    } else {
        audio.currentTime = 0;
    }
    loadAudio(currentAudioIndex);
}

function loadAudio(index) {
    var audioFile = shuffledAudioFiles[index];
    audio.src = audioFile.src;
    artist.textContent = audioFile.artist;
    songTitle.textContent = audioFile.song;
    audio.play();
}

function shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

audio.src = shuffledAudioFiles[0].src;
audio.play();

loadAudio(0);