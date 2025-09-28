const fullName = document.getElementById("full-name")

const email = document.getElementById("email")

const orderNo = document.getElementById("order-no")

const productCode = document.getElementById("product-code")

const quantity = document.getElementById("quantity")

const complaintGroup = document.getElementsByName("complaint")

const complaintDescription = document.getElementById("complaint-description")

const desairedSolution = document.getElementsByName('solutions')

const solutionDescription = document.getElementById("solution-description")

const submitButton = document.getElementById("submit-btn")

const form = document.getElementById("form")


function validateForm(){
    // Regex checker 
    const emailRegex = /.*@.*\.com/gi
    const orderNoRegex = /2024\d{6}/gi
    const productCodeRegex = /[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d/gi

    //Get the input statues 

    let fullNameStatues = fullName.value? true:false
    let emailStatues = emailRegex.test(email.value) 
    let orderNoStatues = orderNoRegex.test(orderNo.value)
    let productCodeStatues = productCodeRegex.test(productCode.value)
    let quantityStatues = quantity.value>0? true:false

    let complaintGroupStatues = false;
    let complaintDescriptionStatues;
    let desairedSolutionStatues = false;
    let solutionDescriptionStatues;

    complaintGroup.forEach(value => {
        if(value.checked){
            complaintGroupStatues = true
        } 
    })

    if(complaintGroup[3].checked){
        if(complaintDescription.value.length >= 20){
            complaintDescriptionStatues = true
        }
        else {
            complaintDescriptionStatues = false
        }
    }
    else {
        complaintDescriptionStatues = true
    }

    desairedSolution.forEach(value => {
        if(value.checked){
            desairedSolutionStatues = true
        } 
    })

    if(desairedSolution[2].checked){
        if(solutionDescription.value.length >= 20){
            solutionDescriptionStatues = true
        }
        else {
            solutionDescriptionStatues = false
        }
    }
    else {
        solutionDescriptionStatues = true
    }


    return {
         "full-name":fullNameStatues,
         "email":emailStatues,
         "order-no":orderNoStatues,
         "product-code":productCodeStatues,
         "quantity":quantityStatues,
         "complaints-group":complaintGroupStatues,
         "complaint-description":complaintDescriptionStatues,
         "solutions-group":desairedSolutionStatues,
         "solution-description":solutionDescriptionStatues
    }


    
}

function isValid(validateForm){
    let result;
    for(let statues in validateForm){
        
        if(!validateForm[statues]){
            result = false;
            break
        } else {
            result = true
        }
    }

    return result
}
console.log(validateForm())
console.log(isValid(validateForm()))

function changeBorderColor(element,statues){
    if(validateForm()[statues]){
        element.style.borderColor = "green"
    } else {
        element.style.borderColor = "red"
    }
}

fullName.addEventListener("change",() => {
    changeBorderColor(fullName,"full-name")
})

email.addEventListener("change",() => {
    changeBorderColor(email,"email")
})
orderNo.addEventListener("change",() => {
    changeBorderColor(orderNo,"order-no")
})
productCode.addEventListener("change",() => {
    changeBorderColor(productCode,"product-code")
})
quantity.addEventListener("change",() => {
    changeBorderColor(quantity,"quantity")
})
document.getElementById("complaints-group").addEventListener("change",() => {
    changeBorderColor(document.getElementById("complaints-group"),"complaints-group")
})
complaintDescription.addEventListener("change",() => {
    changeBorderColor(complaintDescription,"complaint-description")
})
document.getElementById("solutions-group").addEventListener("change",() => {
    changeBorderColor(document.getElementById("solutions-group"),"solutions-group")
})
solutionDescription.addEventListener("change",() => {
    changeBorderColor(solutionDescription,"solution-description")
})


submitButton.addEventListener("submit", (e) => {
    if(isValid()){   
        e.preventDefault()
    }
})
form.addEventListener("submit", (e) => {
    if(isValid()){   
        e.preventDefault()
    }
})


