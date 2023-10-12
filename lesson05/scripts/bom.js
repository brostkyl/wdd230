
const myimput = document.querySelector("#favchap")
const mybutton = document.querySelector("#mybutton")
const mylist = document.querySelector("#list")

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