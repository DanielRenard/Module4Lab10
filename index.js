fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((json) => addCard(json));

function addCard(json) {
  json.forEach((item) => {
    const template = document
      .getElementById("card-template")
      .content.cloneNode(true);
    template.querySelector(".card-title").innerText = item.title;
    template.querySelector(".card-img").src = item.image;
    template.querySelector(".card-price").innerText = item.price;
    template.querySelector(".card-text").innerText = item.description;
    document.querySelector("#card-list").appendChild(template);
  });
}

// fetch("https://fakestoreapi.com/products")
//   .then((response) => response.json())
//   .then((json) => filteredCard(json, currentCategory));

function filteredCard(json, category) {
  const filterMen = json.filter(function (item) {
    return item.category === category;
  });
  console.log(filterMen);
  filterMen.forEach((item) => {
    const template = document
      .getElementById("card-template")
      .content.cloneNode(true);
    template.querySelector(".card-title").innerText = item.title;
    template.querySelector(".card-img").src = item.image;
    template.querySelector(".card-price").innerText = item.price;
    template.querySelector(".card-text").innerText = item.description;
    document.querySelector("#card-list").appendChild(template);
  });
}

function selectCategories(event) {
  console.log(event.target.value);
  const currentCategory = event.target.value;
  const cardList = document.querySelector("#card-list");
  console.log(cardList);
  while (cardList.hasChildNodes()) {
    cardList.removeChild(cardList.firstChild);
  }
  if (currentCategory === "all categories") {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => addCard(json));
  } else {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => filteredCard(json, currentCategory));
  }
}
