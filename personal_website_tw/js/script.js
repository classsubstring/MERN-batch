console.log("script loaded");

// document.body.style.backgroundColor = "red";

const bannerButton = document.getElementById("banner_button");

const bannerHeading = document.getElementById("banner_heading");

// console.log(bannerButton.innerText);
// bannerButton.innerText="Start Learning"

bannerButton.addEventListener("mouseenter", function () {
  // code button click
  console.log("button clicked");
  //wo sara code jo click pe karana hai
  bannerHeading.innerText = "Welcome back to our website.";
  //   bannerHeading.style.color = "red";
  bannerHeading.classList.add("text-5xl");
  bannerHeading.classList.add("font-normal");

  bannerButton.classList.remove("bg-gray-200");
  bannerButton.classList.remove("text-gray-800");
  bannerButton.classList.add("bg-blue-700");
  bannerButton.classList.add("text-blue-50");
  bannerButton.classList.add("text-xl");
});

const services = document.getElementsByClassName("service");
console.log(services.length);

for (const service of services) {
  service.classList.add("bg-red-500");
}

const bannerHead = document.querySelector("#banner_heading");
console.log(bannerHead.innerText);

const servicessss = document.querySelectorAll(".services");
