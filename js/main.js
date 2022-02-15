let elMenuBtn = document.getElementById('menuBtn');
let elModal = document.getElementById('navModal');
let elClose = document.getElementById('closeBtn');
let elIcon = document.getElementById('icon');

let count = 0;
elMenuBtn.addEventListener('click', function () {
    elModal.classList.toggle('show');

    if (count == 0) {
        elIcon.className = "bx bx-x";
        count++;
    } else {
        elIcon.className = "bx bx-menu";
        count = 0;
    }
});

// MODAL PORTFOLIO

let elProject = document.getElementById('cofeContent');
let elModalcofe = document.getElementById('cofeeModal');
let elClosecofe = document.getElementById('closeBtncofe');

elProject.addEventListener('click', function () {
    elModalcofe.classList.add('test');
});

elClosecofe.addEventListener('click', function () {
    elModalcofe.classList.remove('test');
});

let elProject2 = document.getElementById('portContent');
let elModalcofe2 = document.getElementById('portModal');
let elClosecofe2 = document.getElementById('closeBtnPort');

elProject2.addEventListener('click', function () {
    elModalcofe2.classList.add('test');
});

elClosecofe2.addEventListener('click', function () {
    elModalcofe2.classList.remove('test');
});


let elProject3 = document.getElementById('lithoContent');
let elModalcofe3 = document.getElementById('lithoModal');
let elClosecofe3 = document.getElementById('closeBtnLitho');

elProject3.addEventListener('click', function () {
    elModalcofe3.classList.add('test');
});

elClosecofe3.addEventListener('click', function () {
    elModalcofe3.classList.remove('test');
});

let elProject4 = document.getElementById('besmikContent');
let elModalcofe4 = document.getElementById('besmikModal');
let elClosecofe4 = document.getElementById('closeBtnBesmik');

elProject4.addEventListener('click', function () {
    elModalcofe4.classList.add('test');
});

elClosecofe4.addEventListener('click', function () {
    elModalcofe4.classList.remove('test');
});

let elProject5 = document.getElementById('starkContent');
let elModalcofe5 = document.getElementById('starkModal');
let elClosecofe5 = document.getElementById('closeBtnStark');

elProject5.addEventListener('click', function () {
    elModalcofe5.classList.add('test');
});

elClosecofe5.addEventListener('click', function () {
    elModalcofe5.classList.remove('test');
});


let elProject6 = document.getElementById('productContent');
let elModalcofe6 = document.getElementById('productModal');
let elClosecofe6 = document.getElementById('closeBtnProduct');

elProject6.addEventListener('click', function () {
    elModalcofe6.classList.add('test');
});

elClosecofe6.addEventListener('click', function () {
    elModalcofe6.classList.remove('test');
});





// animation welcome

var car = ["Xushnora"];
var i = 0;

function anime() {
    $('#text').hide();
    $('#text').html(car[i]);
    $('#text').delay(300).show(500);
    $('#text').delay(1000).hide(500);
    i = i + 1
    if (i == 3) {
        i = 0;
    }
    anime();
}
anime();

// animation the end

jQuery(document).ready(function ($) {
    $('.main__title').typeIt({
        content: 'I am a Web Developer'
    });
});


var typed = new Typed(".type", {
    strings: [ "Frontend developer","Backend developer","Freelancer","UI designer"],
    typeSpeed: 160,
    backSpeed: 120,
    loop: true,
});