const contactbtn = document.getElementById("contact");
const darkmodebtn = document.getElementById("darkmode");
const paragraphs = document.querySelectorAll("p");
const navigation = document.querySelector(".navbar");
const links = document.querySelectorAll(".nav");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const slideshowBox = document.querySelector(".slideshowbox");
//Contact Button
contactbtn.addEventListener("click", function () {
  window.location.href = "mailto:jaurelus12@gmail.com";
});

//Dark Mode
function darkMode() {
  document.documentElement.classList.toggle("dark");
  document.body.classList.toggle("dark");

  paragraphs.forEach((p) => {
    p.classList.toggle("dark");
  });
  navigation.classList.toggle("dark");

  links.forEach((nav) => {
    nav.classList.toggle("dark");
  });
  document.querySelector("h1").classList.toggle("dark");
  slideshowBox.classList.toggle("dark");

  document.getElementById("contact").classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

function setTheme() {
  document.documentElement.classList.add("dark");
  document.body.classList.add("dark");
  paragraphs.forEach((p) => {
    p.classList.add("dark");
  });
  navigation.classList.add("dark");

  links.forEach((nav) => {
    nav.classList.add("dark");
  });
  document.querySelector("h1").classList.add("dark");
  slideshowBox.classList.add("dark");
  document.getElementById("contact").classList.add("dark");
  document.getElementById("darkMode").classList.add("dark");
}
//applytheme
function getTheme() {
  if (localStorage.getItem("theme") == "dark") {
    setTheme();
  }
  console.log(`${localStorage.getItem("theme")}`);
}
/*
//Slideshow
const pics = document.querySelectorAll(".slideshowPics");
let i = 0;
//Next button shows next image
document.getElementById("next").addEventListener("click", () => {
  pics[i].style.display = "none";
  i = (i + 1) % pics.length;
  pics[i].style.display = "flex";
});

document.getElementById("nextMobile").addEventListener("click", () => {
  pics[i].style.display = "none";
  i = (i + 1) % pics.length;
  pics[i].style.display = "flex";
});

//Previous button shows previous image

document.getElementById("prev").addEventListener("click", () => {
  pics[i].style.display = "none";
  i = (i + pics.length - 1) % pics.length;
  pics[i].style.display = "flex";
});
document.getElementById("prevMobile").addEventListener("click", () => {
  pics[i].style.display = "none";
  i = (i + pics.length - 1) % pics.length;
  pics[i].style.display = "flex";
});
*/
let i = 0;
function nextPic() {
  const pics = document.querySelectorAll(".slideshowPics");
  //Next button shows next image
  pics[i].style.display = "none";
  i = (i + 1) % pics.length;
  pics[i].style.display = "flex";
}
function prevPic() {
  const pics = document.querySelectorAll(".slideshowPics");
  pics[i].style.display = "none";
  i = (i + pics.length - 1) % pics.length;
  pics[i].style.display = "flex";
}
