////////////////////////////takeOrder Section///////////////////////

function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3)
  deliveryOrders.push(order)
}

////////////////////////////refundOrder Section///////////////////////

function refundOrder(orderNum, deliveryOrders2) {
for (var i= 0; i <deliveryOrders2.length; i++)
  deliveryOrders2.shift(orderNum[i])
}

module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}