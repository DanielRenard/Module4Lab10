fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((json)=> addCard(json));

function addCard(json) {
    console.log(json),
    json.forEach((item) => {
         const template = document
        .getElementById("card-template")
        .content.cloneNode(true);
      template.querySelector(".card-title").innerText = item.title;
      template.querySelector(".card-img").src = item.image;
      template.querySelector(".card-price").innerText = item.price;
      template.querySelector(".card-text").innerText = item.description;
      document.querySelector("#card-list").appendChild(template);
    }
    );
}