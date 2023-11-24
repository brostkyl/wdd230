const darkmode = document.querySelector('#dark-mode')
const bodyelt = document.querySelector("body")

darkmode.addEventListener('click', ()=>{
    if (darkmode.textContent == "DARK" ){
        document.documentElement.style.setProperty('--text-color', 'white')
        document.documentElement.style.setProperty('--background-color', 'black')
        document.documentElement.style.setProperty('--hover-background-color', '#1E6E34ff')
        document.documentElement.style.setProperty('--hover-color', '#F44E3Aff')
        document.documentElement.style.setProperty('--heading-color', '#3CB8CDff')
        document.documentElement.style.setProperty('--h1-color', '#3CB8CDff')
        bodyelt.style.backgroundColor = "black";
        darkmode.textContent = "LIGHT"
    }
else {
    document.documentElement.style.setProperty('--text-color', '#2D3442ff')
    document.documentElement.style.setProperty('--background-color', '#E8F5F9ff')
    document.documentElement.style.setProperty('--hover-background-color', '#F44E3Aff')
    document.documentElement.style.setProperty('--hover-color', '#2D3442ff')
    document.documentElement.style.setProperty('--heading-color', '#1E6E34ff')
    document.documentElement.style.setProperty('--h1-color', '#2D3442ff')
    bodyelt.style.backgroundColor = '#E8F5F9ff';
    darkmode.textContent = "DARK"
    
}

})



/*$cinnabar: #F44E3Aff;
$dark-spring-green: #1E6E34ff;
$azure-web: #E8F5F9ff;
$moonstone: #3CB8CDff;
$gunmetal: #2D3442ff;
$pumpkin: #F67A26ff;*/