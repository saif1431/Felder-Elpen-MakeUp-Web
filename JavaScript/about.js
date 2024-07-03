const aboutMenu = document.querySelector('.aboutSect2');
const menubars  = document.querySelector('.menubar');
const closeTag  = document.querySelector('.close')

menubars.addEventListener('click', ()=>{
aboutMenu.style.display = "block";
  aboutMenu.style.width = "100%";
  aboutMenu.style.transform = "translateX(-50%)";
})

closeTag.addEventListener("click", () => {
      aboutMenu.style.transform = "translateX(100%)";
    })
