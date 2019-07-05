var list = document.getElementById('product-list');
var element = document.getElementsByClassName('product');
var detailEl = document.getElementsByClassName('detail');
var i;

(function() {
  'use strict';
  for (var i = 0; i < element.length; i++){

    var priceAttr = element[i].querySelector('.section .article dl .price').innerText;

    var durAttr = element[i].querySelector('.section .duration').innerText;
    var discAttr = element[i].querySelector('.section .discount-badge span').innerText;

    priceAttr = priceAttr.substr(1,priceAttr.length);
    discAttr = discAttr.slice(1,discAttr.length);

    element[i].setAttribute('price-attr',priceAttr);
    element[i].setAttribute('dur-attr',durAttr);
    element[i].setAttribute('disc-attr',discAttr);

    var review = element[i].querySelector('.review i.material-icons');
  }


}());

(function() {
  'use strict';

  var elIndex,
      detailIndex;

  var priceAttr = [];
  var dtlPrice = [];
  var discAttr = [];
  var dtlDisc = [];
  var durAttr = [];
  var dtlDur = [];

  for (var elIndex = 0; elIndex < element.length; elIndex++) {
    priceAttr.push(element[elIndex].getAttribute('price-attr'));
    discAttr.push(element[elIndex].getAttribute('disc-attr'));
    durAttr.push(element[elIndex].getAttribute('dur-attr'));
  }

  for (var detailIndex = 0; detailIndex < detailEl.length; detailIndex++) {

    dtlPrice = detailEl[detailIndex].querySelector('.section .article ul .dtl-price');
    dtlDisc = detailEl[detailIndex].querySelector('.section .article ul .dtl-discount');
    dtlDur = detailEl[detailIndex].querySelector('.section .article ul .dtl-duration');

    var priceDtlString = priceAttr[detailIndex].toString();
    var discDtlString = discAttr[detailIndex].toString();
    var durDtlString = durAttr[detailIndex].toString();

    dtlPrice.innerHTML = "<span>from</span> $" + priceDtlString;
    dtlDisc.innerHTML = "<span>save</span> $" + discDtlString;
    dtlDur.innerHTML = "<span>duration</span>" + durDtlString + " minutes";
  }
}());

var operators = {
  '<' : function(a,b) {return a < b},
  '>' : function(a,b) {return a > b}
}

var op;

function sortList(op,attr){
  var switching;
  var shouldSwitch;
  var switching = true;

  while(switching){

    switching = false;

    for(i = 0; i < (element.length - 1); i++){

      shouldSwitch = false;

      if(operators[op](Number(element[i].getAttribute(attr)),Number(element[i + 1].getAttribute(attr)))){
        shouldSwitch = true;
        break;
      }
    }
    if(shouldSwitch){
      list.insertBefore(element[i + 1],element[i]);
      switching = true;
    }
  }
}
/*== sort by vendor ====*/
function vendorSort(vendor){
  for (var i = 0; i < element.length; i++) {
    vendorAttr = element[i].getAttribute('vendor');

    element[i].style.display = 'inline-block';

    console.log("clicked",vendorAttr,vendor);

    if (vendorAttr !== vendor) {
      element[i].style.display = 'none';
    }
  }
}
function showAll(){
  for (var i = 0; i < element.length; i++) {
      element[i].style.display = 'inline-block';
  }
}
