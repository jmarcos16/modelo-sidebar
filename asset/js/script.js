let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
let sidebarBtnMobile = document.querySelector("#close-menu");

sidebarBtnMobile.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
    arrowParent.classList.toggle("showMenu");
    console.log(arrowParent);
  });
}

let width = screen.width;
if (width < 600) {
  sidebar.classList.remove("close");
}
