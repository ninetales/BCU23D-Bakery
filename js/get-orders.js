

function welcomeMsg(user) {
    const headDiv = document.querySelector('.order__container .order__head')
    const headContent = headDiv.textContent

    const newContent = `${headContent} ${users[user].username}`

    headDiv.textContent = newContent
    
}

welcomeMsg(1)


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