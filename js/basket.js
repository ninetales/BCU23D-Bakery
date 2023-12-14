document.addEventListener('DOMContentLoaded', function() {
    const basketButton = document.querySelector('.header-button__basket');

    if (basketButton) {
        basketButton.addEventListener('click', function() {
            window.location.href = 'basket.html';
        });
    }
});

const products = [
    {
      id: 1,
      name: 'Baguettes',
      description:
        'A classic French baguette with a crispy crust and soft interior.',
      image: [
        {
          alt: 'A classic French baguette with a crispy crust and soft interior.',
          src: './assets/images/bread/bread_baguette.webp',
        },
      ],
      price: {
        regular: 7,
        discountPercentage: null,
      },
      category: ['Bread'],
      stock: null,
      itemsPerPackage: 12,
    },
    {
      id: 2,
      name: 'Fig & Hazelnut',
      description:
        'A delightful bread with sweet figs and crunchy hazelnuts, perfect for those seeking something unique.',
      image: [
        {
          alt: 'A delightful bread with sweet figs and crunchy hazelnuts, perfect for those seeking something unique.',
          src: './assets/images/bread/bread_fikon_och_hasselnot.webp',
        },
      ],
      price: {
        regular: 7,
        discountPercentage: null,
      },
      category: ['Bread'],
      stock: null,
      itemsPerPackage: 12,
    }]

    // // //Retrieve the UL element.
    // // let basketList = document.querySelector('basket-items');

    // // // Check if the list element exists
    // // if (basketList) {
    // //     //loop through the existing data and create li items
    // //     products.forEach(function (product) {

    // //         let listItem = document.createElement('li');

    // //         listItem.textContent = `${products.name} - ${products.price.toFixed(2)}`

    // //         //Append the li element ot the ul
    // //         basketList.appendChild(listItem);
    // //     })


    // }
    
    console.log(products);