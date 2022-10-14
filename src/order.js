////////////////////////////takeOrder Section///////////////////////

function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length < 3)
  deliveryOrders.push(order)
}

////////////////////////////refundOrder Section///////////////////////

function refundOrder(orderNum, deliveryOrders2) {
  for (var i = 0; i < deliveryOrders2.length; i++) {
    if (deliveryOrders2[i].orderNumber === orderNum) {
       return deliveryOrders2.splice(i, 1)
      
  }
}
}

////////////////////////////listItems Section///////////////////////

function listItems(deliveryOrderArray) {
  var x = []
  for (var i = 0; i < deliveryOrderArray.length; i++) {
    x.push(deliveryOrderArray[i].item)
  } 
  return x.join(", ")
}



////////////////////////////searchOrder Section///////////////////////

function searchOrder(ordersArray, food) {
  var x = false
  for (var i = 0; i < ordersArray.length; i++) {
    if (ordersArray[i].item === food) {
      x = true
    }
}
   return x
} 



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}