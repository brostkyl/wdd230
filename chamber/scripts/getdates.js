let today1 = new Date();
document.querySelector("#currentyear").textContent=today1.getFullYear()
document.querySelector("#lastmodified").textContent=document.lastModified
//Hamburger Menu code. 
const hidebutton = document.querySelector(".menu-hide");
const showbutton = document.querySelector(".menu-show");
const navmenu = document.querySelector("#nav-menu"); 

hidebutton.addEventListener('click',() => {
    hidebutton.classList.toggle('showing');
    showbutton.classList.toggle('showing');
    navmenu.classList.toggle('showing');
});

showbutton.addEventListener('click',() => {
    hidebutton.classList.toggle('showing');
    showbutton.classList.toggle('showing');
    navmenu.classList.toggle('showing');        
});