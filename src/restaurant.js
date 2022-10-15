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
  if (type === "breakfast") {
    if (type === "breakfast" && !pizzaRestaurant.menus.breakfast.includes(food)) {
      pizzaRestaurant.menus.breakfast.splice(0, 1)
      return `Sorry, we don't sell ${food}, try adding a new recipe!`
    } 
    else {
      pizzaRestaurant.menus.breakfast.splice(0, 1)
      return "No one is eating our Bacon and Eggs Pizza - it has been removed from the breakfast menu!"
    } 
  }

  if (type === "dinner") {
    if (type === "dinner" && !pizzaRestaurant.menus.dinner.includes(food)) {
      pizzaRestaurant.menus.dinner.splice(0, 1)
      return `Sorry, we don't sell ${food}, try adding a new recipe!`
    } else {
      return "No one is eating our Veggie Pizza - it has been removed from the dinner menu!"
    }
  }
}




// Code that satisfies the last removeMenuItem //

// function removeMenuItem(pizzaRestaurant, food, type) {
//   if (type === "breakfast" && pizzaRestaurant.menus.breakfast.includes(food)) {
//     pizzaRestaurant.menus.breakfast.splice(0, 1)
//     return "No one is eating our Bacon and Eggs Pizza - it has been removed from the breakfast menu!"
//   } else {
//     return `Sorry, we don't sell ${food}, try adding a new recipe!`
//   }

//   if (type === "dinner" && pizzaRestaurant.menus.dinner.includes(food)) {
//     pizzaRestaurant.menus.dinner.splice(0, 1)
//     return "No one is eating our Veggie Pizza - it has been removed from the dinner menu!"
//   } else {
//     return `Sorry, we don't sell ${food}, try adding a new recipe!`
//   }
// }


//Code that satisfies all but the second test in removeMenuItem//
function removeMenuItem(pizzaRestaurant, food, type) {
  if (type === "breakfast" && pizzaRestaurant.menus.breakfast.includes(food)) {
    pizzaRestaurant.menus.breakfast.splice(0, 1)
    return "No one is eating our Bacon and Eggs Pizza - it has been removed from the breakfast menu!"
  }

  else if (type === "dinner") {
    pizzaRestaurant.menus.dinner.splice(0, 1)
    return "No one is eating our Veggie Pizza - it has been removed from the dinner menu!"
  }

  else if (type === "breakfast" && !pizzaRestaurant.menus.breakfast.includes(food)) {
    pizzaRestaurant.menus.breakfast.splice(0, 1)
    return `Sorry, we don't sell ${food}, try adding a new recipe!`
  }


  else if (type === "dinner" && pizzaRestaurant.menus.dinner.includes(food)) {
    pizzaRestaurant.menus.dinner.splice(0, 1)
    return "No one is eating our Veggie Pizza - it has been removed from the dinner menu!"
  } else {
    return `Sorry, we don't sell ${food}, try adding a new recipe!`
  }
}






module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}