async function getFile() {

    const pickerOpts = {
        types: [
            { description: "Images23", accept: { "image/*": [".png", ".gif", ".jpeg", ".jpg"] }},
            { description: "video23", accept: { "video/*": [".mp4", ".mkv"] }}
        ],
        excludeAcceptAllOption: true,
        multiple: false,
    };

    // const [fileHandle] = await window.showOpenFilePicker(pickerOpts);
    const [fileHandle] = await window.showOpenFilePicker();             // dont use pickerOpts for now
    const file = await fileHandle.getFile();

    // if text file
    console.log(await file.text());

    // if image file
    document.getElementById('image23').src = URL.createObjectURL(file);
    // return file;
}