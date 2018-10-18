//Water toolkit::

let water_init = function(){
  console.log("W.A.T.E.R Framework starting...")
  console.log("WebApp analysis and TEsting fRamework")

  let array_get_differences = (arr1, arr2) =>{
    return arr1.filter( (element_1) => {
      for(let i = 0; i<arr2.length;i++){
        if(arr2[i] == element_1){
          return false;
        }
      }
      return true;
    })
  }

  let array_remove_element = (arr, element) =>{
    return arr.filter( (element_1) => {
      return element_1 != element;
    })
  }

  let chrome_std = ["postMessage","blur","focus","close","frames","self","window","parent","opener","top","length","closed","location","document","origin","name","history","locationbar","menubar","personalbar","scrollbars","statusbar","toolbar","status","frameElement","navigator","customElements","external","screen","innerWidth","innerHeight","scrollX","pageXOffset","scrollY","pageYOffset","screenX","screenY","outerWidth","outerHeight","devicePixelRatio","clientInformation","screenLeft","screenTop","defaultStatus","defaultstatus","styleMedia","onanimationend","onanimationiteration","onanimationstart","onsearch","ontransitionend","onwebkitanimationend","onwebkitanimationiteration","onwebkitanimationstart","onwebkittransitionend","isSecureContext","onabort","onblur","oncancel","oncanplay","oncanplaythrough","onchange","onclick","onclose","oncontextmenu","oncuechange","ondblclick","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","ondurationchange","onemptied","onended","onerror","onfocus","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onload","onloadeddata","onloadedmetadata","onloadstart","onmousedown","onmouseenter","onmouseleave","onmousemove","onmouseout","onmouseover","onmouseup","onmousewheel","onpause","onplay","onplaying","onprogress","onratechange","onreset","onresize","onscroll","onseeked","onseeking","onselect","onstalled","onsubmit","onsuspend","ontimeupdate","ontoggle","onvolumechange","onwaiting","onwheel","onauxclick","ongotpointercapture","onlostpointercapture","onpointerdown","onpointermove","onpointerup","onpointercancel","onpointerover","onpointerout","onpointerenter","onpointerleave","onafterprint","onbeforeprint","onbeforeunload","onhashchange","onlanguagechange","onmessage","onmessageerror","onoffline","ononline","onpagehide","onpageshow","onpopstate","onrejectionhandled","onstorage","onunhandledrejection","onunload","performance","stop","open","alert","confirm","prompt","print","requestAnimationFrame","cancelAnimationFrame","requestIdleCallback","cancelIdleCallback","captureEvents","releaseEvents","getComputedStyle","matchMedia","moveTo","moveBy","resizeTo","resizeBy","getSelection","find","webkitRequestAnimationFrame","webkitCancelAnimationFrame","fetch","btoa","atob","setTimeout","clearTimeout","setInterval","clearInterval","createImageBitmap","scroll","scrollTo","scrollBy","onappinstalled","onbeforeinstallprompt","crypto","ondevicemotion","ondeviceorientation","ondeviceorientationabsolute","indexedDB","webkitStorageInfo","sessionStorage","localStorage","chrome","visualViewport","speechSynthesis","webkitRequestFileSystem","webkitResolveLocalFileSystemURL","openDatabase","applicationCache","caches"]

  //TODO fetch the correct variables for the current browser.

  let window_variables = Object.keys(window)
  let differences = array_get_differences(window_variables, chrome_std);
  console.log(differences);

  let a = (()=>{return "a";})();
  console.log(a)
}

window.water_init = water_init;
