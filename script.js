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

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }