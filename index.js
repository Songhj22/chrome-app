const userNumber = document.querySelector("#inputNumber");
const guessNumber = document.querySelector("#outputNumber input:first-child");
const playButton = document.querySelector("#outputNumber input:last-child");
const resultChose = document.querySelector("#result p:first-child");
const resultWinmer = document.querySelector("#result p:last-child");

function onPlayBtnClick(event) {
    event.preventDefault();
    const maxNumber = parseInt(userNumber.value);
    const userGuessNumber = parseInt(guessNumber.value);
    const randomNumber = Math.floor(Math.random() * (maxNumber + 1));

    if (userNumber.value === "" && guessNumber.value === "") {
        alert("Please write a number");
    } else if (maxNumber < 0) {
        alert("Please write integer");
    } else if (maxNumber < userGuessNumber) {
        alert(`Please write less than ${maxNumber}`);
    } else if (randomNumber === userGuessNumber) {
        resultChose.innerText = `You chose: ${userGuessNumber}, the Machine chose: ${randomNumber}.`;
        resultWinmer.innerText = `You Win!`;
    } else {
        resultChose.innerText = `You chose: ${userGuessNumber}, the Machine chose: ${randomNumber}.`;
        resultWinmer.innerText = `You lost!`;
    }
}

playButton.addEventListener("click", onPlayBtnClick);
