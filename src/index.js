const recipe = {
  eggs: 3,
  chocolate: 100,
  flour: 250,
  milk: 500, 
}

const addItems = {
  ...recipe,
  lemon: 5,
  orange: 5,
}

console.log('recipe: ', recipe);
console.log('addItems: ', addItems);