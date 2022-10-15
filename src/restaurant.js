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
  if (food.type === "breakfast" && !pizzaRestaurant.menus.breakfast.includes(food)) {
    var y = pizzaRestaurant.menus.breakfast
    y.push(food)
  }
  else if (food.type === "lunch" && !pizzaRestaurant.menus.lunch.includes(food)) {
    var z = pizzaRestaurant.menus.lunch
    z.push(food)
  }
  else if (food.type === "dinner" && !pizzaRestaurant.menus.dinner.includes(food)) {
    var x = pizzaRestaurant.menus.dinner
    x.push(food)
  }
  }


///////////////////////////removeMenuItem Section///////////////////////

function removeMenuItem(pizzaRestaurant, food, type) {
if (type === "breakfast"){
  pizzaRestaurant.menus.breakfast.splice(0, 1)
  return "No one is eating our Bacon and Eggs Pizza - it has been removed from the breakfast menu!"
}
}










module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}