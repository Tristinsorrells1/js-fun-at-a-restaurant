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
//breakfast is an object which is why includes(food) isn't working

function removeMenuItem(pizzaRestaurant, food, type) {
  for (var i = 0; i < pizzaRestaurant.menus[type].length; i++) {
    if (food === pizzaRestaurant.menus[type][i].name) {
      pizzaRestaurant.menus[type].splice(0, 1)
      return `No one is eating our ${food} - it has been removed from the ${type} menu!`
    }
  }
  return `Sorry, we don't sell ${food}, try adding a new recipe!`
}
  









module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}