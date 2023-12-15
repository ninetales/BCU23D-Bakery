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

console.log(products);
