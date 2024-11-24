 // Load header  from external files
 document.getElementById("header").innerHTML = fetch('navbar.html')
 .then(response => response.text())
 .then(data => {
     document.getElementById('header').innerHTML = data;
     console.log(data);
 });
 document.getElementById("footer").innerHTML = fetch('footer.html')
 .then(response => response.text())
 .then(data => {
     document.getElementById('footer').innerHTML = data;
     console.log(data);
 });
function formchng(){
    document.getElementById("box1").style="display:block;transform:translateY(0%);transform:translateX(26%)";

}
let closebtn=document.getElementById("close-form");
closebtn.addEventListener('click',function(){
    document.getElementById("box1").style="display:none;"
});

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}
function exitnav(){
    document.getElementById("menu").style="display:none;"
}