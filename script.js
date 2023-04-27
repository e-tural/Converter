const btnsLeft = [...document.querySelectorAll(".btns-left button")];
const btnsRight = [...document.querySelectorAll(".btns-right button")];
const convertLeft = document.querySelector('.converter-left')
const convertRight = document.querySelector('.converter-right')

const inputR = document.querySelector(".right input");
const inputL = document.querySelector(".left input");
const form = document.querySelector("form");

let data;


let left = "RUB";
let right = "USD";

form.addEventListener("input", (e) => {
  e.preventDefault();
  getData(left, right);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getData(left, right);
});

btnsLeft.map((item) => {
  item.addEventListener("click", (e) => {
    btnsLeft.map((item) => {
      item.classList.remove("active");
    });
    if (item.className !== "active") {
      item.classList.add("active");
    }
    left = item.textContent;
  });
});

btnsRight.map((item) => {
  item.addEventListener("click", (e) => {
    btnsRight.map((items) => {
      items.classList.remove("active");
    });
    if (item.className !== "active") {
      item.classList.add("active");
    }
    right=item.textContent
  });
});

const getData = async (left, right) => {
  inputR.value = "";
  const reponse = await fetch(
    `https://api.exchangerate.host/latest?base=${left}&symbols=${right}`
  );
  data = await reponse.json();
  let sum = (+inputL.value * data.rates[`${right}`]).toFixed(3);
  inputR.value = sum;
};

getData(left,right)