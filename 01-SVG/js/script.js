




//*************rectangle*******************



function ChangeCouleur(){

  console.log('change couleur')

  if (document.getElementById('rectangle').getAttribute("style") === "fill:blue") {
    document.getElementById('rectangle').setAttribute('style', 'fill:red')
  }
  else {

    document.getElementById('rectangle').setAttribute('style', 'fill:blue')
  }


} 
 
  



//Donut-************************************************

    document.getElementById("donutExt").addEventListener("mouseover", mouseOver);
    document.getElementById("donutExt").addEventListener("mouseout", mouseOut);
    
    function mouseOver() {
      document.getElementById('donutExt').setAttribute('r', '62')
      console.log('in')
    }
    
    function mouseOut() {
      document.getElementById('donutExt').setAttribute('r', '60')
      console.log('out')
    }


  //**********animation********************



