const generateBtn = document.getElementById("generate-btn") 
const sortBtn = document.getElementById("sort-btn") 
const startingArray = document.getElementById("starting-array") 
const arrayContainer = document.getElementById("array-container")

let globalArray;

function generateElement(){
    return Math.floor(Math.random()*100)
}

function generateArray(){
    const result = []
    for(let x = 0; x<5; x++){
        result.push(generateElement())
    }

    return result
    
} 

function generateContainer(){
    const containerElement = document.createElement("div")

    containerElement.setAttribute("class","arr-sort")

    return containerElement
} 

function fillArrContainer(element,arr){

    arr.forEach((num) => {
        
        const spanElement = document.createElement("span")
        spanElement.textContent = num;
        
        
        element.appendChild(spanElement);

    })

    return element
    
} 

function isOrdered(num1,num2){
    if(num1 > num2){
        return true
    } else {
        return false
    }
}

function swapElements(arr){
    
    arr.forEach((num,index) => {
        
        
        if(isOrdered(arr[index],arr[index+1])){
            
            [arr[index],arr[index+1]] = [arr[index+1],arr[index]] 

            const container = generateContainer()
        
            const arrElement = fillArrContainer(container, globalArray)
            console.log(arrElement)
            highlightCurrentEls(arrElement,index)
            arrayContainer.appendChild(arrElement)


        }
    })

    return arr
    

    
}

function highlightCurrentEls(element,index){
    
    element.childNodes[index].style.border = "1px solid red"
    element.childNodes[index+1].style.border = "1px solid red"
}

generateBtn.addEventListener("click", () => {

    document.querySelectorAll(".arr-sort").forEach((node) => {
        
        arrayContainer.removeChild(node)
    })

    

    
    startingArray.innerText = ""
    
    let arrayGenerated = generateArray()
    globalArray = arrayGenerated
    
    fillArrContainer(startingArray,arrayGenerated)
})

sortBtn.addEventListener("click", () => {
    
    
    globalArray.forEach(() => {
        swapElements(globalArray)
        
        
    })

})

