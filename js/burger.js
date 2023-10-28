// ב HTML
// צריך לשים איי די גם לאייקון של הבורגר
// וגם לנאב עצמו


function declareBtns(){
  let burger_btn = document.querySelector("#burger_btn");
  let nav_open = document.querySelector("#nav_open");
  burger_btn.addEventListener("click",function(){
    //
    (nav_open.style.display != "block") ?  nav_open.style.display = "block" :  nav_open.style.display = "none";
    // if(nav_open.style.display != "block"){
    //   nav_open.style.display = "block";
    // }
    // else{
    //   nav_open.style.display = "none";
    // }
  })
}

declareBtns();