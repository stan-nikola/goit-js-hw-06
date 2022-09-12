const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsNamesMarkup = ingredients.map((name) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = name;
  ingredientEl.classList.add("item");

  return ingredientEl;
});

const ingredientsContainer = document.querySelector("#ingredients");
ingredientsContainer.append(...ingredientsNamesMarkup);
