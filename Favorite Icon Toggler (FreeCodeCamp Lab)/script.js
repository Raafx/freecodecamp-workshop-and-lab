const favoriteButton = document.getElementsByClassName("favorite-icon");

for(let button of favoriteButton){
    
    button.addEventListener('click',() => {
        console.log(button.className)
        button.classList.toggle("filled")
        if(button.className  === "favorite-icon filled"){
            button.innerHTML = "&#10084;"
        } else {
            button.innerHTML = "&#9825;"
        }
        
    })
}
