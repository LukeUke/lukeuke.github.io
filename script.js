const textContainer = document.getElementById('content');
const header = document.getElementById('header-path');
const text = "Hi!";

let index = 0;

function changePath() {
    header.textContent = `"${window.location.pathname.slice(0, window.location.pathname.length)}"`;
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

const openStack = (id) => {
    let stack = document.getElementById(`project-stack-${id}`)

    if (stack.attributes.getNamedItem('closed').value === "true") {
        stack.attributes.getNamedItem('closed').value = "false"
        stack.style.display = 'flex';
    }
    else {
        stack.attributes.getNamedItem('closed').value = "true"
        stack.style.display = 'none';
    }
}

writeText();