const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const addBookmarkBtn = document.getElementById("add-bookmark-button")
const closeFormBtn = document.getElementById("close-form-button")
const addBookmarkBtnForm = document.getElementById("add-bookmark-button-form")
const viewCategoryButton = document.getElementById("view-category-button")
const bookmarkListSection = document.getElementById("bookmark-list-section")
const closeListBtn = document.getElementById("close-list-button")
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button")
const categoryList = document.getElementById("category-list")
const categoryName = document.querySelectorAll(".category-name");

const categoryInput = document.getElementById("category-dropdown")
function getBookmarks(){
    try{
        const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) 
        console.log(bookmarks)
        if(Array.isArray(bookmarks) && bookmarks.every(obj => obj.name && obj.category && obj.url)){
    
            return bookmarks
        
        } else {
            return []
        }

    } catch(error) {
        return []
    }
}

function displayOrCloseForm(){
    mainSection.classList.toggle("hidden")
    formSection.classList.toggle("hidden")

} 

addBookmarkBtn.addEventListener("click", () => {
    displayOrCloseForm()
    categoryName[0].innerText = categoryInput.value
    console.log(categoryInput.value)
    console.log(categoryName)
})

closeFormBtn.addEventListener("click",() => {
    displayOrCloseForm()
})

addBookmarkBtnForm.addEventListener("click",() => {
    const nameInput = document.getElementById("name")
    const urlInput = document.getElementById("url")
    
    
    let bookmarkObject = {
        name:nameInput.value,
        category: categoryInput.value,
        url: urlInput.value,
    }
    const bookmark = getBookmarks()
    bookmark.push(bookmarkObject)

    localStorage.setItem("bookmarks",JSON.stringify(bookmark))

    nameInput.value = ""
    urlInput.value = ""

    displayOrCloseForm()
    
})

function displayOrHideCategory(){
    bookmarkListSection.classList.toggle("hidden")
    mainSection.classList.toggle("hidden")

}

function displayListCategory() {
    
    const bookmark = getBookmarks()
    console.log(bookmark)
    
    let result = ""
    
    bookmark.forEach((obj) => {
        if(obj.category == categoryInput.value){
            result+= `
            <input type="radio" name="${obj.category}" id="${obj.name}" value="${obj.name}">
            <label for="${obj.name}">
            <a href="${obj.url}">
            ${obj.name}
            </a>
            </label>
            `
        }
    });
    categoryList.innerHTML = ""
    if(result !== ""){
        console.log("jalan")
        categoryList.innerHTML = `<form action="">${result}</form>`
        
        

    } else {
        console.log("Jalan")
        categoryList.innerHTML = `<p>No Bookmarks Found</p>`
    }

    
    
    categoryName.value = categoryInput;
}

viewCategoryButton.addEventListener("click", () => {
    displayListCategory()
    displayOrHideCategory()
})

closeListBtn.addEventListener("click",() => {
    displayOrHideCategory()
})

deleteBookmarkBtn.addEventListener("click",() => {
    const bookmark = getBookmarks()
    const bookmarkElementList = categoryList.children[0].children
    Object.values(bookmarkElementList).forEach(element => {
        if(element.checked){
            bookmark.forEach((obj,index) => {
                if(obj.name == element.value && obj.category == element.name){
                    bookmark.splice(index,1)
                    console.log("if jalan")
                }
            })
        }
    })
    console.log()
    console.log(bookmark)
    localStorage.setItem("bookmarks",JSON.stringify(bookmark))
    console.log("Jalan lok?")
    displayListCategory()

})

console.log(getBookmarks())
