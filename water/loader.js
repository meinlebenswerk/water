(()=>{
  var req = new XMLHttpRequest();
  req.open('GET', url);
  req.responseType = 'text';
  req.onload = function() {
    window.water = btoa(req.response);
  };
  req.send();#
})();
