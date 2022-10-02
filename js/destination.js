let planetID = 0;

const destinations = document.querySelectorAll(".destination-menu ul li");

destinations.forEach((item) => {
  item.addEventListener("click", function () {
    planetID = this.dataset.planet;
    changeContent();
  });
});

function changeContent() {
  fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".destination-image").src = data.destinations[planetID].images.webp;
      document.querySelector(".destination-name").textContent = data.destinations[planetID].name;
      document.querySelector(".destination-description").textContent = data.destinations[planetID].description;
      document.querySelector(".destination-distance").textContent = data.destinations[planetID].distance;
      document.querySelector(".destination-travel").textContent = data.destinations[planetID].travel;
    });
}

changeContent();
