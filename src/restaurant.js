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
  
  if (food.type === "breakfast" && pizzaRestaurant.menus.breakfast){
    var y = pizzaRestaurant.menus.breakfast
    y.push(food)
  }
  else if (food.type === "lunch") {
    var z = pizzaRestaurant.menus.lunch
    z.push(food)
  }
  else {
    var x = pizzaRestaurant.menus.lunch
    x.push(food)
  }
}


// function addMenuItem(pizzaRestaurant, food) {

//   if (food.type === "breakfast") {
//     var y = pizzaRestaurant.menus.breakfast
//     y.push(food)
//   }
//   else if (food.type === "lunch") {
//     var z = pizzaRestaurant.menus.lunch
//     z.push(food)
//   }
//   else {
//     var x = pizzaRestaurant.menus.lunch
//     x.push(food)
//   }
// }



module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem
}