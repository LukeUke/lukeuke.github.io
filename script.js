const textContainer = document.getElementById('content');
const header = document.getElementById('header-path');
const text = "Welcome to my website!";

let index = 0;

function changePath() {
    header.textContent = `"${window.location.pathname}"`;
}

function writeText() {
    textContainer.innerHTML = text.slice(0, index);
    index++;

    if (index > text.length) {
        index = 0;
    }
    else {
        setTimeout(writeText, 100);
    }

}

writeText();