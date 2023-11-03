const synth = window.speechSynthesis;
const inputForm = document.querySelector("form");
const inputTxt = document.querySelector(".txt");
const voiceSelect = document.querySelector("select");
const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector(".pitch-value");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector(".rate-value");

let voices = [];

function populateVoiceList() {

    // hardCoding23 voice select to 'hindi'
    voiceSelect.selectedIndex = 8
    console.log(voiceSelect.selectedIndex);
    voices = synth.getVoices().map((item, index) => {
        // console.log('available voices ===>', item, index);
        return item;
    })

    // do you want to sort dropdown voices
    // voices.sort(function (a, b) {
    //     const aname = a.name.toUpperCase();
    //     const bname = b.name.toUpperCase();
    //     if (aname < bname) { return -1; } 
    //     else if (aname == bname) { return 0; } 
    //     else { return +1; }
    // });

    // console.log(voices);
    console.log(voiceSelect.selectedIndex);
    const selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
    console.log(selectedIndex);
    voiceSelect.innerHTML = "";

    for (let i = 0; i < voices.length; i++) {
        const option = document.createElement("option");
        option.textContent = `${voices[i].name} (${voices[i].lang})`;
        if (voices[i].default) {
            option.textContent += " -- DEFAULT";
        }

        option.setAttribute("data-lang", voices[i].lang);
        option.setAttribute("data-name", voices[i].name);
        voiceSelect.appendChild(option);
    }
    voiceSelect.selectedIndex = selectedIndex;
}

populateVoiceList();

if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

function speak() {
    if (synth.speaking) {
        console.error("maatladutunna choosko");
        return;
    }

    if (inputTxt.value !== "") {
        const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
        utterThis.onend = function (event) {
            console.log("utterance aapoye");
        };

        utterThis.onerror = function (event) {
            console.error("utterance lo edo error baabayi");
        };

        const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
        for (let i = 0; i < voices.length; i++) {
            if (voices[i].name === selectedOption) {
                utterThis.voice = voices[i];
                break;
            }
        }
        utterThis.pitch = pitch.value;
        utterThis.rate = rate.value;
        synth.speak(utterThis);
    }
}

inputForm.onsubmit = function (event) {
    event.preventDefault();
    speak();
    inputTxt.blur();
};

pitch.onchange = function () {
    pitchValue.textContent = pitch.value;
};

rate.onchange = function () {
    rateValue.textContent = rate.value;
};

voiceSelect.onchange = function () {
    speak();
};