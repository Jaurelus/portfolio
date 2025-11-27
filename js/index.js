const contactbtn = document.getElementById("contact");
const darkmodebtn= document.getElementById("darkmode")
const paragraphs = document.querySelectorAll("p")
const navigation = document.querySelector(".navbar")
const links = document.querySelectorAll(".nav")
const prev = document.getElementById("prev")
const next = document.getElementById("next")

//Contact Button
contactbtn.addEventListener("click", function() {
    window.location.href="mailto:jaurelus12@gmail.com"
});


//Dark Mode
function darkMode(){
    document.body.classList.toggle("dark");

    paragraphs.forEach(p=>{
        p.classList.toggle("dark");
    })
    navigation.classList.toggle("dark");

    links.forEach(nav=>{
        nav.classList.toggle("dark");
    })
    document.querySelector("h1").classList.toggle("dark");

    document.getElementById("contact").classList.toggle("dark")


    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark")
    }
    else{localStorage.setItem("theme", "light")}
}


function setTheme(){
document.body.classList.add("dark");
paragraphs.forEach(p=>{
        p.classList.add("dark");
    })
    navigation.classList.add("dark");

    links.forEach(nav=>{
        nav.classList.add("dark");
    })
    document.querySelector("h1").classList.add("dark");
    document.getElementById("contact").classList.add("dark")

}
//applytheme
function getTheme(){

if(localStorage.getItem("theme")=="dark"){
setTheme();
}
console.log(`${localStorage.getItem("theme")}` );
}


/*
document.getElementById("p1").addEventListener("click", (event)=>{
    event.preventDefault();
    if(navigation.classList.contains("dark")){
        window.location.href = "index.html"
        getTheme();
    }
})

    

document.getElementById("p2").addEventListener("click", (event)=>{
    event.preventDefault();
   if(navigation.classList.contains("dark")){
        getTheme();
        window.location.href = "about.html"
        getTheme();
}
})

document.getElementById("p3").addEventListener("click", (event)=>{
    event.preventDefault();
    if(navigation.classList.contains("dark")){
        window.location.href = "portfolio.html"
    getTheme();
}
})

/*
darkmodebtn.addEventListener("click", function(){
    paragraphs.forEach(p=>{
        p.classList.toggle("dark");
    })
}
)

darkmodebtn.addEventListener("click", function(){
    navigation.classList.toggle("dark");
})

darkmodebtn.addEventListener("click", function(){
    links.forEach(nav=>{
        nav.classList.toggle("dark");
    })
darkmodebtn.addEventListener("click", ()=>{
    document.querySelector("h1").classList.toggle("dark");
})
})
*/