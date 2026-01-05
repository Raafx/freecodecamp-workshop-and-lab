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
const postContainer = document.getElementById("posts-container")


async function fetchData(){
    try {

        const res = await fetch(forumLatest)
        const result = await res.json()
        showLatestPosts(result)   
        
    } catch (error) {
        console.log("Error:", error)
    }

}

fetchData()


const timeAgo = (timeStamp) => {
    const timeNow = new Date()
  
 

    const timeDifference = timeNow-new Date(timeStamp)
    
    if(timeDifference < 3600000){
        return `${Math.floor(timeDifference/60000)}m Ago`
    }
    else if(timeDifference < 86400000){
        return `${Math.floor(timeDifference/3600000)}h Ago`
    } else {
        return `${Math.floor(timeDifference/86400000)}d Ago`
    }

}

const viewCount = (numView) => {
    if(numView >= 1000){
        return `${Math.floor(numView/1000)}k`
    } else {
        return numView
    }
}

const forumCategory = (idCategory) => {
    const categoryObj = allCategories[idCategory]
    const categoryName = categoryObj? categoryObj["category"]:"General"
    const categoryClass = categoryObj? categoryObj["className"]:"general"



    return `<a class="category ${categoryClass}" href="${forumCategoryUrl}${categoryClass}/${idCategory}">${categoryName}</a>`
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

const showLatestPosts = (obj) => {
    const usersArray = obj.users
    const topicListObj = obj.topic_list
    const topicsArray = topicListObj.topics
    let result = ""
    topicsArray.forEach((topic) => {

        const slug = topic.slug;
        const id = topic.id;
        const title = topic.title;
        const categoryId = topic.category_id;
        const posters = topic.posters;
        const replies = topic.posts_count - 1;
        const numberView = topic.views;
        const timeStamp = topic.last_posted_at;
        
        
        
        result+=`<tr>
            <td>
                <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a><br>
                ${forumCategory(categoryId)}
            </td>
            <td>
                <div class="avatar-container">
                    ${avatars(posters,usersArray)}
                </div>
            </td>
            <td>
                ${replies}
            </td>
            <td>
                ${viewCount(numberView)}
            </td>
            <td>
                ${timeAgo(timeStamp)}
            </td>
        </tr>`
    })
    postContainer.innerHTML = result
    
}

