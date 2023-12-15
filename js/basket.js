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

document.addEventListener('DOMContentLoaded', function () {
  const basketButton = document.querySelector('.header-button__basket');
  const basketPreview = document.querySelector('.basket-preview');

  if (basketButton && basketPreview) {
    basketButton.addEventListener('mouseenter', function () {
      // show the preview when hovering
      showBasketPreview();
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

function showBasketPreview() {
  // populate items here
  const basketPreview = document.querySelector('.basket-preview');
  basketPreview.style.visibility = 'visible';
  //It populates with all the products from the list, i need to fine tune it
  products.forEach((product) => {
    const productElement = document.createElement('div');
    productElement.textContent = `${product.name} - $${product.price}`;
    basketPreview.appendChild(productElement);
  });
  function hideBasketPreview() {
    // Hide preview
    const basketPreview = document.querySelector('.basket-preview');
    basketPreview.style.visibility = 'hidden';
  }

  const goToBasketButton = document.createElement('button');
  goToBasketButton.textContent = 'Collect your bakery goods';
  goToBasketButton.addEventListener('click', function () {
    // Redirect to the basket site
    window.location.href = 'basket.html'; // Replace with your actual URL
  });

  basketPreview.appendChild(goToBasketButton);

  // Show the preview
  basketPreview.style.display = 'block';
}

function hideBasketPreview() {
  // Hide preview
  const basketPreview = document.querySelector('.basket-preview');
  basketPreview.style.visibility = 'hidden';
}
