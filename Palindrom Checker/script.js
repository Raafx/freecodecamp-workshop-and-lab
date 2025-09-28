const textInput = document.getElementById("text-input");

const checkBtn = document.getElementById("check-btn");

const result = document.getElementById("result");

const palindromeRegex = /[\W_]/gi





function isPalindrom(userInput){
    if(userInput === ""){
        alert("Please input a value")
    } 
    else {
        let backward = []
        let removeSpecialCharacter = userInput.replace(palindromeRegex,"")
        
        for(let x of removeSpecialCharacter.split("")){
            backward.unshift(x)
            
        }
        backward = backward.join("")
        console.log(backward)
        console.log(removeSpecialCharacter)

        if(backward.toLowerCase() === removeSpecialCharacter.toLowerCase()){
            return true
        } else { 
            return false
        }
        
    }
}

function displayResult(userInput,palindromChecker){
    if(palindromChecker){
        result.innerHTML = `<span id="word">${userInput}</span> is a palindrome`
    } else {
        result.innerHTML = `<span id="word">${userInput}</span> is not a palindrome`
    }
}

checkBtn.addEventListener("click",() => {
    let isPalindromChecker = isPalindrom(textInput.value)
    displayResult(textInput.value,isPalindromChecker)


})
