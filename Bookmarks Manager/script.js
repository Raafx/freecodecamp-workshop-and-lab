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
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) 
    if(bookmarks){
        return bookmarks
    } else {
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
    
    let result = ""
    bookmark.forEach((obj) => {
        if(obj.category == categoryInput.value){
            result+= `<input type="radio" name="" id="${obj.name}" value="${obj.name}">
            <label for=""><a href="${obj.url}">${obj.name}</a></label>`


        }
    });

    if(result !== ""){
        categoryList.innerHTML = result

    } else {
        console.log("Jalan")
        categoryList.innerHTML = `<p>
        No Bookmarks Found
        </p>`
    }

    console.log(categoryList)
    
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

    Object.values(categoryList.children).forEach(element => {
        if(element.checked){
            bookmark.forEach((obj,index) => {
                if(obj.name == element.value){
                    bookmark.splice(index,1)
                }
            })
        }
    })

    localStorage.setItem("bookmarks",JSON.stringify(bookmark))

    displayListCategory()

})

console.log(getBookmarks())
