const tetxInputElement = document.getElementById("text-input")

const charCountElement = document.getElementById("char-count")

let counter = 0;

function wordCounter(){
    
    
    counter = tetxInputElement.value.length;
    console.log(counter)
    if(counter >= 50){
        charCountElement.style.color = "red"
        tetxInputElement.value = tetxInputElement.value.slice(0,50)
        if(counter > 50){
            counter = 50
        }
        
        console.log(tetxInputElement.value)
    } 

    
    else {
        charCountElement.style.color = "black"
        
    }   
    
    charCountElement.innerText = `Character Count: ${counter}/50`
    
   


}


tetxInputElement.addEventListener("input", wordCounter)

