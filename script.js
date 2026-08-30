const records = {

    "01": {
        number: "01",
        title: "Beginning",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/01beginning.m4a"
    }

};


const params = new URLSearchParams(window.location.search);

const id = params.get("id");


const record = records[id];


if (record) {

    document.getElementById("record-number").textContent =
        record.number;

    document.getElementById("record-title").textContent =
        record.title;

    const audioPlayer =
        document.getElementById("audio-player");

    audioPlayer.src = record.audio;

    document.title =
        `${record.title} — For My Hanh`;

}