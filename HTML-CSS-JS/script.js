// Initialize variables
let currentSongIndex = 0;
const audio = new Audio('songs/1.mp3');
const songs = [
    { name: "Song 1 - Artist 1", file: "songs/1.mp3", cover: "covers/1.jpg" },
    { name: "Song 2 - Artist 2", file: "songs/2.mp3", cover: "covers/2.jpg" },
    { name: "Song 3 - Artist 3", file: "songs/3.mp3", cover: "covers/3.jpg" },
];

const songList = document.getElementById('songList');
const coverArt = document.getElementById('coverArt');
const currentSongName = document.getElementById('currentSongName');
const progressBar = document.getElementById('progressBar');
const playPauseButton = document.getElementById('playPause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Populate the song list dynamically
songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = song.name;
    li.dataset.index = index;

    li.addEventListener('click', () => {
        playSong(index);
    });

    songList.appendChild(li);
});

// Play or pause the audio
playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        audio.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
    }
});

// Play the previous song
prevButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentSongIndex);
});

// Play the next song
nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
});

// Update progress bar
audio.addEventListener('timeupdate', () => {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
});

// Seek song
progressBar.addEventListener('input', () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

// Play a specific song
function playSong(index) {
    currentSongIndex = index;
    const song = songs[index];
    audio.src = song.file;
    coverArt.src = song.cover;
    currentSongName.textContent = song.name;
    audio.play();
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
}
