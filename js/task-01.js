const categories = document.querySelector("#categories").children;

const categoriesLength = categories.length;
console.log(`Number of categories: ${categoriesLength}`);

const categoryEl = [...categories].map((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.children[1].children.length}`);
});
