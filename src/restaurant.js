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
// we are adding an object inside the pizzaRestaurant object


function addMenuItem(pizzaRestaurant, food) {
  if (food.type === "lunch" && !pizzaRestaurant.menus.lunch.includes(food)) {
    pizzaRestaurant.menus.lunch.push(food) 
  } else if (food.type === "breakfast" && !pizzaRestaurant.menus.breakfast.includes(food)) {
    pizzaRestaurant.menus.breakfast.push(food) 
  } else if (food.type === "dinner" && !pizzaRestaurant.menus.dinner.includes(food)) {
    pizzaRestaurant.menus.dinner.push(food)
  }
  }


///////////////////////////removeMenuItem Section///////////////////////

function removeMenuItem(pizzaRestaurant, food, type) {
for (var i =0; i < pizzaRestaurant.menus[type].length; i++) {
  if (pizzaRestaurant.menus[type][i].name === food) {
    pizzaRestaurant.menus[type].splice(i, 1)
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