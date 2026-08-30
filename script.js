const records = {

    "01": {
        number: "01",
        title: "Beginning",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/01beginning.m4a"
    },

    "02": {
        number: "02",
        title: "Untitled 01",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/02untitled1.m4a"
    },

    "03": {
        number: "03",
        title: "Sleepless",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/03sleepless.m4a"
    },

    "04": {
        number: "04",
        title: "Untitled 02",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/04untitled2.m4a"
    },

    "05": {
        number: "05",
        title: "Hug",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/05hug.m4a"
    },

    "06": {
        number: "06",
        title: "Question",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/06question.m4a"
    },

    "07": {
        number: "07",
        title: "Lonely",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/07lonely.m4a"
    },

    "08": {
        number: "08",
        title: "Sharing",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/08sharing.m4a"
    },

    "09": {
        number: "09",
        title: "Bad Day",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/09badday.m4a"
    },

    "10": {
        number: "10",
        title: "Guess",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/10guess.m4a"
    },

    "11": {
        number: "11",
        title: "Việt Nam",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/11vietnam.m4a"
    },

    "12": {
        number: "12",
        title: "Miss",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/12miss.m4a"
    },

    "13": {
        number: "13",
        title: "Untitled 03",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/13untitled3.m4a"
    },

    "14": {
        number: "14",
        title: "1812",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/14urspecialday.m4a"
    },

    "15": {
        number: "15",
        title: "Happy",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/15happy.m4a"
    },

    "16": {
        number: "16",
        title: "Believe",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/16believe.m4a"
    },

    "17": {
        number: "17",
        title: "Em",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/17em.m4a"
    },

    "18": {
        number: "18",
        title: "Remind",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/18remind.m4a"
    },

    "19": {
        number: "19",
        title: "Anh",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/19anh.m4a"
    },

    "20": {
        number: "20",
        title: "Unsaid",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/20unsaid.m4a"
    },

    "last": {
        number: "LAST",
        title: "Last",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/last.m4a"
    }

};


const params = new URLSearchParams(window.location.search);

const rawId = params.get("id");

let id = rawId;

if (rawId && rawId !== "last") {
    id = rawId.padStart(2, "0");
}

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