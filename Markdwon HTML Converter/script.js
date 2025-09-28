const markdownInput = document.getElementById("markdown-input")

let markdownInputValue;

const htmlOutput = document.getElementById("html-output")

const preview = document.getElementById("preview")


const headingRegex = /^#{1,3}\s/gmi
const boldRegex = /(\*{2}.*\*{2})|__.*__/gmi

const italicRegex = /(\*.*\*)|(_.*_)/gmi

const imgRegex = /\!\[.*\]\(.*\)/gmi

const valueRegexFilter = /(?<=\[).*(?=\])/gmi
const linkRegexFilter = /(?<=\().*(?=\))/gmi

const linkRegex = /^\[.*\]\(.*\)$/gmi

const quotesRegex = /^(>\s)/gmi

function convertMarkdown(markdownInputValue){
     

    if(markdownInputValue === undefined){
        markdownInputValue = markdownInput.value
    }

    let inputValueWithoutRegex
    if(headingRegex.test(markdownInputValue)){
        
        let hastagLength
        return markdownInputValue.match(headingRegex).map((value,index) => {
            
            inputValueWithoutRegex = markdownInputValue.replace(headingRegex,"").split("\n")
            
            inputValueWithoutRegex = convertMarkdown(inputValueWithoutRegex[index])

            hastagLength = value.length-1
            
            return `<h${hastagLength}>${inputValueWithoutRegex}</h${hastagLength}>`
        }).join("")
        
    } 
    else if(quotesRegex.test(markdownInputValue)){
        
        return markdownInputValue.match(quotesRegex).map((value,index) => {
            inputValueWithoutRegex = markdownInputValue.replace(quotesRegex,"").split("\n")
            inputValueWithoutRegex = convertMarkdown(inputValueWithoutRegex[index])
            
            return `<blockquote>${inputValueWithoutRegex}</blockquote>`
        }).join("")
        
        //`<blockquote>${inputValueWithoutRegex}</blockquote>`
    }
    else if(boldRegex.test(markdownInputValue)) {
        return markdownInputValue.match(boldRegex).map((value) => {
            
            inputValueWithoutRegex = value.replace(boldRegex,value.slice(2,-2))
            inputValueWithoutRegex = convertMarkdown(inputValueWithoutRegex)
            return `${markdownInputValue.replace(italicRegex,"")}<strong>${inputValueWithoutRegex}</strong>`
        }).join("")

    } 
    else if(italicRegex.test(markdownInputValue)){
        
        return markdownInputValue.match(italicRegex).map((value) => {
            
            inputValueWithoutRegex = value.replace(italicRegex,value.slice(1,-1))
            inputValueWithoutRegex = convertMarkdown(inputValueWithoutRegex)
            return `${markdownInputValue.replace(italicRegex,"")}<em>${inputValueWithoutRegex}</em>`
        }).join("")
 
    }

    else if(imgRegex.test(markdownInputValue)){

        
        return markdownInputValue.match(imgRegex).map((e,index) => {
            let link = markdownInputValue.match(linkRegexFilter)
            let value = markdownInputValue.match(valueRegexFilter)

            return `<img alt="${value[index]}" src="${link[index]}">\n`
        }).join("")
        
    }

    else if(linkRegex.test(markdownInputValue)){
        
        return markdownInputValue.match(linkRegex).map((e,index) => {
            let link = markdownInputValue.match(linkRegexFilter)
            let value = markdownInputValue.match(valueRegexFilter)

            return `<a href="${link[index]}">${value[index]}</a>`
        }).join("")
    } 
    
    else {
        return markdownInputValue
    }
}

function displayResult(){
    console.log(convertMarkdown(markdownInputValue))
    preview.innerHTML = convertMarkdown(markdownInputValue)
    htmlOutput.innerText = convertMarkdown(markdownInputValue)
    
}

markdownInput.addEventListener("input", displayResult)