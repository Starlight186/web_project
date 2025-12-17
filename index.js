let btn = document.querySelector(".my_btn");

btn.addEventListener("click", btn_click);

function btn_click(){
    document.querySelector(".services-section").classList.toggle("services-section_style");
}