"use strict";

// FIRST CHALLANGE - VENDING MACHINE -----------------------------------
// MY SOLUTION
// For my solution data-price properties have to be removed from html
// 1. add data atr to each btn that would store price data
// const buttonCh1 = document.querySelectorAll(".challange-1 button");
// console.log(buttonCh1); // buttonCh1 is a node list

// // set up initial value for total
// let totalPrice = 0;

// const h1 = document.querySelector(".total-price");
// console.dir(h1);

// //setting atr for each btn
// buttonCh1[0].setAttribute("data-price", 2.0);
// buttonCh1[1].setAttribute("data-price", 3.0);
// buttonCh1[2].setAttribute("data-price", 4.0);
// buttonCh1[3].setAttribute("data-price", 6.0);

// // getting atr values
// const price1 = parseInt(buttonCh1[0].getAttribute("data-price"));
// const price2 = parseInt(buttonCh1[1].getAttribute("data-price"));
// const price3 = parseInt(buttonCh1[2].getAttribute("data-price"));
// const price4 = parseInt(buttonCh1[3].getAttribute("data-price"));

// // add events for clicks
// const button1 = document.getElementById("btn-cola");
// button1.addEventListener("click", () => {
//   console.log(totalPrice);
//   totalPrice += price1;
//   h1.textContent = `Total: ${totalPrice}`;
// });

// const button2 = document.getElementById("btn-peanuts");
// button2.addEventListener("click", () => {
//   totalPrice += price2;
//   h1.textContent = `Total: ${totalPrice}`;
// });

// const button3 = document.getElementById("btn-choco");
// button3.addEventListener("click", () => {
//   totalPrice += price3;
//   h1.textContent = `Total: ${totalPrice}`;
// });

// const button4 = document.getElementById("btn-gummies");
// button4.addEventListener("click", () => {
//   totalPrice += price4;
//   h1.textContent = `Total: ${totalPrice}`;
// });

// ANDREA'S SOLUTION
// selector at the top
const vendingBtns = document.querySelectorAll(".buttons");
// console.dir(vendingBtns);
const totalParagraph = document.querySelector(".total-price");

let total = 0;

// events

// vendingBtns[0].addEventListener("click", () => {
//   const price = vendingBtns[0].getAttribute("data-price");
//   total += +price;
// });
// vendingBtns[1].addEventListener("click", () => {
//   const price = vendingBtns[1].getAttribute("data-price");
//   total += +price;
// });
// vendingBtns[2].addEventListener("click", () => {
//   const price = vendingBtns[2].getAttribute("data-price");
//   total += +price;
// });
// vendingBtns[3].addEventListener("click", () => {
//   const price = vendingBtns[3].getAttribute("data-price");
//   total += +price;
// });

//shorthand for above
vendingBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const price = btn.getAttribute("data-price");
    total += +price;
    console.log(total);
    totalParagraph.textContent = `Total: $${total}`;
  });
});

// CHALLANGE 2
const makeMoneyForm = document.querySelector(".make-money");
const coinContainer = document.querySelector(".coin-container");
const amountInput = document.querySelector("#amount");
const coinInput = document.querySelector("#coin");
console.dir(amountInput);
console.dir(coinInput);

makeMoneyForm.addEventListener("submit", (e) => {
  // preventing refreshing
  e.preventDefault();
  // console.dir(amountInput);
  // console.log(`amount selected: ${amountInput.valueAsNumber}`);
  // console.log(`coin type selected: ${coinInput.value}`);
  const amount = amountInput.valueAsNumber;
  const typeOfCoin = coinInput.value;
  console.log(typeOfCoin);

  for (let i = 0; i < amount; i++) {
    const newCoin = document.createElement("div");
    newCoin.classList.add("coin", typeOfCoin);
    newCoin.textContent = typeOfCoin;
    newCoin.addEventListener("click", () => {
      newCoin.style.display = "none";
    });
    coinContainer.append(newCoin);
  }
});

// CHALLANGE 3
const lightBulb = document.querySelector("#light-bulb"); // retrieveing a div
// console.dir(lightBulb);
// why can't I see the style prop background color in my node obj, its vallue is null, even tho
// it is assigned in my css. I wanted to put it in a variable so I don't have to repeat
// "lightBulb.style.backgroundColor" all the time, but I couldn't access it.
const lightBtns = document.querySelectorAll(".light-bulb-btn"); // node list

// on button
const onBtn = document.querySelector(".on");
onBtn.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "yellow";
});

// off btn
const offBtn = document.querySelector(".off");
offBtn.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "grey";
});

// toggle btn
const toggleBtn = document.querySelector(".toggle");
toggleBtn.addEventListener("click", () => {
  lightBulb.style.backgroundColor === "yellow"
    ? (lightBulb.style.backgroundColor = "grey")
    : (lightBulb.style.backgroundColor = "yellow");
});

// end btn
const endBtn = document.querySelector(".end");
endBtn.addEventListener("click", () => {
  lightBulb.remove();
  for (const bulb of lightBtns) {
    bulb.disabled = true;
  }
});
