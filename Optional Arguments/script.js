
function addTogether(num1,num2) {
    console.log("num1: ",num1)
    console.log("num2: ",num2)
    arguments.length
    if(typeof(num1) === "number" && typeof(num2) === "number"){
        return num1+num2
    } else {
        if(typeof(num1) === "number" && arguments.length == 1)  {
            return function(num3){
                if(typeof(num3) === "number"){
                    return num1+num3
                }
                
            } 
        }
    }
    
}

console.log(addTogether(5,undefined))

console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"))
console.log(addTogether(5,[3]))
console.log(addTogether(5,2))
console.log(addTogether("5",2))
console.log(addTogether(5,"2"))
console.log(addTogether(5)(2))
console.log(addTogether(5)([2]))
console.log(addTogether(5))

const add5 = addTogether(5)
console.log(add5(5))