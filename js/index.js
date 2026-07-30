const paragraphs = document.querySelectorAll("p");
const navigation = document.querySelector(".navbar");
const links = document.querySelectorAll(".nav");
const h1 = document.querySelectorAll("h1");

//Dark Mode
function darkMode() {
  document.body.classList.toggle("dark");

  paragraphs.forEach((p) => {
    p.classList.toggle("dark");
  });
  navigation.classList.toggle("dark");

  links.forEach((nav) => {
    nav.classList.toggle("dark");
  });
  h1.forEach((h1) => {
    h1.classList.toggle("dark");
  });

  document.getElementById("contact").classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

function setTheme() {
  document.body.classList.add("dark");
  paragraphs.forEach((p) => {
    p.classList.add("dark");
  });
  navigation.classList.add("dark");

  links.forEach((nav) => {
    nav.classList.add("dark");
  });
  h1.forEach((h1) => {
    h1.classList.toggle("dark");
  });
  document.getElementById("contact").classList.add("dark");
}
//applytheme
function getTheme() {
  if (localStorage.getItem("theme") == "dark") {
    setTheme();
  }
  console.log(`${localStorage.getItem("theme")}`);
}

//About Page
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

//Contact Page
document.getElementById("ghPic").addEventListener("mouseover", () => {
  document.getElementById("ghPrompt").style.display = "flex";
});
document.getElementById("ghPic").addEventListener("mouseout", () => {
  document.getElementById("ghPrompt").style.display = "none";
});
document.getElementById("ghPic").addEventListener("click", () => {
  window.open("https://github.com/Jaurelus");
});

// Control behavior of the resume picture
function previewResume() {
  const res = document.getElementById("resumePic");

  //Change the opacity, and show helper text
  res.style.cursor = "pointer";
  res.style.opacity = 0.5;
  document.getElementById("resHelper").style.display = "contents";
  //Event listener for click
  res.addEventListener("click", () => {
    window.open("../Aurelus_Jayden_Resume.pdf", "_blank");
  });
  //Event listener for mosuse exit to undo everything
  res.addEventListener("mouseleave", () => {
    res.style.opacity = 1.0;
    document.getElementById("resHelper").style.display = "none";
  });
}
