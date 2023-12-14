// Order Date
const fulldate = new Date();
const monthnow = fulldate.getMonth();
const daynow = fulldate.getDate();
const yearnow = fulldate.getFullYear();

const months = {
  1: ["January"],
  2: ["February"],
  3: ["March"],
  4: ["April"],
  5: ["May"],
  6: ["June"],
  7: ["July"],
  8: ["August"],
  9: ["September"],
  10: ["October"],
  11: ["November"],
  12: ["December"],
};
const monthname = months[monthnow];

const completedate = `${monthname} ${daynow}, ${yearnow}`;

const date = document.querySelector("#orderdate");
date.textContent = completedate;

// Customer order info
let url = new URL(window.location);
let params = url.searchParams;

const firstname = params.get("firstname");
const email = params.get("email");
const phone = params.get("phone");
const fruit1 = params.get("fruit1");
const fruit2 = params.get("fruit2");
const fruit3 = params.get("fruit3");
let instructions = "";

const yourname = document.querySelector("#yourname");
const youremail = document.querySelector("#youremail");
const yourphone = document.querySelector("#yourphone");
const yourfruit1 = document.querySelectorAll(".yourfruit1");
const yourfruit2 = document.querySelectorAll(".yourfruit2");
const yourfruit3 = document.querySelectorAll(".yourfruit3");

const yourinstructions = document.querySelector("#yourinstructions");

yourname.textContent = firstname;
youremail.textContent = email;
yourphone.textContent = phone;

yourfruit1.forEach((element) => {
  element.textContent = fruit1;
});
yourfruit2.forEach((element) => {
  element.textContent = fruit2;
});
yourfruit3.forEach((element) => {
  element.textContent = fruit3;
});

if (params.get("instructions") == "") {
  instructions = "(none)";
} else {
  instructions = params.get("instructions");
}

yourinstructions.textContent = instructions;

// Total amount of carbohydrates, protein, fat, sugar, and calories
const dataURL = "./data/fruit.json";

const fruits = [];
fruits.push(fruit1);
fruits.push(fruit2);
fruits.push(fruit3);

let totalcarbs = 0;
let totalprotein = 0;
let totalfat = 0;
let totalsugar = 0;
let totalcalories = 0;

async function getNutrition() {
  try {
    const response = await fetch(dataURL);
    if (response.ok) {
      const data = await response.json();
      getTotals(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function getTotals(data) {
  for (const fruit of fruits) {
    const object = data.filter((object) => object.name == fruit);
    console.log(object);
    const carbs = object[0].nutritions.carbohydrates;
    const protein = object[0].nutritions.protein;
    const fat = object[0].nutritions.fat;
    const sugar = object[0].nutritions.sugar;
    const calories = object[0].nutritions.calories;

    totalcarbs += carbs;
    totalprotein += protein;
    totalfat += fat;
    totalsugar += sugar;
    totalcalories += calories;

    carbspan = document.querySelector("#carbs");
    proteinspan = document.querySelector("#protein");
    fatspan = document.querySelector("#fat");
    sugarspan = document.querySelector("#sugar");
    caloriespan = document.querySelector("#calories");

    carbspan.textContent = Math.round(totalcarbs);
    proteinspan.textContent = Math.round(totalprotein);
    fatspan.textContent = Math.round(totalfat);
    sugarspan.textContent = Math.round(totalsugar);
    caloriespan.textContent = Math.round(totalcalories);
  }
}

getNutrition();