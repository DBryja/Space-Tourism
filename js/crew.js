let crewID = 0;

const crewMembers = document.querySelectorAll(".crew-menu-dot");

crewMembers.forEach((item) => {
  item.addEventListener("click", function () {
    crewID = this.dataset.crew;
    console.log(crewID);
    changeContent();
  });
});

function changeContent() {
  fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".crew-image").src = data.crew[crewID].images.webp;
      document.querySelector(".crew-role").textContent = data.crew[crewID].role;
      document.querySelector(".crew-name").textContent = data.crew[crewID].name;
      document.querySelector(".crew-bio").textContent = data.crew[crewID].bio;
    });
}

changeContent();
