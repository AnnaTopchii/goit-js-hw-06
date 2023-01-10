const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeList = ingredients => {
  return ingredients.map(ingredient => {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    listItem.classList.add('item');
    return listItem
  })
}

const listEl = makeList(ingredients);
const list = document.querySelector("#ingredients");
list.append(...listEl)

