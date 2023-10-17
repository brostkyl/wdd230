const darkmode = document.querySelector('#dark-mode')
const bodyelt = document.querySelector("body")

darkmode.addEventListener('click', ()=>{
    if (darkmode.textContent == "DARK" ){
        document.documentElement.style.setProperty('--text-color', '#')
        document.documentElement.style.setProperty('--background-color', '#')
        document.documentElement.style.setProperty('--hover-background-color', '#')
        document.documentElement.style.setProperty('--hover-color', '#')
        bodyelt.style.backgroundColor = "black";
        darkmode.textContent = "LIGHT"
    }
else {
    document.documentElement.style.setProperty('--text-color', '#')
    document.documentElement.style.setProperty('--background-color', '#')
    document.documentElement.style.setProperty('--hover-background-color', '#')
    document.documentElement.style.setProperty('--hover-color', '#')
    bodyelt.style.backgroundColor = '#';
    darkmode.textContent = "DARK"
    
}

})