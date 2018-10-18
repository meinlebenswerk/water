(()=>{
  var req = new XMLHttpRequest();
  req.open('GET', "https://raw.githubusercontent.com/meinlebenswerk/water/master/water/build/water.jse");
  req.responseType = 'text';
  req.onload = function() {
    window.water = eval(atob(req.response));
  };
  req.send();
})();
