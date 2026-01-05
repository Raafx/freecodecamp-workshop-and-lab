const forumLatest = 'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Backend Development', className: 'backend' }
};

const avatarElement = document.getElementById("avatars")


async function fetchForumLatest(){
    try {

        const res = await fetch(forumLatest)
        const result = await res.json()
        return result
    } catch (error) {
        console.error("Error:", error)
    }

}



fetchForumLatest()
.then(result => {
    // result.topic_list.topics.forEach(element => {
        
    //     avatars(element.posters,result.users)        
    // });

    const posters = result.topic_list.topics[0].posters
    console.log(avatars(posters,result.users))
    avatarElement.innerHTML = avatars(posters,result.users)

    
})

const timeAgo = (timeStamp) => {
    
}

const viewCount = (numView) => {
    if(numView >= 1000){
        return `${Math.floor(numView/1000)}k`
    } else {
        return numView
    }
}

const forumCategory = (idCategory) => {
    const categoryObj = forumCategory[idCategory]
    const categoryName = categoryObj? categoryObj["category"]:"General"
    const categoryClass = categoryObj? categoryObj["className"]:"general"



    return `<a class="${categoryName} ${categoryClass}" href="${forumCategoryUrl}${categoryClass}${idCategory}">${categoryName}</a>`
}

const avatars = (postersArr,usersArr) => {

    let imgResult = ""
    postersArr.forEach((posterObj) => {
        const user_id = posterObj.user_id
        usersArr.forEach(userObj => {
            if(user_id === userObj.id){
                const image = `${avatarUrl}${userObj.avatar_template.replace("{size}","30")}`
                const name = userObj.name
                imgResult+=`<img src="${image}" alt="${name}">\n`
                
            }
        }) 
    })
    return imgResult
}
