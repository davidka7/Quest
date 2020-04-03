/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);
  /*create magnifier glass:*/
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");
  /*insert magnifier glass:*/
  img.parentElement.insertBefore(glass, img);
  /*set background properties for the magnifier glass:*/
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
  /*execute a function when someone moves the magnifier glass over the image:*/
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);
  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
  function moveMagnifier(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    /*prevent the magnifier glass from being positioned outside the image:*/
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /*set the position of the magnifier glass:*/
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /*display what the magnifier glass "sees":*/
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }
  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}

function funct() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//window.onload = function() {

   // function FauxGif(element, frames, speed) {
   //     this.currentFrame = 0,
    //    this.domElement   = element,
    //    this.frames       = frames || null,
    //    this.speed        = speed  || 200;
   //     this.interval;
   //     this.init();
 //   }
//
  //  FauxGif.prototype = {
  //      init: function() {
   //         // set the first one to the first image
    //        console.log(this.frames[0])
    //        this.domElement.style.backgroundImage = "url(" + this.frames[0] + ")";
   //     },
      //  pause: function() {
  //          clearInterval(this.interval);
      //  },
  //       resume: function() {
   //          var that = this;
// 
   //          that.interval = setInterval(function(){
   //              console.log(that.frames[that.currentFrame])
    //            console.log(that.frames.length);
     //            that.currentFrame < that.frames.length - 1 ? that.currentFrame++ : that.currentFrame = 0;
     //            that.domElement.style.backgroundImage = "url(" + that.frames[that.currentFrame] + ")";
     //        }, this.speed);
    //     }
  //   }
// 
   //  var frames = [
     //                'https://i.imgur.com/E2ee6fI.gif',
     //                'https://i.imgur.com/JIi0uul.gif',
     //                'https://i.imgur.com/owNGnNN.gif',
      //               'https://i.imgur.com/2Ii6XOz.gif',
      //               'https://i.imgur.com/ZmQBrQ5.gif',
       //              'https://i.imgur.com/iAsfHyY.gif',
       //              'https://i.imgur.com/AJwRblj.gif',
    //                 'https://i.imgur.com/fx5wUNY.gif'
       //          ]

 //    var elem = document.querySelector('#faux-gif'),
    //     gif  = new FauxGif(elem, frames, 60);
// 
// 
  //   elem.addEventListener('mouseenter', function(){
  //       gif.resume();
 //    });
// 
 //    elem.addEventListener('mouseleave', function() {
  //       gif.pause();
 //    });
// }
