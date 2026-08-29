function changeImage() {

    let image = document.getElementById("myImage");

    let newImage = prompt("Enter new image URL:");
    image.src = newImage;

    let borderColor = prompt("Enter border color:");
    image.style.border = "5px solid " + borderColor;

    let width = prompt("Enter image width:");
    image.setAttribute("width", width);

    let height = prompt("Enter image height:");
    image.setAttribute("height", height);

    let radius = prompt("Enter border radius:");
    image.style.borderRadius = radius + "px";
}