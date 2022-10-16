
////////////////////////////nameMenuItem Section///////////////////////
function nameMenuItem(name) {
    return `Delicious ${name}`
  }

// nameMenuItem();



////////////////////////////createMenuItem Section///////////////////////

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type
  }

  return menuItem

}

//createMenuItem();

////////////////////////////addIngredients Section///////////////////////

function addIngredients(food, ingredients) {
  if (ingredients.includes(food)) {
    return
  }
  else {
  ingredients.push(food);

  }

}

///////////////////////////formatPrice Section///////////////////////

function formatPrice(price) {
  return `$${price}`
}


//////////////////////////decreasePrice Section///////////////////////

function decreasePrice(price) {
  return price - (price * .10)
}

//////////////////////////createRecipe Section///////////////////////

function createRecipe(title, ingredients, type) { 
  recipe = {
    title: title,
    ingredients: ingredients,
    type: type
  }

  return recipe
}




module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


