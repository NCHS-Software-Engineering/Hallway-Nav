function readAltText() {
    const img = document.querySelector('img');
    const utterance = new SpeechSynthesisUtterance(img.alt);
    speechSynthesis.speak(utterance);
  }
  