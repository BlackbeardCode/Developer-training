//Change pos/background/padding/add shadow on nav when scroll event happens
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    document.querySelector("nav").classList.add("nav");
  } else {
    document.querySelector("nav").classList.remove("nav");
  }
}

const user = document.querySelector(".sidenav");
const openUser = document.querySelector(".openUser");
const setup = document.querySelector(".sidenav_setup");
const openSetup = document.querySelector(".openSetup");
const closeBtn = document.querySelectorAll(".closebtn");

openUser.addEventListener("click", (e) => {
  e.preventDefault();
  if (setup.className == "sidenav_setup") {
    setup.classList.add("hidden");
    user.classList.remove("hidden");
    console.log("add class hidden to setup and remove hidden to user");
  } else if (user.className == "sidenav") {
    user.classList.add("hidden");
    console.log("add hidden class to user");
  } else {
    user.classList.remove("hidden");
    console.log("remove class hidden to user");
  }
});

openSetup.addEventListener("click", (e) => {
  e.preventDefault();
  if (user.className == "sidenav") {
    user.classList.add("hidden");
    setup.classList.remove("hidden");
    console.log("add class hidden to user and remove hidden to setup");
  } else if (setup.className == "sidenav_setup") {
    setup.classList.add("hidden");
    console.log("add hidden class to setup");
  } else {
    setup.classList.remove("hidden");
    console.log("remove class hidden to setup");
  }
});

for (let i = 0; i < closeBtn.length; i++)
  closeBtn[i].addEventListener("click", (e) => {
    e.preventDefault();
    if (user.className == "sidenav") {
      console.log("close btn user");
      user.classList.add("hidden");
    }
    if (setup.className == "sidenav_setup") {
      console.log("close btn setup");
      setup.classList.add("hidden");
    }
  });
