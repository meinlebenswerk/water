(()=>{
  var req = new XMLHttpRequest();
  req.open('GET', "https://github.com/meinlebenswerk/water/blob/master/water/build/water.jse");
  req.responseType = 'text';
  req.onload = function() {
    window.water = btoa(req.response);
  };
  req.send();
})();
