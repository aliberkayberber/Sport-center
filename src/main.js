import "./style.css";

("use strict");
const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const bmiTriangle = document.querySelector(".bmi-tri");

// Ağırlık input alanına bir event listener ekleniyor
weight.addEventListener("input", () => {
  let bmi = weight.value / (height.value / 100) ** 2;
  let percentage;
  // BMI değerine göre yüzde hesaplanıyor
  if (bmi > 13.5 && bmi < 18.5) {
    percentage = 4 + ((bmi - 13.5) * 16) / 5;
  } else if (
    (bmi > 25 && bmi < 30) ||
    (bmi >= 30 && bmi < 35) ||
    (bmi >= 35 && bmi < 40)
  ) 
  {
    percentage = 40 + ((bmi - 24.5) * 16) / 5;
  } else if (bmi >= 18.5 && bmi < 25) {
    percentage = 23 + ((bmi - 18.5) * 16) / 7.5;
  } else if (bmi >= 40) {
    percentage = 100;
  } else {
    percentage = 0;
  }
  // Yüzde değeri belirli bir aralıkta ise, BMI üçgeninin konumu ayarlanıyor
  if (percentage > 4 && percentage < 86) {
    bmiTriangle.style.left = `${percentage}%`;
  } else if (percentage >= 86) {
    bmiTriangle.style.left = `86%`;
  } else {
    bmiTriangle.style.left = `4%`;
  }
});
// menü içeriği
const classes = [
  {
    id: 1,
    category: "Yoga",
    img: "./assets/yoga-DxY-5oh2.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quidem quis earum officiis quam fugit placeat impedit incidunt amet assumenda laboriosam ipsam quisquam perferendis quibusdam, autem, illo eos cupiditate! Debitis aut beatae alias ullam nobis?",
    time: [
      "Saturday-Sunday: 8:00am - 10.00am",
      "Monday-Tuesday: 10:00am - 12.00pm",
      "Wednesday-Friday: 3:00pm - 6.00pm",
    ],
  },
  {
    id: 2,
    category: "Group",
    img: "./images/group.webp",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    time: [
      "Saturday-Sunday: 12:00pm - 4.00pm",
      "Tuesday-Thursday: 2:00pm - 4.00pm",
      "Wednesday-Friday: 6:00pm - 9.00pm",
    ],
  },
  {
    id: 3,
    category: "Solo",
    img: "./images/solo.jpg",
    description:
      "Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    time: [
      "Saturday-Sunday: 10:00am - 12.00am",
      "Monday-Tuesday: 12:00pm - 2.00pm",
      "Wednesday-Friday: 2:00pm - 4.00pm",
    ],
  },
  {
    id: 4,
    category: "Stretching",
    img: "./images/stret.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quidem quis earum officiis quam fugit placeat impedit incidunt amet assumenda laboriosam ipsam quisquam perferendis quibusdam, autem, illo eos cupiditate!",
    time: [
      "Saturday-Sunday: 11:00am - 1.00pm",
      "Tuesday-Thursday: 10:00am - 12.00pm",
      "Wednesday-Friday: 10:00am - 12.00pm",
    ],
  },
];

const btnClasses = document.querySelectorAll(".btn-classes");
const triangle = document.querySelectorAll(".btn-classes div");
const classesContent = document.querySelector(".classes-content");

btnClasses[0].style.backgroundColor = "#fc9b01";

for (let i = 0; i < btnClasses.length; i++) {
  btnClasses[i].addEventListener("click", () => {
    for (let j = 0; j < btnClasses.length; j++) {
      btnClasses[j].style.backgroundColor = "#355592";
      triangle[j].classList.remove("triangle");
      
    }

    btnClasses[i].style.backgroundColor = "#fc9b01";
    triangle[i].classList.add("triangle");
    classesContent.innerHTML = "";
    const selectedGroup = btnClasses[i].innerText;

    classes.forEach((e) => {
      if (e.category == selectedGroup) {
        showMenu(e, classesContent);
      }
    });
  });
}
// Butonlara tıklanınca ilgili menü içeriği gösterilir
function showMenu(e, classesContent) {
  let div = document.createElement("div");
  div.classList.add("content-click");
  div.innerHTML = `  <h2>Why are your ${e.category}?</h2>
    <p>${e.description}</p>
    <h2>When comes ${e.category} Your Time.</h2>
    <p>${e.time[0]}</p>
    <p>${e.time[1]}</p>
    <p>${e.time[2]}</p>

    `;
  let img = document.createElement("img");
  img.classList.add("img-yoga");
  img.src = `${e.img}`;
  img.alt = `${e.category}`;
  classesContent.append(div);
  classesContent.append(img);
}

function fixedNavbar() {
  let navbar = document.querySelector(".navbar-container");
  let scrollValue = window.scrollY;
  if (scrollValue < 100) {
    navbar.classList.remove("fixedNavbar");
  } else {
    navbar.classList.add("fixedNavbar");
  }
}
// sayfa kaydığında navbar'ın arka plan rengi değişir
window.addEventListener("scroll", fixedNavbar);
