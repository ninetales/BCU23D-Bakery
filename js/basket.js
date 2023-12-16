//creates the array to save the productId and the amount for each product to be read into the basket
//potentially this coule be lifted into the basket.js file, but I am not sure where it would go so to not mess up Jonathans code

// =========  GLOBAL Variables  =========
let basket = [];
let basketList;

function addToBasket(productId, amount) {
  let productIndex = basket.findIndex((item) => item.productId === productId);
  if (productIndex !== -1) {
    basket[productIndex].amount += amount;
  } else {
    basket.push({ productId, amount });
  }
  //save the basket to local storage to allow it to be read on other pages 
  localStorage.setItem('basket', JSON.stringify(basket));

  populateBasketList();
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

// ========= Populate teh basket list with products from items added to the basket array  =========
function populateBasketList() {
  console.log("basket", basket);
  console.log("populateBasketList called");
  if (!basketList) return; //Ensure the basketList is available

  basketList.innerHTML = ""; //Clear the current contents of the basket list

  basket.forEach(basketItem => { //Iterate through each item in the basket array
    const product = products.find(p => p.id === Number(basketItem.productId)); //Find the product in the products array that matches the productId in the basket array
  
    console.log('test1:', product); 
    console.log('test2', basketItem);

    if (product) {
      let listItem = document.createElement('li');
      listItem.textContent = `${product.name} - Quantity: ${basketItem.amount}`;

        console.log('basketItem2', basketItem);
      
      const priceText = typeof product.price === 'number'
        ? `$${product.price.toFixed(2)}`
        : 'Price not available';
      listItem.textContent += ` - ${priceText}`;

      if(product.image && product.image.length > 0) {
        let img = document.createElement('img');
        img.setAttribute('src', product.image[0].src);
        img.setAttribute('alt', product.name);
        listItem.appendChild(img);
      }

        console.log('basketItem3', basketItem);

      basketList.appendChild(listItem);
    }
  });
}
// =========  END Populate teh basket list with products from items added to the basket array  =========


// =========  DOM functionality  =========
document.addEventListener("DOMContentLoaded", function () { 
  //Retrieve the UL element.
  basketList = document.querySelector('.basket__items');

  const savedBasket = localStorage.getItem("basket"); //Keeps the basket count up to date when the page is refreshed
  if (savedBasket) {
    basket = JSON.parse(savedBasket);
  }
  updateBasketCount();
  populateBasketList();

  console.log('dom_basket', basketList);
  console.log('dom_basket', basket);
  console.log('products', products);
  console.log('localStorage', localStorage);

  const basketButton = document.querySelector('.header-button__basket');

  if (basketButton) {
    basketButton.addEventListener('click', function () {
      window.location.href = 'basket.html';
    });
  }

}); // =========  END DOM functionality  =========


/* ===========  Testing new version ==================
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
}// ==========  Testing new version ==============*/

//makes sure an update on any tab is reflected on all tabs
window.addEventListener("storage", function (basketMemory) {
  if (basketMemory.key === "basket") {
    basket = JSON.parse(basketMemory.newValue);
  }
});

console.log(products);
