const closeButton = document.getElementById("close-btn")

const images = document.getElementsByClassName("gallery-item");

const lightBoxElement = document.querySelector(".lightbox")

const lightBoxImgElement = document.getElementById("lightbox-image")




function displayLightbox(element){
    
    closeButton.addEventListener("click", () => {
        lightBoxElement.style.display = "none"
    })
    lightBoxElement.addEventListener("click", () => {
        lightBoxElement.style.display = "none"
    })
    lightBoxImgElement.addEventListener("click", (element) => {
        element.stopPropagation();
    })

    


    
    lightBoxElement.style.display = "flex"

    const imgSrc = element.src.replace("-thumbnail","")

    
    lightBoxImgElement.src = imgSrc
}

Object.values(images).forEach((element) => {
    element.addEventListener("click",() => displayLightbox(element))
})