const records = {

    "K7x92m": {
        number: "01",
        title: "Beginning",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/01beginning.m4a"
    },

    "P4q81z": {
        number: "02",
        title: "Untitled 01",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/02untitled1.m4a"
    },

    "M6v34r": {
        number: "03",
        title: "Sleepless",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/03sleepless.m4a"
    },

    "T9n52k": {
        number: "04",
        title: "Untitled 02",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/04untitled2.m4a"
    },

    "B3h78q": {
        number: "05",
        title: "Hug",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/05hug.m4a"
    },

    "R8w41p": {
        number: "06",
        title: "Question",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/06question.m4a"
    },

    "L5c93x": {
        number: "07",
        title: "Lonely",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/07lonely.m4a"
    },

    "N2j67s": {
        number: "08",
        title: "Sharing",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/08sharing.m4a"
    },

    "F7d25m": {
        number: "09",
        title: "Bad Day",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/09badday.m4a"
    },

    "Q4k86v": {
        number: "10",
        title: "Guess",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/10guess.m4a"
    },

    "H9p31t": {
        number: "11",
        title: "Việt Nam",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/11vietnam.m4a"
    },

    "C6r54y": {
        number: "12",
        title: "Miss",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/12miss.m4a"
    },

    "V8m27n": {
        number: "13",
        title: "Untitled 03",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/13untitled3.m4a"
    },

    "J3x95b": {
        number: "14",
        title: "1812",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/14urspecialday.m4a"
    },

    "S7q42d": {
        number: "15",
        title: "Happy",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/15happy.m4a"
    },

    "W5e68k": {
        number: "16",
        title: "Believe",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/16believe.m4a"
    },

    "A2n73f": {
        number: "17",
        title: "Em",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/17em.m4a"
    },

    "D9u46h": {
        number: "18",
        title: "Remind",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/18remind.m4a"
    },

    "G4t82j": {
        number: "19",
        title: "Anh",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/19anh.m4a"
    },

    "Y6b35p": {
        number: "20",
        title: "Unsaid",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/20unsaid.m4a"
    },

    "Z8s17w": {
        number: "LAST",
        title: "Last",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/last.m4a"
    }

};


const params = new URLSearchParams(window.location.search);

const token = params.get("t");

const record = records[token];


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