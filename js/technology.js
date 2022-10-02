let technologyID = 0;

const technologies = document.querySelectorAll(".technology-menu-dot");

technologies.forEach((item) => {
  item.addEventListener("click", function () {
    technologyID = this.dataset.technology;
    changeContent();
  });
});

function changeContent() {
  fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".technology-image-portrait").src = data.technology[technologyID].images.portrait;
      document.querySelector(".technology-image-landscape").src = data.technology[technologyID].images.landscape;
      document.querySelector(".technology-name").textContent = data.technology[technologyID].name;
      document.querySelector(".technology-description").textContent = data.technology[technologyID].description;
    });
}

changeContent();
