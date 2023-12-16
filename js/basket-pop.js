//creates the array to save the productId and the amount for each product to be read into the basket
//potentially this coule be lifted into the basket.js file, but I am not sure where it would go so to not mess up Jonathans code
let basket = [];

function addToBasket(productId, amount) {
  let productIndex = basket.findIndex((item) => item.productId === productId);
  if (productIndex !== -1) {
    basket[productIndex].amount += amount;
  } else {
    basket.push({ productId, amount });
  }
  //save the basket to local storage to allow it to be read on other pages localStorage.setItem('basket', JSON.stringify(basket));
}

//updates the basket icon to show the number of items in the basket
function updateBasketCount() {
  const basketCountElement = document.querySelector(
    ".header-button__basket-count"
  );
  if (!basketCountElement) return; // If basket button doesn't exist, stop function
  let totalCount = basket.reduce((sum, item) => sum + item.amount, 0); //0 signifies the initial value of the sum basketCountElement.textContent = totalCount; //updates basketCountElement with totalCount value
}

//Keeps the basket count up to date when the page is refreshed
document.addEventListener("DOMContentLoaded", function () {
  const savedBasket = localStorage.getItem("basket");
  if (savedBasket) {
    basket = JSON.parse(savedBasket);
  }
  updateBasketCount();
});

//makes sure an update on any tab is reflected on all tabs
window.addEventListener("storage", function (basketMemory) {
  if (basketMemory.key === "basket") {
    basket = JSON.parse(basketMemory.newValue);
  }
});

/*******************************************/
// ! CHANGE THIS FOR BUTTON RESETS
/*******************************************/
//reset function
window.addEventListener("beforeunload", function () {
  // Clear the basket in localStorage localStorage.removeItem('basket');
});
