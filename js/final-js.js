// phone plus button updaor

document.getElementById("main-btn-2").addEventListener("click", function () {
  let mainNumber1 = document.getElementById("main-num-1");
  let mainNumber1Text = mainNumber1.innerText;
  let mainNumber1TextInt = parseInt(mainNumber1Text);
  mainNumber1.innerText = mainNumber1TextInt + 1;

  //main balance updator
  let productBalance1 = document.getElementById("product-balance-1");
  let productBalance1Text = productBalance1.innerText;
  let productBalance1TextFloat = parseFloat(productBalance1Text);
  productBalance1.innerText = mainNumber1.innerText * 1200;

  // final output count // make a function then add it with similar function
  getFinalOutputValue();
});

// phone minus button updator
document.getElementById("main-btn-1").addEventListener("click", function () {
  let mainNumber1 = document.getElementById("main-num-1");
  let mainNumber1Text = mainNumber1.innerText;
  let mainNumber1TextInt = parseInt(mainNumber1Text);
  // plusMinusSame1();
  if (mainNumber1TextInt > 0) {
    mainNumber1.innerText = mainNumber1TextInt - 1;

    //main balance updator
    let productBalance1 = document.getElementById("product-balance-1");
    let productBalance1Text = productBalance1.innerText;
    let productBalance1TextFloat = parseFloat(productBalance1Text);
    productBalance1.innerText = mainNumber1.innerText * 1200;

    // final output count // make a function then add it with similar function
    getFinalOutputValue();
  } else {
    mainNumber1.innerText = mainNumber1TextInt;
  }
});

// phone case price updator (+)
document.getElementById("main-btn-4").addEventListener("click", function () {
  let mainNumber1 = document.getElementById("main-num-2");
  let mainNumber1Text = mainNumber1.innerText;
  let mainNumber1TextInt = parseInt(mainNumber1Text);
  mainNumber1.innerText = mainNumber1TextInt + 1;
  //main balance updator
  let productBalance1 = document.getElementById("product-balance-2");
  let productBalance2Text = productBalance1.innerText;
  let productBalance2TextFloat = parseFloat(productBalance2Text);
  productBalance1.innerText = mainNumber1.innerText * 60;

  // // amader bodole nahian function ke call
  getFinalOutputValue();
});
// phone case price updator (-)
document.getElementById("main-btn-3").addEventListener("click", function () {
  let mainNumber1 = document.getElementById("main-num-2");
  let mainNumber1Text = mainNumber1.innerText;
  let mainNumber1TextInt = parseInt(mainNumber1Text);
  if (mainNumber1TextInt > 0) {
    mainNumber1.innerText = mainNumber1TextInt - 1;
    // main balance updator
    let productBalance2 = document.getElementById("product-balance-2");
    let productBalance2Text = productBalance2.innerText;
    let productBalance2TextFloat = parseFloat(productBalance2Text);
    productBalance2.innerText = mainNumber1.innerText * 60;

    // amader bodole nahian function ke call
    getFinalOutputValue();

  } else {
    mainNumber1.innerText = mainNumber1TextInt;
  }
});

// final output calculation
function getPhoneInputValue(){
    const phoneInput = document.getElementById('main-num-1' );
    const phoneInputData = parseInt(phoneInput.innerText);
    const phoneInputNumber = phoneInputData * 1200;
    return phoneInputNumber;
}
function getCaseInputValue(){
    const phoneInput = document.getElementById('main-num-2' );
    const phoneInputData = parseInt(phoneInput.innerText);
    const phoneInputNumber = phoneInputData * 60;
    return phoneInputNumber;
}
function getFinalOutputValue(){
    const initialPrice = getPhoneInputValue() + getCaseInputValue();
    const tax = initialPrice * 0.1;
    const total = initialPrice + tax;
    const donationToApple = total + (total - total * 0.9);

    // output call
    document.getElementById("initial-price").innerText = initialPrice;
    document.getElementById("tax-amount").innerText = tax;
    document.getElementById("total-price").innerText = total;
    document.getElementById("donate-price").innerText = donationToApple;
}