// Get DOM elements
const video = document.querySelector('.player__video viewer');
const progress = document.querySelector('.progress__filled');
const playButton = document.querySelector('player__button toggle');
const volumeSlider = document.querySelector('.player__slider[name="volume"]');
const playbackSpeedSlider = document.querySelector('.player__slider[name="playbackRate"]');
const skipButtons = document.querySelectorAll('[data-skip]');
const skip10sButton = document.querySelector('.player__button[name="10"]');
const skip25sButton = document.querySelector('.player__button[name="25"]');

// Play or pause video
function togglePlay() {
  if (video.paused) {
    video.play();
    playButton.textContent = '❚ ❚';
  } else {
    video.pause();
    playButton.textContent = '►';
  }
}

// Update progress bar
function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progress.style.flexBasis = `${percent}%`;
}

// Update volume
function updateVolume() {
  video.volume = volumeSlider.value;
}

// Update playback speed
function updatePlaybackSpeed() {
  video.playbackRate = playbackSpeedSlider.value;
}

// Skip forward or backward by specified seconds
function skip(seconds) {
  video.currentTime += seconds;
}

// Add event listeners
video.addEventListener('click', togglePlay);
playButton.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
volumeSlider.addEventListener('input', updateVolume);
playbackSpeedSlider.addEventListener('input', updatePlaybackSpeed);
skip10sButton.addEventListener('click', () => skip(-10));
skip25sButton.addEventListener('click', () => skip(25));
skipButtons.forEach(button => {
  button.addEventListener('click', () => skip(parseFloat(button.dataset.skip)));
});
