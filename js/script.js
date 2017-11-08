let voice;

function speak() {
    var text = document.getElementById('text').value;
    const msg = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();
    msg.voice = voices[1];
    window.speechSynthesis.speak(msg);
};

speechSynthesis.addEventListener('voiceschanged', speak);