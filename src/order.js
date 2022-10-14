////////////////////////////takeOrder Section///////////////////////

function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3)
  deliveryOrders.push(order)
}

////////////////////////////refundOrder Section///////////////////////

// function refundOrder(orderNum, deliveryOrders2) {
//   for (var i =0; i < deliveryOrders2.length; i++)
//     console.log([i])
//     return deliveryOrders2.shift(deliveryOrders2[i].orderNumber)
// }

function refundOrder(orderNum, deliveryOrders2) {
  for (var i = 0; i < deliveryOrders2.length; i++) {
  console.log(deliveryOrders2[i].orderNumber)
    if (deliveryOrders2[i].orderNumber === orderNum) {
       return deliveryOrders2.splice(i, 1)
      
  }
}
}



module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}