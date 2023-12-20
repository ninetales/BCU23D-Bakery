let logged = localStorage.getItem('logged')
  ? parseInt(localStorage.getItem('logged'))
  : 0;

let switchTxt = localStorage.getItem('switchTxt')
  ? String(localStorage.getItem('switchTxt'))
  : 'Admin';


// Returns orders for spicific user based on ID, or all orders if its the Admin ID 1...
function userOrders(orders, userId) {
  if (userId === 0) {
    return orders;
  } else {
    return orders.filter((order) => order.user_id === userId);
  }
}

// Manipulates the h2 element to match the current logged user...
function welcomeMsg(loggedId) {
  const headDiv = document.querySelector('.order__container .order__head');
  const headContent = headDiv.textContent;
  console.log(loggedId);

  const newContent = `Order History - ${users[loggedId].username}`;

  headDiv.textContent = newContent;
}

// Returns process status, and delivery date if true
function statusOrders(order) {
  if (!order.processed) {
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
      logged === 0
        ? `Order ID: ${order.id} User: ${users[order.user_id].username}`
        : `Order ID: ${order.id}`,
      `Order date: ${order.order_date}`,
      !order.processed
        ? `Order is beeing processed...`
        : `Estimate delivery: ${order.lev_date}`
    );

    let total = 0;
    order.order_products.forEach((product) => {
      const item = products[product.product_id];
      const pkg_amount = `${item.itemsPerPackage}`;
      const pkg_ordered = `${product.amount_pkg}`;
      const price = `${item.price.regular}`;
      const price_tot = `${price * pkg_ordered}`;

      ordersArray.push(
        `${item.name} - ${pkg_ordered} /Pkg (${pkg_amount} pieces) = ${pkg_ordered} x ${price}$ = ${price_tot}$`
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

  console.log(ordersArray);

  for (let i = 0; i < lengthOrders; i++) {
    const orderCard = document.createElement('div');
    const leftOrder = document.createElement('div');
    const rightOrder = document.createElement('div');

    orderCard.setAttribute('class', 'card card__order');
    leftOrder.setAttribute('class', 'order__left');
    rightOrder.setAttribute('class', 'order__right');

    const lengthRecipe = ordersArray[i].length - 1;

    for (let y = 0; y < lengthRecipe; y++) {
      const item = ordersArray[i][y];
      const left = y < 2;

      if (y < 3) {
        if (
          logged === 0 &&
          y === 2 &&
          item === `Order is beeing processed...`
        ) {
          const processBtn = document.createElement('button');
          processBtn.setAttribute('class', 'process__btn');
          processBtn.textContent = 'Process Order';

          leftOrder.appendChild(processBtn);
        } else {
          const h3Element = document.createElement('h3');
          h3Element.textContent = item;

          leftOrder.appendChild(h3Element);
        }
      } else {
        const pElement = document.createElement('p');
        pElement.textContent = item;
        rightOrder.appendChild(pElement);
      }
    }
    const pElement = document.createElement('p');
    const h3Element = document.createElement('h3');
    h3Element.textContent = ordersArray[i][lengthRecipe];
    pElement.textContent = '-----------------------------';

    rightOrder.appendChild(pElement);
    rightOrder.appendChild(h3Element);

    orderCard.appendChild(leftOrder);
    orderCard.appendChild(rightOrder);
    orderList.appendChild(orderCard);
  }
}

const switchBtn = document.getElementById('user__switch');
switchBtn.textContent = switchTxt;  

switchBtn.addEventListener('click', (e) => {
  logged = logged === 0 ? 1 : 0;
  switchTxt = switchTxt === 'Admin' ? 'User' : 'Admin'

  localStorage.setItem('logged', logged);
  localStorage.setItem('switchTxt', switchTxt)

  window.location.reload();

  // welcomeMsg(logged);
});

welcomeMsg(logged);
createListElements();
