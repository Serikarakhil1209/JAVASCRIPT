function changeImage() {
    let img = document.getElementById("myImage");
    img.src = "https://via.placeholder.com/200";
    img.alt = "New Placeholder Image";
}

document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("text").innerText = "Text has been changed!";
});

document.getElementById("toggleClassBtn").addEventListener("click", function() {
    document.getElementById("classText").classList.toggle("highlight");
});

document.getElementById("toggleVisibilityBtn").addEventListener("click", function() {
    let div = document.getElementById("toggleDiv");
    div.classList.toggle("hidden");
});
