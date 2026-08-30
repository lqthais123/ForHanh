const records = {
    "01": {
        title: "The Beginning",
        audio: "https://eynwufiwqeujayumyxkz.supabase.co/storage/v1/object/public/Voicecards/01beginning.m4a"
    }
};

const path = window.location.pathname;
const recordId = path.replace("/", "").replace("/", "");

const record = records[recordId];

if (record) {
    console.log("Record:", record.title);
    console.log("Audio:", record.audio);
}
