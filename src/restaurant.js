///////////////////////////createRestaurant Section///////////////////////

function createRestaurant(name) {
 var pizzaRestaurant = {
    name: name,
    menus: { 
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return pizzaRestaurant
}

///////////////////////////addMenuItem Section///////////////////////



function addMenuItem(pizzaRestaurant, food) {
  var x = pizzaRestaurant.menus.lunch
  x.push(food)
}




module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem
}