const generateBtn = document.getElementById("generate-btn") 
const sortBtn = document.getElementById("sort-btn") 
const startingArray = document.getElementById("starting-array") 
const arrayContainer = document.getElementById("array-container")

let globalArray;

function generateElement(){
    return Math.floor(Math.random()*100)+1
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
    return num1 <= num2
}

function swapElements(arr,index){
    
        if(!isOrdered(arr[index],arr[index+1])){
            
            [arr[index],arr[index+1]] = [arr[index+1],arr[index]] 

            
            return true
        }
}

function highlightCurrentEls(element,index){
    
    element.childNodes[index].style.border = "2px dashed red"
    element.childNodes[index+1].style.border = "2px dashed red"
}

generateBtn.addEventListener("click", () => {

    document.querySelectorAll(".arr-sort").forEach((node) => {
        
        arrayContainer.removeChild(node)
    })

    

    
    startingArray.innerText = ""
    
    let arrayGenerated = generateArray()
    globalArray = arrayGenerated
    
    fillArrContainer(startingArray,globalArray)
})

sortBtn.addEventListener("click", () => {
    
    for(let i = 0; i < globalArray.length; i++){
        let isSorted

        for(let x = 0; x < (globalArray.length)-1; x++) {
            isSorted = isOrdered(globalArray[x],globalArray[x+1])
            
            if(!isSorted){
                break
            }
            
        }

        console.log(isSorted)
        if(isSorted){
            globalArray.forEach((num,index) => {
            if(index < 4){
                swapElements(globalArray,index)
                
                const container = generateContainer()
                const arrElement = fillArrContainer(container,globalArray)
                arrayContainer.appendChild(arrElement)
    
            }
 
        })
            break
        }
        globalArray.forEach((num,index) => {
            if(index < 4){
                swapElements(globalArray,index)
                
                const container = generateContainer()
                const arrElement = fillArrContainer(container,globalArray)
                arrayContainer.appendChild(arrElement)
    
            }
 
        })
        
        
    }

    // arrayContainer.children.forEach((element,index) => {
    //     highlightCurrentEls(element,index)
    // })

    let index = 0
    Object.values(arrayContainer.children).forEach((element) => {

        highlightCurrentEls(element,index)
        if(element.childNodes[index+2] !== undefined){
            
            index++
        } else {
            index = 0
        }
    })

})



