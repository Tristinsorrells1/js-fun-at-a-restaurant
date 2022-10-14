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
// the deliveryOrderArray contains 3 objects, we want to all of the item keys 

function listItems(deliveryOrderArray) {
  var newArray = deliveryOrderArray
  for (var i = 0; i < deliveryOrderArray.length; i++) {
    newArray.push(deliveryOrderArray[i].item)
    console.log(deliveryOrderArray[i].item)
  }
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}