const currentlocation = location.href;
const menuItem = document.querySelectorAll('a')
const menulength = menuItem.length;
for (let i = 0; i < menulength; i++) {
  if (menuItem[i].href === currentlocation) {
    menuItem[i].className = "active";
  }
}