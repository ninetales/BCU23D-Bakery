// ===================================================================
// Get Products
// ===================================================================

// Append the products to all divs containing the selected classname
const containers = document.querySelectorAll('.products');
containers.forEach((container) => {
  getProducts(container);
});

// Product function creates and appends the elements
function getProducts(container) {
  // Loop through the products
  products.forEach((product) => {
    // Card container
    const productCard = document.createElement('div');
    productCard.classList.add('product', 'card');

    // Image container
    const imgCon = document.createElement('div');
    imgCon.setAttribute('class', 'product__img-con');
    productCard.append(imgCon);

    // Image
    const img = document.createElement('img');
    img.setAttribute('src', product.image[0].src);
    img.setAttribute('alt', product.image[0].alt);
    imgCon.append(img);

    // Card body
    const cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'product__body');
    productCard.append(cardBody);

    // Top section container
    const topSection = document.createElement('div');
    topSection.setAttribute('class', 'product__top-section');
    cardBody.append(topSection);

    // Product name
    const productName = document.createElement('span');
    productName.setAttribute('class', 'name');
    productName.textContent = product.name;
    topSection.append(productName);

    // Product price and package info container
    const infoCon = document.createElement('div');
    infoCon.setAttribute('class', 'product__info-con');
    topSection.append(infoCon);

    // Price
    const price = document.createElement('span');
    price.setAttribute('class', 'price');

    // Check if there is an discount or not
    if (product.price.discountPercentage !== null) {
      // Calculate new price
      function getNewPrice() {
        return (
          product.price.regular -
          (product.price.regular * product.price.discountPercentage) / 100
        );
      }

      // New Price
      const newPrice = document.createElement('span');
      newPrice.textContent = `$${getNewPrice()}`;
      newPrice.setAttribute('class', 'price__new');
      price.append(newPrice);

      // Old price
      const oldPrice = document.createElement('span');
      oldPrice.textContent = `$${product.price.regular}`;
      oldPrice.setAttribute('class', 'price__old');
      price.append(oldPrice);

      // Discount percentage (Bonus)
      const discountPercentage = document.createElement('span');
      discountPercentage.textContent = `${product.price.discountPercentage}%`;
      discountPercentage.setAttribute('class', 'price__discount');
      price.append(discountPercentage);
    } else {
      price.append(`$${product.price.regular}`);
    }

    infoCon.append(price);

    // Amount package info
    const amountPackageInfo = document.createElement('span');
    amountPackageInfo.classList.add('text__light');
    amountPackageInfo.textContent = `/ Pkg (${product.itemsPerPackage} ${
      product.itemsPerPackage > 1 ? 'pieces' : 'piece'
    })`;
    infoCon.append(amountPackageInfo);

    // Product Description
    const description = document.createElement('p');
    description.textContent = product.description;
    topSection.append(description);

    // Bottom section container
    const bottomSection = document.createElement('div');
    bottomSection.setAttribute('class', 'product__bottom-section');
    cardBody.append(bottomSection);

    // Amount container
    const amountContainer = document.createElement('div');
    amountContainer.setAttribute('class', 'product__amount-container');
    bottomSection.append(amountContainer);

    // Amount
    const amountInput = document.createElement('input');
    amountInput.setAttribute('class', 'product__amount-toggle');
    amountInput.setAttribute('type', 'number');
    amountInput.setAttribute('min', 1);
    amountInput.setAttribute('value', 1);
    amountInput.addEventListener('change', function () {
      addToCartBtn.setAttribute('data-product-amount', amountInput.value);
    });
    amountContainer.append(amountInput);

    // Add to cart
    const addToCartBtn = document.createElement('button');
    addToCartBtn.setAttribute('data-product-id', product.id);
    addToCartBtn.setAttribute('data-product-amount', 1);
    addToCartBtn.setAttribute('class', 'product__add-to-cart');
    addToCartBtn.textContent = 'Add to cart';

    addToCartBtn.addEventListener('click', function () {
      // ===================================================================
      // ToDo: Add cart functionality here
      // ===================================================================
      amountInput.value = 1; // Reset input value to 1
      console.log('Product ID:', this.getAttribute('data-product-id'));
      console.log('Product Amount:', this.getAttribute('data-product-amount'));
    });

    bottomSection.append(addToCartBtn);

    // Append card to element container
    container.append(productCard);
  });
}
