document.addEventListener('DOMContentLoaded', function() {
    const basketButton = document.querySelector('.header-button__basket');

    if (basketButton) {
        basketButton.addEventListener('click', function() {
            window.location.href = 'basket.html';
        });
    }
});

    //Retrieve the UL element.
    let basketList = document.querySelector('.basket__items');

    //Check if the list element exists
    // if (basketList) {
    //     //loop through the existing data and create li items
    //     products.forEach(function (product) {

    //         let listItem = document.createElement('li');

    //         listItem.textContent = `${product.name} - ${typeof product.price === 'number' ? `$${product.price.toFixed(2)}` : 'Price not available'}`;

    //         //Append the li element to the ul
    //         basketList.appendChild(listItem);
    //     })


    // }

    for (let i = 0; i < 3 && i < products.length; i++) {
        let product = products[i];
        let listItem = document.createElement('li');

        // Check if product is a number or object, then display price
        const priceText = typeof product.price === 'number' || (typeof product.price === 'object' && 'regular' in product.price)
            ? `$${(typeof product.price === 'number' ? product.price : product.price.regular).toFixed(2)}`
            : 'Price not available';
        //Creating an img element
        let img = document.createElement('img');
        img.setAttribute('class', 'product__img')
        img.setAttribute('src', product.image[0].src);
        img.setAttribute('alt', product.image[0].alt);

        
        listItem.textContent = `${product.name} - ${priceText}`;

        listItem.append(img);
        
        basketList.appendChild(listItem);
        console.log('Image source:', product.image[0].src);
    }

    console.log(products);
