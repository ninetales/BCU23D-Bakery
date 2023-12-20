const loggedUser = users[logged]
console.log(loggedUser);


// Returns orders for spicific user based on ID, or all orders if its the Admin ID 1...
function userOrders(orders, userId) {
    if (userId === 0){
        return orders
    }else {
        console.log(userId);
        
        return orders.filter( order =>  order.user_id === userId)
    }
}

// Manipulates the h2 element to match the current logged user...
function welcomeMsg(loggedUser) {
    const headDiv = document.querySelector('.order__container .order__head')
    const headContent = headDiv.textContent

    const newContent = `${headContent} ${users[logged].username}`

    headDiv.textContent = newContent
}

welcomeMsg(logged)

console.log(userOrders(orders, logged));





// const main = document.getElementById('main');
// const headDiv = document.createElement('div');
// const ordersDiv = document.createElement('div').setAttribute('class', 'order__list');
// const orderCard = document.createElement('div').setAttribute('class', 'card order__card')

// console.log(`Welcome ${users[logged-1].username} !`)

// function listOrders(orders) {

//     if ( logged === 1 ) {
//         const ordersTot = orders.length
//         const welcomeMsg = document.createElement('h1')
//         const infoMsg = document.createElement('p')
//         welcomeMsg.textContent = `Welcome ${users[logged-1].username} !`
//         infoMsg.textContent = `There are ${ordersTot} orders in total!`

//         headDiv.append(welcomeMsg)
//         headDiv.append(infoMsg)

//         orders.forEach(order => {
//             const userInfo = `ID: ${order.user_id} - ${users[order.user_id].username}`
//             console.log( userInfo )
//         });

//         main.append(headDiv)
//     }
// }

// listOrders(orders);