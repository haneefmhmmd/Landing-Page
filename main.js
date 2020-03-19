let dropDownIcon=document.querySelector('.icon');
let extraCategory=document.getElementById('extra');
dropDownIcon.addEventListener('click',menu);
function menu(){
    let childrens=dropDownIcon.parentNode.childNodes;
    console.log(childrens[3].className);
    if(childrens[3].className=='rightContent'){
        childrens[3].className+=' responsive';
    }
    else{
        childrens[3].className='rightContent';
    }
    console.log(childrens[3].className);
}
extraCategory.addEventListener('click',categoryAdder);
function categoryAdder(){
    let childrens=extraCategory.parentNode.parentNode.children;
    // console.log(childrens[1].children);
    if(childrens[1].children.length===6){
        childrens[1].innerHTML+=
    '<div class="additionalCategory">'+
'<div class="workInfoFlow">'+
    '<div class="workInfo-imageContainer">'+
        '<img src="images/tiktok.png" alt="THERE IS IMAGE HERE">'+
    '</div>'+
        '<h3 class="workInfo-heading">Tik Tok</h3>'+
'</div>'+
'<div class="workInfoFlow">'+
    '<div class="workInfo-imageContainer">'+
        '<img src="images/marketing.png" alt="THERE IS IMAGE HERE">'+
    '</div>'+
        '<h3 class="workInfo-heading">Marketing</h3>'+
'</div>'+
'<div class="workInfoFlow">'+
    '<div class="workInfo-imageContainer">'+
        '<img src="images/car.png" alt="THERE IS IMAGE HERE">'+
    '</div>'+
        '<h3 class="workInfo-heading">Car Accessories</h3>'+
'</div>'+
'<div class="workInfoFlow">'+
    '<div class="workInfo-imageContainer">'+
        '<img src="images/import.jpg" alt="THERE IS IMAGE HERE">'+
    '</div>'+
        '<h3 class="workInfo-heading">Imports and Exports</h3>'+
'</div>'+
'<div class="workInfoFlow">'+
    '<div class="workInfo-imageContainer">'+
        '<img src="images/books.png" alt="THERE IS IMAGE HERE">'+
    '</div>'+
        '<h3 class="workInfo-heading">Books</h3>'+
'</div>'+
'<div class="workInfoFlow">'+
    '<div class="workInfo-imageContainer">'+
        '<img src="images/yoga.png" alt="THERE IS IMAGE HERE">'+
    '</div>'+
        '<h3 class="workInfo-heading">Yoga</h3>'+
'</div>'+
'<div class="workInfoFlow">'+
    '<div class="workInfo-imageContainer">'+
        '<img src="images/tree.png" alt="THERE IS IMAGE HERE">'+
    '</div>'+
        '<h3 class="workInfo-heading">Tree Plantation</h3>'+
'</div>'+
'<div class="workInfoFlow">'+
    '<div class="workInfo-imageContainer">'+
        '<img src="images/software.png" alt="THERE IS IMAGE HERE">'+
    '</div>'+
        '<h3 class="workInfo-heading">Laptop accessories and spare parts</h3>'+
'</div>'+
'<div class="workInfoFlow">'+
    '<div class="workInfo-imageContainer">'+
        '<img src="images/job.png" alt="THERE IS IMAGE HERE">'+
    '</div>'+
        '<h3 class="workInfo-heading">Jobs</h3>'+
'</div>'+
'<div class="workInfoFlow">'+
    '<div class="workInfo-imageContainer">'+
        '<img src="images/startup.png" alt="THERE IS IMAGE HERE">'+
    '</div>'+
        '<h3 class="workInfo-heading">Start Ups</h3>'+
'</div>'+
'<div class="workInfoFlow">'+
    '<div class="workInfo-imageContainer">'+
        '<img src="images/testing.png" alt="THERE IS IMAGE HERE">'+
    '</div>'+
        '<h3 class="workInfo-heading">Testing</h3>'+
'</div>'+
'<div class="workInfoFlow">'+
    '<div class="workInfo-imageContainer">'+
        '<img src="images/furnishing.png" alt="THERE IS IMAGE HERE">'+
    '</div>'+
        '<h3 class="workInfo-heading">Furnishing</h3>'+
'</div>'+
'<div class="workInfoFlow">'+
    '<div class="workInfo-imageContainer">'+
        '<img src="images/ethical hacking.png" alt="THERE IS IMAGE HERE">'+
    '</div>'+
        '<h3 class="workInfo-heading">Ethical Hacking</h3>'+
'</div>'+
'<div class="workInfoFlow">'+
    '<div class="workInfo-imageContainer">'+
        '<img src="images/mobile accessories.png" alt="THERE IS IMAGE HERE">'+
    '</div>'+
        '<h3 class="workInfo-heading">Mobile Accessories</h3>'+
'</div>'+
'<div class="workInfoFlow">'+
    '<div class="workInfo-imageContainer">'+
        '<img src="images/product.png" alt="THERE IS IMAGE HERE">'+
    '</div>'+
        '<h3 class="workInfo-heading">Customized Products</h3>'+
'</div>'+'</div>'
extraCategory.innerHTML='Show Less Categories';
console.log(childrens[1].children);
console.log(extraCategory.innerHTML);
}
else{
    extraCategory.innerHTML='Browse All Categories';
    childrens[1].children[6].remove();
}

}
