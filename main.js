var slideShowBander = [
   './anh/bander/slide1a.png',
   './anh/bander/sdile.png'
]


var index = 0
function leftSide() {
    index--;
    if (index < 0) {
      index = slideShowBander.length - 1
    }
    document.getElementById("sideshow-imgs").src = slideShowBander [index]
  
  
  }

  function rightSide() {
    index++;
    if (index == slideShowBander.length) {
      index = 0
    }
    document.getElementById("sideshow-imgs").src = slideShowBander [index]  
  
  }
  setInterval(() => {
    rightSide()
  }, 4000);
  