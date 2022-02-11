let elMenuBtn = document.getElementById('menuBtn');
let elModal = document.getElementById('navModal');
let elClose = document.getElementById('closeBtn');
let elIcon = document.getElementById('icon')



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





// animation welcome

var car = ["Welcome"];
var i=0;
function anime(){
$('#text').hide();
$('#text').html(car[i]);
$('#text').delay(100).show(500);
$('#text').delay(500).hide(500);
i=i+1
if(i==3){i=0;}
anime();
}
anime();

// animation the end