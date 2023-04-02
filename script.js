//lets first get all the keys from the piano
const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider  input");
keysCheckBox = document.querySelector(".keys-checkbox input");
let allKeys = [];
audio = new Audio("tunes/a.wav");//by default, audio src is 'a' tune

const playTune = (key) =>{
    audio.src = `tunes/${key}.wav`;//passing audio src based on key pressed
    audio.play(); //playing audio
    console.log(allKeys)

    const clickedKey = document.querySelector(`[data-key="${key}"]`); //getting clicked key element
    clickedKey.classList.add("avtive");//adding active class to the active key
    setTimeout(() => { //removing active class after 150ms from the clicked key element
        clickedKey.classList.remove("avtive"); 
    }, 150);
}

pianoKeys.forEach(key =>{
    allKeys.push(key.dataset.key);//adding data-key value to the allkeys error
    // calling playtune function with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key));
}) 

//set the volume functionality
const handleVolume = (e) =>{
    audio.volume = e.target.value; // passing the range slider value as an audio volume
}

const showHideKeys = (e) =>{
    //toggling hideclass from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

//variable and function created at the same time
const pressedKey = (e) =>{
    //if pressed key is in the allKeys array, only call the playtune function
    if(allKeys.includes(e.key)) playTune(e.key)
}
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
keysCheckBox.addEventListener("click", showHideKeys)