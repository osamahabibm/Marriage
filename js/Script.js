const navMenu = document.getElementById("nav_menu"),
toggleMenu = document.getElementById("toggle-menu"),
classMenu = document.getElementById("close-menu")

toggleMenu.addEventListener('click',()=>{
navMenu.classList.toggle("show")
});

document.onclick = function(e){
    if(e.target.id !== 'toggle-menu' && e.target.id !== 'close-menu'){
    navMenu.classList.remove("show")
    }
}

classMenu.addEventListener('click',()=>{
navMenu.classList.remove("show")
});

