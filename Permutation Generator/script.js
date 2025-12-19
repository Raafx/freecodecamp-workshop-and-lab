let counter = 0

const permuteString = (str,prefix = "",arr = []) => {
    counter+=1
    
    console.log("str ",str)
    console.log("prefix",prefix)
    
    if(str.length === 0){
        arr.push(prefix)
        str = prefix
        prefix = ""
        
        return arr
    }

    
    
    for(const char of str){
        
        let newStr = str.split("")
        newStr.splice(str.indexOf(char),1)
        newStr = newStr.join("")
        let newPrefix = prefix + char
        
        permuteString(newStr,newPrefix,arr)
        
        
    }

    const setResult = new Set(arr) 
    const result = []
    setResult.forEach(str => {
        result.push(str)
    })
    
    
    return result

    
}



console.log(permuteString(""))
