
const weedingMenu = document.querySelector('.weeding-sect2');
const menu  = document.querySelector('.menubar');
const closeIcon  = document.querySelector('.close')

menu.addEventListener('click', ()=>{
      weedingMenu.style.display = "block";
      weedingMenu.style.width = "100%";
      weedingMenu.style.transform = "translateX(-50%)";
})

closeIcon.addEventListener("click", () => {
      weedingMenu.style.transform = "translateX(100%)";
    })


    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });