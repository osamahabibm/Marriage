//pagination  
$(function () {

    /* initiate the plugin */
    $("div.holder6").jPages({
        containerID: "itemContainer6",
        perPage: 9
    });
    $("div.holder7").jPages({
        containerID: "itemContainer7",
        perPage: 9

    });
  $("div.holder8").jPages({
        containerID: "itemContainer8",
        perPage: 9

    });

      $("div.holder9").jPages({
        containerID: "itemContainer9",
        perPage: 8

    });

        $("div.holder10").jPages({
        containerID: "itemContainer10",
        perPage: 8

    });



});

const currentlocation = location.href;
const menuItem = document.querySelectorAll('a')
const menulength = menuItem.length;
for (let i = 0; i < menulength; i++) {
  if (menuItem[i].href === currentlocation) {
    menuItem[i].className = "active";
  }
}


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



////////// tab in page html and pager
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";

  evt.currentTarget.className += " active";
}

var name = "0";

document.getElementById(name).click();
   
    

   $(".redmore-btn").on("click", function () {
        $(this).parent().toggleClass("showContent");

          var repleceText = $(this).parent().hasClass("showContent")
        ? "إقرأ أقل ^ "
        : " ⌵ إقرأ المزيد";
      $(this).text(repleceText);
      });
    

    