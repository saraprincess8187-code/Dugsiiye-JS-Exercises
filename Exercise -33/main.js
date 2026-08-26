function changeTitle() {
    const title = document.querySelector("#title");
    title.textContent = "Welcome to the DOM!";
}

function changeParagraph() {
    const paragraph = document.querySelector(".myParagraph");
    paragraph.innerHTML = "This content has been <strong>updated</strong>.";
}