const logged = 0;
const loggedUser = users[logged];

// Returns orders for spicific user based on ID, or all orders if its the Admin ID 1...
function userOrders(orders, userId) {
  if (userId === 0) {
    return orders;
  } else {
    return orders.filter((order) => order.user_id === userId);
  }
}

// Manipulates the h2 element to match the current logged user...
function welcomeMsg(loggedUser) {
  const headDiv = document.querySelector('.order__container .order__head');
  const headContent = headDiv.textContent;

  const newContent = `${headContent} ${users[logged].username}`;

  headDiv.textContent = newContent;
}

// Returns process status, and delivery date if true
function statusOrders(order) {
  if (!order.process_date) {
    if (logged === 0) {
      return `Needs to be processed.`;
    } else {
      return `Waiting to be processed.`;
    }
  } else {
    return `Estimated delivery date ${order.lev_date}`;
  }
}

// Returns an array of strings collected from the orders dummy...
function printOrders(orders) {
  const elementsArray = [];
  orders.forEach((order) => {
    const status = statusOrders(order);
    const ordersArray = [];
    ordersArray.push(
      `Order date: ${order.order_date}`,
      `${status}`
    );

    let total = 0;
    order.order_products.forEach((product) => {
      const item = products[product.product_id];
      const pkg_amount = `${item.itemsPerPackage}`;
      const pkg_ordered = `${product.amount_pkg}`;
      const price = `${item.price.regular}`;
      const price_tot = `${price * pkg_ordered}`;

      ordersArray.push(
        `${item.name} - ${pkg_ordered}(x${pkg_amount}) = ${pkg_ordered} x ${price}$ = ${price_tot}$`
      );
      total = total + Number(price_tot);
    });
    ordersArray.push(`Total: ${total}$`);
    elementsArray.push(ordersArray);
  });
  return elementsArray;
}

function createListElements() {
  const orderList = document.querySelector('#order__main .order__list');
  const ordersArray = printOrders(userOrders(orders, logged));
  const lengthOrders = ordersArray.length;

  for (let i = 0; i < lengthOrders; i++) {
    const orderCard = document.createElement('div');
    const leftOrder = document.createElement('div');
    const rightOrder = document.createElement('div');

    orderCard.setAttribute('class', 'card card__order');
    leftOrder.setAttribute('class', 'order__left');
    rightOrder.setAttribute('class', 'order__right');

    const lengthRecipe = ordersArray[i].length -1;

    for (let y = 0; y < lengthRecipe; y++) {
        const item = ordersArray[i][y];
        const left = y < 2;

        if (left) {
            const h3Element = document.createElement('h3');
            h3Element.textContent = item;

            leftOrder.appendChild(h3Element);

            if(logged === 0){

            }
        }else {
            const pElement = document.createElement('p');
            pElement.textContent = item;
            rightOrder.appendChild(pElement);
        }
    }
    const pElement = document.createElement('p');
    const h3Element = document.createElement('h3');
    h3Element.textContent = ordersArray[i][lengthRecipe];
    pElement.textContent = '-----------------------------'

    rightOrder.appendChild(pElement)
    rightOrder.appendChild(h3Element);

    orderCard.appendChild(leftOrder)
    orderCard.appendChild(rightOrder)
    orderList.appendChild(orderCard);
  }
}

welcomeMsg(logged);
createListElements();
