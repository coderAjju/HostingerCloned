let menu = document.querySelector("#menu_btn")
let mobile_view = document.querySelector("#Mobile_view")
let close_menu = document.querySelector("#close_menu")
let mobile_navBar = document.querySelector("#laptop_view")
let hosting_btn = document.querySelector("#hostig_btn")
let hosting_list = document.querySelector("#hosting_list")
let rotate_icon = document.querySelector("#rotate_icon")

menu.addEventListener("click", () => {
    mobile_view.style.display = "block"
    mobile_navBar.style.display = "none"
})
close_menu.addEventListener("click", () => {
    mobile_view.style.display = "none"
    mobile_navBar.style.display = "flex"
})

let rotate_val = true;
hosting_btn.addEventListener("click", (e) => {
    e.stopPropagation();
    hosting_list.classList.toggle("hosting_list")
    if (rotate_val) {
        rotate_icon.style.transform = "rotate(180deg)"
        rotate_val = false;
    }
    else {
        rotate_icon.style.transform = "rotate(0deg)"
        rotate_val = true;
    }
})
document.addEventListener("click", () => {
    if (hosting_list.classList.contains("hosting_list")) {
        hosting_list.classList.remove('hosting_list');
        rotate_icon.style.transform = "rotate(0deg)"
        rotate_val = true;
    }
})



// -----------------chevron----------------
let plan1 = document.querySelector("#plan1")
let plan2 = document.querySelector("#mostPopular_Plan")
let plan3 = document.querySelector("#plan2")

let chevron_left = document.querySelector(".fa-chevron-left")
let chevron_right = document.querySelector(".fa-chevron-right")

counter = 0

chevron_left.addEventListener("click", function () {
    counter--;
    if (counter == -1) {
        plan1.style.display = "block"
        plan2.style.display = "none"
    }
})


// ----------------restriction for 630px above and 1230px below-------------------
if (window.innerWidth > 630 && window.innerWidth < 1230) {
    let body = document.querySelector("body")
    body.style.display = "grid"
    body.style.placeItems = "center"
    body.style.minHeight = "100vh"
    body.innerHTML = "Open website in only mobile and laptop";
}


// --------------hide navbar box shadow on particular div----------------
document.addEventListener("DOMContentLoaded", function () {
    var navbar = mobile_navBar;
    var targetDiv = document.getElementById("securityFeature");

    window.addEventListener("scroll", function () {
        var targetDivOffset = targetDiv.offsetTop;
        var scrollPosition = window.scrollY + 80;
        if (scrollPosition > targetDivOffset && scrollPosition < (targetDiv.offsetTop + targetDiv.offsetHeight)) {
            navbar.classList.remove("shadow-lg");
        } else {
            navbar.classList.add("shadow-lg");
        }
    });
});




// ------------------- this code will change footer ul>li color ------------
let li_es = document.querySelectorAll(".ul__ li");
let lengthOf = li_es.length

for (let x of li_es) {
    x.style.color = "#2f1c6a";
    x.addEventListener('mouseover', function () {
        this.style.color = '#5025d1';
    });
    x.addEventListener('mouseout', function () {
        this.style.color = '#2f1c6a';
    });
}

// -------------------this code will display the block ul tag -----------------
// if (document.innerWidth < 530) {

// }
let value = true;
let h1Tag = document.querySelectorAll(".displayUL");
h1Tag.forEach(elem => {
    elem.addEventListener("click", (item) => {
        let ultag = elem.nextElementSibling
        let firstChild = elem.childNodes[1].nextElementSibling;
        firstChild.style.transition = "all 0.3s linear"
        if (value) {
            firstChild.style.transform = "rotate(180deg)"
            ultag.style.display = "flex"
            value = false
        }
        else {
            firstChild.style.transform = "rotate(0deg)"
            ultag.style.display = "none"
            value = true
        }
    })
})
