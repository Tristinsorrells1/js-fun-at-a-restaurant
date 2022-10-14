
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

function decreasePrice(menuItem) {
  return menuItem - (menuItem * .10)
}

//////////////////////////createRecipe Section///////////////////////

function createRecipe(food, title, ingredients, type) { 
  recipe = {
    title: nameMenuItem(food),
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


