let navMenuIcon = document.getElementById("nav-menu");
const screenBlank = document.getElementById("blank");
const sidebar = document.getElementById("sidebar-container");



// nav script
navMenuIcon.addEventListener("click", function displayNav(params) {
    sidebar.classList.add("sidebar-container--active")
    })

function removeNav(){
    sidebar.classList.remove("sidebar-container--active")
}





//radio and check dropdown
const  checkDd = document.getElementById("span-dropdown");
const radioWrapper = document.getElementById("radio-wrapper");

checkDd.addEventListener("click", function radioDrop(params) {
    radioWrapper.classList.toggle("radio-check-wrapper--active");
    
})


// icon and sticker select
const icon = document.getElementById("radio-icon");
const sticker = document.getElementById("stickers")
const checkBox = document.getElementById("checkbox")
const form = document.getElementById("form");


icon.addEventListener("click", function x(params) {
    radioWrapper.classList.remove("radio-check-wrapper--active")
    if (icon.click) {
        form.textContent = " Icon "}
    } );
    sticker.addEventListener("click", function x(params) {
        radioWrapper.classList.remove("radio-check-wrapper--active")
        if (sticker.click) {
            form.textContent = " stickers "}
        } );
        checkBox.addEventListener("click", function x(params) {
            radioWrapper.classList.remove("radio-check-wrapper--active")
            if (checkBox.click) {
            let check = document.getElementById("form").innerText;
            if (!check.includes("packs")) {
                check += " packs";
                form.textContent = check
            }
        }
    } );
    
    
    
    // icon search script
    
{ var inputText = document.getElementById("search");
    var clearText = document.getElementById("clear-text");
    
    inputText.addEventListener("click", function() {
       clearText.classList.add("clear-text--active")
    })
    clearText.addEventListener("click",function () {
        inputText.value = " "
        clearText.classList.remove("clear-text--active")
    })
}



//footer dropdown
 {let dropContent = document.querySelectorAll(".footer-ii-ul");

        function firstDropdown() {
           dropContent[0].classList.toggle("footer-ii-ul--active");
        }
        function secondDropdown() {
           dropContent[1].classList.toggle("footer-ii-ul--active");
        }
        function thirdDropdown() {
           dropContent[2].classList.toggle("footer-ii-ul--active");
        }
        function fourthDropdown() {
           dropContent[3].classList.toggle("footer-ii-ul--active");
        }
 }


// slide
const slideBar = document.getElementById("slide");
const slidePanel = document.getElementById("slide-panel");

slidePanel.addEventListener("click", function slide(params) {
    slideBar.classList.toggle("slide--active");
})