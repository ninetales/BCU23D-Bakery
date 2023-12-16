//creates the array to save the productId and the amount for each product to be read into the basket
//potentially this coule be lifted into the basket.js file, but I am not sure where it would go so to not mess up Jonathans code

// =========  GLOBAL Variables  =========
let basket = [];

function addToBasket(productId, amount) {
  let productIndex = basket.findIndex((item) => item.productId === productId);
  if (productIndex !== -1) {
    basket[productIndex].amount += amount;
  } else {
    basket.push({ productId, amount });
  }
  //save the basket to local storage to allow it to be read on other pages 
  localStorage.setItem('basket', JSON.stringify(basket));
} // =========  END GLOBAL Variables  =========

// =========  updateBasketCount()  =========
function updateBasketCount() { //updates the basket icon to show the number of items in the basket
  const basketCountElement = document.querySelector(
    ".header-button__basket-count"
  );
  if (!basketCountElement) return; // If basket button doesn't exist, stop function
  let totalCount = basket.reduce((sum, item) => sum + item.amount, 0); //0 signifies the initial value of the sum 
  basketCountElement.textContent = totalCount; //updates basketCountElement with totalCount value
} // =========  END updateBasketCount()  =========


// =========  DOM functionality  =========
document.addEventListener("DOMContentLoaded", function () {  
  const savedBasket = localStorage.getItem("basket"); //Keeps the basket count up to date when the page is refreshed
  if (savedBasket) {
    basket = JSON.parse(savedBasket);
  }
  updateBasketCount();
}); // =========  END DOM functionality  =========




// Makes basket button go to basket.html
document.addEventListener('DOMContentLoaded', function () {
  const basketButton = document.querySelector('.header-button__basket');

  if (basketButton) {
    basketButton.addEventListener('click', function () {
      window.location.href = 'basket.html';
    });
  }
});

//Retrieve the UL element.
let basketList = document.querySelector('.basket__items');

for (let i = 0; i < 3 && i < products.length; i++) {
  let product = products[i];
  let listItem = document.createElement('li');

  // Check if product is a number or object, then display price
  const priceText =
    typeof product.price === 'number' ||
    (typeof product.price === 'object' && 'regular' in product.price)
      ? `$${(typeof product.price === 'number'
          ? product.price
          : product.price.regular
        ).toFixed(2)}`
      : 'Price not available';

  listItem.textContent = `${product.name} - ${priceText}`;

  basketList.appendChild(listItem);
  console.log('Image source:', product.image[0].src);
}

//makes sure an update on any tab is reflected on all tabs
window.addEventListener("storage", function (basketMemory) {
  if (basketMemory.key === "basket") {
    basket = JSON.parse(basketMemory.newValue);
  }
});

console.log(products);
