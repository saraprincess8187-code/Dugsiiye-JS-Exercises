function addItem() {
    const list = document.querySelector("#list");
    const newItem = document.createElement("li");
    newItem.textContent = "LAST NUM";
    list.appendChild(newItem);
}

function removeItem() {
    const list = document.querySelector("#list");
    if (list.lastChild) {
                list.removeChild(list.lastChild);
    }
}