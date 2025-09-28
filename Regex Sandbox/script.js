const regexPattern = document.getElementById("pattern")
const stringToTest = document.getElementById("test-string")
const testButton = document.getElementById("test-btn")
const testResult = document.getElementById("result")

const caseInsensitiveFlag  = document.getElementById("i")
const globalFlag = document.getElementById("g")

function getFlags(){
    if (caseInsensitiveFlag.checked && globalFlag.checked){
        console.log("jalan")
        return "gi" || "ig"
    }
    else if(caseInsensitiveFlag.checked){
        return "i"
    }
    else if(globalFlag.checked){
        return "g"
    }
    else {
        return ""
    }
}

function regexTest(){
    let indexCounter = 0;
    let stringReplace

    

    let regex = new RegExp(regexPattern.value,getFlags())
    
    if(regex.test(stringToTest.innerText)){
        console.log(regex.lastIndex)
        const result = stringToTest.innerText.match(regex).map((value) => {
            return value
        })
        testResult.innerText = result.join(", ")

        stringReplace = stringToTest.innerText.replace(regex,() => {

            let spanResult = `<span class="highlight">${result[indexCounter]}</span>`
            indexCounter++
            return spanResult
        })

         stringToTest.innerHTML = stringReplace
    } else {
        testResult.innerText = "no match"
    }
    
   
}

testButton.addEventListener("click",regexTest)
console.log(caseInsensitiveFlag.checked)
console.log(globalFlag.checked)