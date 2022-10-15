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
  console.log(pizzaRestaurant.menus.breakfast[0].name)
  var hi = pizzaRestaurant.menus.breakfast[0].name
  var hey = pizzaRestaurant.menus.dinner[0].name

  if (type === "breakfast"){
    if (hi === food) {
      pizzaRestaurant.menus.breakfast.splice(0, 1)
      return "No one is eating our Bacon and Eggs Pizza - it has been removed from the breakfast menu!"
    }
    else {
      return `Sorry, we don't sell ${food}, try adding a new recipe!`

    }
  }

  else if (type === "dinner") {
    if (hey === food){
      pizzaRestaurant.menus.dinner.splice(0, 1)
      return "No one is eating our Veggie Pizza - it has been removed from the dinner menu!"
    }
  } else {
    return `Sorry, we don't sell ${food}, try adding a new recipe!`
  }
}







module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}