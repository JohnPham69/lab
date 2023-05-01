'use strict';

var ha = document.getElementById("supbit");
var faqbit = document.getElementById("email-input").value;
var checkbit = document.getElementById("hehe").innerHTML

function checkEmail() {
    var email = document.getElementById("email-input").value;
    if (email === "khangpxgfx13494@funix.edu.vn") {
        document.getElementById("email-form").style.display = "none";
        document.getElementById("show").style.display = "block";
        return false;
    }
    return true;
}

var boxes = document.querySelectorAll(".box");
boxes.forEach(function(box) {
    var more = box.querySelector(".more");
    box.addEventListener("click", function() {
        box.classList.toggle("clicked");
        if (box.classList.contains("clicked")) {
            more.style.display = "block";
        } else {
            more.style.display = "none";
        }
    });
});