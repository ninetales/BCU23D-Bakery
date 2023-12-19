//creates the array to save the productId and the amount for each product to be read into the basket
//potentially this coule be lifted into the basket.js file, but I am not sure where it would go so to not mess up Jonathans code

// =========  GLOBAL Variables  =========
let basket = [];
let basketList;
// =========  END GLOBAL Variables  =========

// ============================================
// ========= In basket functionality  =========
// ============================================

// =========  updateQuantity() - add or remove a quantity to a single item in the basket  =========
// This function is called when the user clicks the + or - buttons on a basket item
function updateQuantity(productId, change) {
  // Find item in basket and update its quantity
  const numericProductId = Number(productId);
  const basketItem = basket.find(
    (item) => Number(item.productId) === numericProductId
  );
  if (basketItem) {
    basketItem.amount = Math.max(basketItem.amount + change, 0);
    // Update the basket in local storage and re-render the list
    localStorage.setItem('basket', JSON.stringify(basket));
    updateBasketCount();
    populateBasketList();
  }
} // =========  END updateQuantity() - add or remove a quantity to a single item in the basket  =========

// =========  setQuantity() - set a given quantity by entering the number directly  =========
// This function is called when the user enters a number directly into the quantity field and presses enter
function setQuantity(productId, newQuantity) {
  // Find item in basket and set new quantity
  const numericProductId = Number(productId);
  const basketItem = basket.find(
    (item) => Number(item.productId) === numericProductId
  );
  if (basketItem) {
    basketItem.amount = Math.max(newQuantity, 0);
    // Update the basket in local storage and re-render the list
    localStorage.setItem('basket', JSON.stringify(basket));
    populateBasketList();
  }
} // =========  END setQuantity() - set a given quantity by entering the number directly  =========

// =========  deleteItem() - Delete a single item in the basket  =========
// This function is called when the user clicks the delete button on a basket item
function deleteItem(productId) {
  const numericProductId = Number(productId);

  // Remove item from basket
  basket = basket.filter((item) => Number(item.productId) !== numericProductId);

  // Update the basket in local storage and re-render the list
  localStorage.setItem('basket', JSON.stringify(basket));
  updateBasketCount();
  populateBasketList();
} // =========  END deleteItem() - Delete a single item in the basket  =========
// =============================================
// =========  END In basket functionality  =====
// =============================================

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
}

// =========  updateBasketCount()  =========
function updateBasketCount() {
  //updates the basket icon to show the number of items in the basket
  const basketCountElement = document.querySelector(
    '.header-button__basket-count'
  );
  if (!basketCountElement) return; // If basket button doesn't exist, stop function
  let totalCount = basket.reduce((sum, item) => sum + item.amount, 0); //0 signifies the initial value of the sum
  basketCountElement.textContent = totalCount; //updates basketCountElement with totalCount value
} // =========  END updateBasketCount()  =========

// ========= Populate teh basket list with products from items added to the basket array  =========
function populateBasketList() {
  if (!basketList) return; //Ensure the basketList is available

  basketList.innerHTML = ''; //Clear the current contents of the basket list

  if (basket.length === 0) {
    //If the basket is empty this message is displayed
    const emptyMessage = document.createElement('li');
    emptyMessage.textContent =
      'Your basket is empty, go back to the shop to fill it up!';
    emptyMessage.setAttribute('class', 'basket__empty-message');
    basketList.appendChild(emptyMessage);
  } else {
    basket.forEach((basketItem) => {
      //Iterate through each item in the basket array
      const product = products.find(
        (p) => p.id === Number(basketItem.productId)
      ); //Find the product in the products array that matches the productId in the basket array

      if (product) {
        // calculate and store the total price for the basket item for later use in the order summary
        basketItem.totalPrice =
          Number(product.price.regular) * basketItem.amount;

        //create list item
        let listItem = document.createElement('li');

        //create div for image
        const imgCon = document.createElement('div');
        imgCon.setAttribute('class', 'basket__img-con');

        //create and append image to image div
        if (product.image && product.image.length > 0) {
          const img = document.createElement('img');
          img.setAttribute('src', product.image[0].src);
          img.setAttribute('alt', product.image[0].alt);
          imgCon.appendChild(img);
        }

        // Append image div container to list item
        listItem.appendChild(imgCon);

        // Create container for product details and quantity manipulation
        const midSectionCon = document.createElement('div');
        midSectionCon.setAttribute('class', 'basket__mid-section-con');

        // Append mid section container to list item
        listItem.appendChild(midSectionCon);

        // Create container for product details
        const productDetails = document.createElement('div');
        productDetails.setAttribute('class', 'basket__items-details');

        // Create and append product name
        const productNameEl = document.createElement('span');
        productNameEl.textContent = product.name;
        productDetails.appendChild(productNameEl);

        // Determine price text
        const priceText =
          typeof product.price.regular === 'number'
            ? `$${product.price.regular.toFixed(2)}`
            : 'Price not available';

        // Create and append product price
        const productPriceEl = document.createElement('span');
        productPriceEl.textContent = priceText;
        productDetails.appendChild(productPriceEl);

        // Determine total price text
        const totalPrice = (product.price.regular * basketItem.amount).toFixed(
          2
        );

        // Create and append total price
        const totalPriceEl = document.createElement('span');
        totalPriceEl.textContent = `Total: $${totalPrice}`;
        totalPriceEl.setAttribute('class', 'basket__items-total');
        productDetails.appendChild(totalPriceEl);

        // Append product details container to the list item
        midSectionCon.appendChild(productDetails);

        // Create container for quantity manipulation
        const quantityContainer = document.createElement('div');
        quantityContainer.setAttribute('class', 'quantity-container');

        // Create and append decrement button
        const decrementButton = document.createElement('button');
        decrementButton.textContent = '-';
        decrementButton.onclick = () => updateQuantity(product.id, -1);
        quantityContainer.appendChild(decrementButton);

        // Create and append quantity field
        const quantityField = document.createElement('input');
        quantityField.setAttribute('class', 'quantity-field');
        quantityField.type = 'number';
        quantityField.value = basketItem.amount;
        quantityField.onchange = (e) =>
          setQuantity(product.id, Number(e.target.value));
        quantityContainer.appendChild(quantityField);

        // Create and append increment button
        const incrementButton = document.createElement('button');
        incrementButton.textContent = '+';
        incrementButton.onclick = () => updateQuantity(product.id, 1);
        quantityContainer.appendChild(incrementButton);

        midSectionCon.appendChild(quantityContainer);
        //productDetails.appendChild(quantityContainer);

        // Create and append delete button
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'basket__items-delete');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
          console.log('delete', product.id);
          deleteItem(Number(product.id));
        };

        listItem.appendChild(deleteButton);
        basketList.appendChild(listItem);

        //updateOrderSummary();
      }
    });
  }
}
// =========  END Populate the basket list with products from items added to the basket array  =========

// ======  Update order summary function  ======
function updateOrderSummary() {
  const vatRate = 0.12; // 12% VAT (mons)
  const shippingRate = 10; // $10 fixed price shippingRate

  //summing up the stored totals and calculating vat and adding shippinh to total
  const subtotal = basket.reduce(
    (sum, item) => sum + (item.totalPrice || 0),
    0
  );
  const vat = subtotal * vatRate;
  const total = subtotal + vat + shippingRate;

  //displaying the totals in the order summary section
  document.querySelector(
    '.price p:nth-child(2)'
  ).textContent = `Subtotal: $${subtotal.toFixed(2)}`;
  document.querySelector(
    '.price p:nth-child(4)'
  ).textContent = `VAT: $${vat.toFixed(2)}`;
  document.querySelector('.total__price').textContent = total.toFixed(2);
}

// =========  resetBasket() - Reset the whole basket  =========
function resetBasket() {
  basket = [];
  localStorage.removeItem('basket');
  updateBasketCount();
  populateBasketList();
  updateOrderSummary();
} // =========  END resetBasket() - Reset the whole basket  =========

// =========  DOM functionality  =========
document.addEventListener('DOMContentLoaded', function () {
  //Retrieve the UL element.
  basketList = document.querySelector('.basket__items');

  const savedBasket = localStorage.getItem('basket'); //Keeps the basket count up to date when the page is refreshed
  if (savedBasket) {
    basket = JSON.parse(savedBasket);
  }
  updateBasketCount();
  populateBasketList();
  //only run the updateOrderSummary function if the payment button is present
  //this is to prevent the function from running on the shop page to avoid 'null' errors
  if (document.querySelector('.payment__button')) {
    updateOrderSummary();
  }
  const basketButton = document.querySelector('.header-button__basket');

  if (basketButton) {
    basketButton.addEventListener('click', function () {
      window.location.href = 'basket.html';
    });
  }

  const resetButton = document.querySelector('.header-button__basket-reset');
  if (resetButton) {
    resetButton.addEventListener('click', function () {
      resetBasket();
    });
  }
}); // =========  END DOM functionality  =========

//makes sure an update on any tab is reflected on all tabs
window.addEventListener('storage', function (basketMemory) {
  if (basketMemory.key === 'basket') {
    basket = JSON.parse(basketMemory.newValue);
  }
});

/*************************************************************************
 **************************BASKET PREVIEW**********************************
 **************************************************************************/

document.addEventListener('DOMContentLoaded', function () {
  const basketButton = document.querySelector('.header-button__basket');
  const basketPreview = document.querySelector('.basket-preview');

  if (basketButton && basketPreview) {
    basketButton.addEventListener('mouseenter', function () {
      // show the preview when hovering
      showBasketPreview();
      populateBasketList();
    });

    basketButton.addEventListener('mouseleave', function () {
      // Hide preview when not hovering
      hideBasketPreview();
    });

    //So the hover effect continues while within the preview box
    basketPreview.addEventListener('mouseenter', function () {
      showBasketPreview();
    });

    basketPreview.addEventListener('mouseleave', function () {
      hideBasketPreview();
    });
  }
});
//setting timer variable
let hideTimeout;

function showBasketPreview() {
  // clearing existing timeout
  clearTimeout(hideTimeout);
  // populate items here
  const basketPreview = document.querySelector('.basket-preview');
  basketPreview.style.visibility = 'visible';

  //This one is to clear the preview from previous data
  basketPreview.innerHTML = '';

  // Saves amount to every product, will be used to display quantity
  const basketItemMap = {};
  basket.forEach((item) => {
    basketItemMap[item.productId] = item.amount;
  });

  // creating an array with numeric product ids

  const basketProductIds = basket.map((item) => Number(item.productId));
  // Searches baskeProductIds and includes the product.id that it finds into a new array
  const matchingProducts = products.filter((product) =>
    basketProductIds.includes(product.id)
  );

  // Looping through matchingProducts to see what products lies within
  matchingProducts.forEach((product) => {
    const productElement = document.createElement('div');
    productElement.setAttribute('class', 'preview__Items')
    // Display product name and price
    const productName = document.createElement('span');
    productName.textContent = `${product.name}`;
    productElement.appendChild(productName);

    // Display product price, turn it from an object into a number
    const productPrice = document.createElement('span');
    // Checks to see if product has a property named 'regular' and if it's a number
    productPrice.textContent =
      typeof product.price.regular === 'number'
        ? // if it is a number then show price with two decimals
          `$${product.price.regular.toFixed(2)}`
        : //if not well, then show price not available
          'Price not available';
    productElement.appendChild(productPrice);

    // Goes through basketItemMap to check for set amount.
    const quantityInBasket = basketItemMap[product.id] || 0;
    const quantityElement = document.createElement('span');

    quantityElement.textContent = `Qty: ${quantityInBasket}`;
    productElement.appendChild(quantityElement);

    // Display product image
    if (product.image && product.image.length > 0) {
      const imageElement = document.createElement('img');
      imageElement.setAttribute('class', 'basket__img-con')
      imageElement.src = product.image[0].src;
      imageElement.alt = product.image[0].alt;
      productElement.appendChild(imageElement);
    }

    basketPreview.appendChild(productElement);
  });

  const goToBasketButton = document.createElement('button');
  goToBasketButton.textContent = 'Go to checkout';
  goToBasketButton.addEventListener('click', function () {
    // Redirect to the basket site
    window.location.href = 'basket.html'; // Replace with your actual URL
  });

  basketPreview.appendChild(goToBasketButton);

  // Show the preview
  basketPreview.style.display = 'block';
}

function hideBasketPreview() {
  // Creating the timer so that the preview doesn't dissapear right away
  hideTimeout = setTimeout(() => {
    
    const basketPreview = document.querySelector('.basket-preview');
    basketPreview.style.visibility = 'hidden';
  }, 1000);
  // Hide preview
}
