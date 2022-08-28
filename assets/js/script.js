document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'interactive') {
         document.getElementById('contents').style.visibility="hidden";
         document.getElementsByClassName('main-index')[0].style.overflow="hidden";
    } else if (state == 'complete') {
        setTimeout(function(){
           document.getElementById('interactive');
           document.getElementById('load').style.visibility = "hidden";
           document.getElementById('load').style.display = "none";
           document.getElementById('contents').style.visibility = "visible";
           document.getElementsByClassName('main-index')[0].style.overflow="auto";
        },1000);
    }
  }