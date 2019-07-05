var catalogNav = document.getElementById('catalog-nav');
var productList = document.getElementById('product-list');

window.onload = function(){positionSwitch()};
window.onscroll = function(){positionSwitch()}

//checks if pageYOffset is a valid method and returns pageTop value to be used in positionSwitch();
var pageTop = function(){

  if(!window.pageYOffset){
    return document.documentElement.scrollTop || window.scrollY;
  }else{
    return window.pageYOffset;
  }
};

// calculate size of element to be used as padding when converted to stickyFixed
// because fixed elements have a height of 0 and we don't want shakey transitions
//get size of element by putting all child elements into array and add them all up
var $paddingTop = function() {

  var navChildren = catalogNav.children;
  var navChildrenArray = [];

  for (var i = 0; i <  navChildren.length; i++) {

    navChildrenArray.push(navChildren[i].clientHeight);

  }
  //remove absolute positioned element from array. shift is used because its first child element\
  navChildrenArray.pop();

  return navChildrenArray.reduce((a,b) => a + b,0);

}

var $scrollTop = catalogNav.offsetTop;

//toggle between static and fixed based on scroll position;
function positionSwitch(){

    if (pageTop() > $scrollTop) {

      catalogNav.className = "fixed";

      productList.style.paddingTop = ''+$paddingTop()+'px';

    } else {

      catalogNav.className = "static";
      //
      productList.style.paddingTop = '0px'

    }

}

/*=============*/

var sortBtn = document.getElementsByClassName('sort-btn')
var dropSortBtn = document.getElementsByClassName('drop-down-btn');

function toggleButtons(){

  for (var i = 0; i < sortBtn.length; i++) {
    sortBtn[i].className = 'sort-btn';

    if(this.className = 'sort-btn'){

      toggleThis(this,'active');

    }
  }
}


for (var i = 0; i < dropSortBtn.length; i++) {
  dropSortBtn[i].addEventListener('click',toggleButtons,false);
}

for (var i = 0; i < sortBtn.length; i++) {
  sortBtn[i].addEventListener('click',toggleButtons,false);
}

/*=============*/

var wrapper = document.getElementsByClassName('detail-wrapper');

function toggleOutside(e){

  if(e.target.classList.contains('active') && e.target !== e.target.firstChild){

    idToggle(this.id,'active');

  }

}
for (var i = 0 ; i < wrapper.length; i++) {

  wrapper[i].addEventListener('click',toggleOutside,false);

}

/*=============*/
