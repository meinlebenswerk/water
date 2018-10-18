var container = document.getElementById('p_cont');
var pcards = container.childNodes;

var global_toggle;

var createOnClickRippleHandler = function(div){
  div.addEventListener("transitionend", function(event) {
    console.log('transition_done')
  }, false);
  var toggle = false;
  return function(e){
    toggle = !toggle;
    // if(toggle){
    //   div.style.borderBottom = '1em #f00 solid';
    // }else{
    //   div.style.borderBottom = '';
    // }
  }
};

pcards.forEach( function(val, index, list){
  //adjust ripple-effect
  //card.onclick = createOnClickRippleHandler(card);
  if(val.nodeName == 'DIV'){
    //console.log('its a div!');
    val.onclick  = createOnClickRippleHandler(val);
  }
});

var scale_welcome_parallax = function(){
  //This section handles the correct scaling of the parallax-element in the welcome section::
  var el = document.getElementById('header_msg');
  var fontsz = parseFloat(window.getComputedStyle(el, null).getPropertyValue('font-size'));

  var wpar_c = document.getElementById('welc_par');
  var pad_top = el.getBoundingClientRect().top - wpar_c.getBoundingClientRect().top;
  var pad = pad_top + (2*fontsz);
  var text_h = parseFloat(window.getComputedStyle(el, null).getPropertyValue('height'));
  var wpar_std_h = (fontsz*30);
  wpar_c.style.height = Math.max(text_h+pad, wpar_std_h)+'px';
};

//Register Eventlisteners::
window.addEventListener('resize', function(){
  scale_welcome_parallax();
}, true);

//Page-setup::
scale_welcome_parallax();

// var header_msg = document.getElementById('header_msg');
// window.addEventListener('scroll', function(e) {
//   var y = window.scrollY;
//   header_msg.style.transform = "translate(0px -"+y+"%)";
// });


//Preload testing:: <- This works, Theoretically :)
/*
var preloadcb = function(response){
  console.log(response)
  container.innerHTML = response;
}

function httpGetAsync(url, callback){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
}

httpGetAsync(window.location.href+'test.html',preloadcb);
*/
