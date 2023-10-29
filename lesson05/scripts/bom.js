
const myimput = document.querySelector("#favchap")
const mybutton = document.querySelector("#mybutton")
const mylist = document.querySelector("#list")

const chapters = getChapterList() || [];
chapters.forEach(createItem)

function getChapterList(){
    const chapterList = localStorage.getItem('chapters')
    if (chapterList == null){
        return null
    }
    return JSON.parse(chapterList)

}
function updateLocalStorage(){
    localStoarage.setItem
}

function createItem(chapter) {
    let listitem = document
}

chapters.push(chapter);
updateLocalStorage()


mybutton.addEventListener("click", ()=>{

    if (myimput.value ==''){
        myimput.focus()
        return
    }
    let listitem = document.createElement("li")
    let deletebutton = document.createElement("button")

    listitem.textContent = myimput.value
    deletebutton.textContent = '❌'
    listitem.appendChild(deletebutton)
    mylist.appendChild(listitem)
    deletebutton.addEventListener('click', ()=>{
        listitem.remove()
    })
    myimput.focus()
    myimput.value =''
})