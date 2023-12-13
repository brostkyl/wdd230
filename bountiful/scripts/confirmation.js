let url = new URL(window.location);
let params  = url.searchParams;

for (const p of params) {
    console.log(p);
}

document.querySelector('#yourname').textContent = params.get("name");
document.querySelector('#youremail').textContent = params.get("email");
document.querySelector('#yournumber').textContent = params.get("number");
document.querySelector('#yourfruit1').textContent = params.get("fruit1");
document.querySelector('#yourfruit2').textContent = params.get("fruit2");
document.querySelector('#yourfruit3').textContent = params.get("fruit3");
document.querySelector('#yourtimestamp').textContent = params.get("timestamp");