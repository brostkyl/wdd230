/*"name":"Example Name",
            "address":"123 Main Street, Rexburg Id",
            "phone":"8888888888",
            "websiteURL":"https:/www.rexburg.org",
            "imageURL":"images/example.jpg",
            "membershipLevel":"gold"

const url = 'https://brostkyl.github.io/wdd230/chamber/members.json';
const cards = document.querySelector('#cards');

function displayProphets(prophets){
  prophets.forEach((prophet) => {
      let section = document.createElement("section")
      section.classList.add("card");
      let sectionHTML = `<h3>${name}</h3>
          <p>Address: ${address}</p>
          <p>Phone: ${phone}</p>
          <p>Website: ${websiteURL}</p>
          <img src="${member.imageurl}" alt="Picture of ${name}">
          <p>Membership Level: ${membershipLevel}</p>`
      section.innerHTML = sectionHTML;
      cards.appendChild(section);
  });
}

async function getProphetData(){
  const response = await fetch(url);
  if (response.ok){
      const data = await response.json();
      displayProphets(data.prophets);
  }
  else{
      console.error("NO WORKIE")
  }
}
getProphetData()*/


/*Briggs example */

var gridSelector = document.querySelector('#directory-grid')
var listSelector = document.querySelector('#directory-list')
var directoryData = document.querySelector('#directory-data')

gridSelector.addEventListener('click', ()=>{
    if (!gridSelector.classList.contains('active')){
        gridSelector.classList.add('active')
        listSelector.classList.remove('active')
        directoryData.classList.add('directory-cards')
        directoryData.classList.remove('directory-list')
    }
    
})

listSelector.addEventListener('click', ()=>{
    if (!listSelector.classList.contains('active')){
        listSelector.classList.add('active')
        gridSelector.classList.remove('active')
        directoryData.classList.add('directory-list')
        directoryData.classList.remove('directory-cards')
    }
})

const url ="members.json"

const displayMembers = (businesses) => {
    const cards = document.querySelector(".directory-cards")

    businesses.forEach((business) => {
        let card = document.createElement("section")
        card.innerHTML = `
        <img src="${business.imageURL}">
        <p>${business.name}</p>
        <p>${business.streetAddress}</p>
        <p>${business.cityStateZip}</p>
        <p><a class="card-button" href="${business.websiteURL}">Website</a></p>
        `;
        if (business.membershipLevel=='gold'){
            card.classList.add('gold-member')
        }
        cards.appendChild(card)
    })
}
async function getBusinessData() {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayMembers(data.members);
      
    } else {
      console.error("There was an error loading the data.");
      const cards = document.querySelector("directory-cards");
      cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
    }
  }
  
  getBusinessData();