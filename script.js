const catImageElement = document.getElementById("cat-image");
document.addEventListener("click", () => {
  fetch("https://api.thecatapi.com/v1/images/search?size=full&mime_types=jpg,png")
    .then(response => response.json())
    .then(data => {
      catImageElement.src = data[0].url;
      catImageElement.style.display = "block";
    })
    .catch(error => console.error(error));
});