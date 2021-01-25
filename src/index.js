console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){
    loadImages();
});



function loadImage() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => console.log(json))
        .then(results => {
            results.message.forEach(image => addImage(image))
        });
}

function addImage(newImgUrl) {
    let container = document.querySelector('#dog-image-container');
    let newImage = document.createElement('img');
    newImage.src = newImgUrl;
    container.appendChild(newImage);
}