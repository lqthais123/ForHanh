alert("ForHanh JavaScript is working!");
const records = {
    "01": {
        title: "The Beginning",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/01beginning.m4a"
    }
};

const path = window.location.pathname;

let recordId = path
    .replace(/^\/+|\/+$/g, "")
    .toLowerCase();

if (!recordId) {
    recordId = "01";
}

const record = records[recordId];

const numberElement = document.getElementById("record-number");
const titleElement = document.getElementById("record-title");
const audio = document.getElementById("audio");
const playButton = document.getElementById("play-button");
const currentTimeElement = document.getElementById("current-time");
const durationElement = document.getElementById("duration");
const progressBar = document.getElementById("progress-bar");
const progress = document.getElementById("progress");

function formatTime(seconds) {
    if (!Number.isFinite(seconds)) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const secondsLeft = Math.floor(seconds % 60);

    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(secondsLeft).padStart(2, "0")
    );
}

if (record) {
    numberElement.textContent = recordId;
    titleElement.textContent = record.title;

    audio.src = record.audio;
    audio.preload = "metadata";
}

audio.addEventListener("loadedmetadata", () => {
    durationElement.textContent =
        formatTime(audio.duration);
});

audio.addEventListener("canplay", () => {
    console.log("Audio loaded successfully.");
});

audio.addEventListener("error", () => {
    console.error(
        "Audio could not be loaded:",
        audio.error
    );

    playButton.textContent = "!";
});

playButton.addEventListener("click", async () => {

    if (audio.paused) {

        try {
            await audio.play();
            playButton.textContent = "Ⅱ";

        } catch (error) {
            console.error(
                "Playback failed:",
                error
            );

            playButton.textContent = "!";
        }

    } else {

        audio.pause();
        playButton.textContent = "▶";
    }
});

audio.addEventListener("timeupdate", () => {

    currentTimeElement.textContent =
        formatTime(audio.currentTime);

    if (audio.duration) {

        const percentage =
            (audio.currentTime / audio.duration) * 100;

        progress.style.width =
            percentage + "%";
    }
});

audio.addEventListener("ended", () => {

    playButton.textContent = "▶";

    progress.style.width = "0%";

    currentTimeElement.textContent =
        "00:00";
});

progressBar.addEventListener("click", (event) => {

    if (!audio.duration) {
        return;
    }

    const rect =
        progressBar.getBoundingClientRect();

    const position =
        (event.clientX - rect.left) / rect.width;

    audio.currentTime =
        position * audio.duration;
});