// 



let button = document.querySelector(`nav .button`);

let sidebar = document.querySelector(`.sidebar`);

function sidebarToggler () {
   sidebar.classList.toggle(`active`);

   if (sidebar.classList.contains("active") == true) {
    button.innerHTML = `<i class="fa-sharp fa-regular fa-xmark"></i>`;
 }
 else{
    button.innerHTML = `<i class="fa-solid fa-bars"></i>`;
 }
}



button.addEventListener( "click" ,  sidebarToggler);
