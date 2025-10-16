const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const addBookmarkBtn = document.getElementById("add-bookmark-button")
const closeFormBtn = document.getElementById("close-form-button")
const addBookmarkBtnForm = document.getElementById("add-bookmark-button-form")
const viewCategoryButton = document.getElementById("view-category-button")
const bookmarkListSection = document.getElementById("bookmark-list-section")

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

    localStorage.setItem("bookmark",bookmark)

    nameInput.value = ""
    urlInput.value = ""

    displayOrCloseForm()
    
})

function displayOrHideCategory(){
    bookmarkListSection.classList.toggle("hidden")
    mainSection.classList.toggle("hidden")

}

viewCategoryButton.addEventListener("click", () => {
    const categoryName = document.querySelectorAll(".category-name");
    
    const categoryList = document.getElementById("category-list")
    const bookmark = getBookmarks()
    if(bookmark.length > 0){
        let result = ""
        bookmark.forEach((obj) => {
            result+= ``
        });

    } else {
        console.log("Jalan")
        categoryList.innerHTML = `<p>
        No Bookmarks Found
        </p>`
    }
    
    categoryName.value = categoryInput;
    displayOrHideCategory()
})

console.log(getBookmarks())
