async function loadData() {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

function displayHome() {
  const homeContainer = document.getElementById("home-container");
  homeContainer.innerHTML = `
      <h1>Welcome to Space Tourism</h1>
      <p>Explore the universe with our exclusive space tourism packages.</p>
      
  `;
}

function displayDestinations(destinations) {
  const destinationContainer = document.getElementById("destination-container");
  destinationContainer.innerHTML = "";

  destinations.forEach((destination) => {
    const destinationDiv = document.createElement("div");
    destinationDiv.classList.add("destination-card");

    destinationDiv.innerHTML = `
          <img class="destination-image" src="${destination.images.png}" alt="${destination.name}">
          <div class="destination-info">
              <h3>${destination.name}</h3>
              <p>${destination.description}</p>
              <p><strong>Distance:</strong> ${destination.distance}</p>
              <p><strong>Travel Time:</strong> ${destination.travel}</p>
          </div>
      `;
    destinationContainer.appendChild(destinationDiv);
  });
}

function displayCrew(crew) {
  const crewContainer = document.getElementById("crew-container");
  crewContainer.innerHTML = "";

  crew.forEach((member) => {
    const crewDiv = document.createElement("div");
    crewDiv.classList.add("crew-card");

    crewDiv.innerHTML = `
          <img class="crew-image" src="${member.images.png}" alt="${member.name}">
          <div class="crew-info">
              <h3>${member.name}</h3>
              <p><strong>Role:</strong> ${member.role}</p>
              <p>${member.bio}</p>
          </div>
      `;
    crewContainer.appendChild(crewDiv);
  });
}

function displayTechnology(technology) {
  const techContainer = document.getElementById("technology-container");
  techContainer.innerHTML = "";

  technology.forEach((item) => {
    const techDiv = document.createElement("div");
    techDiv.classList.add("technology-card");

    techDiv.innerHTML = `
          <img class="technology-image" src="${item.images.portrait}" alt="${item.name}">
          <div class="technology-info">
              <h3>${item.name}</h3>
              <p>${item.description}</p>
          </div>
      `;
    techContainer.appendChild(techDiv);
  });
}

function toggleVisibility(containerId) {
  const containers = document.querySelectorAll(".tab-contents");
  const links = document.querySelectorAll(".tab-links");
  const body = document.body;

  containers.forEach((container) => {
    container.style.display = container.id === containerId ? "block" : "none";
  });

  links.forEach((link) => {
    link.classList.remove("active-link");
  });

  const clickedLink = Array.from(links).find((link) =>
    link.getAttribute("onclick").includes(containerId)
  );
  clickedLink.classList.add("active-link");

  body.className = `${containerId.split("-")[0]}-active`;
}

document.addEventListener("DOMContentLoaded", async () => {
  const data = await loadData();

  displayHome();
  displayDestinations(data.destinations);
  displayCrew(data.crew);
  displayTechnology(data.technology);
});
