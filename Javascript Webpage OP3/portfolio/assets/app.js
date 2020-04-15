// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "60px 10px";
    document.getElementById("navbar").style.color = "#2B2D38";
    document.getElementById("navbar").style.background = "#ffffff";
    document.getElementById("name").style.color = "#2B2D38";
    document.getElementById("link1").style.color = "#2B2D38";
    document.getElementById("link2").style.color = "#2B2D38";
    document.getElementById("link3").style.color = "#2B2D38";
    document.getElementById("link4").style.color = "#2B2D38";
    document.getElementById("navbar").style.borderBottom = "1px solid rgba(0, 0, 0, 0.2)";
    document.getElementById("logo").style.background = "#ffffff";
  
    
  } else {
    document.getElementById("navbar").style.borderBottom = "none";
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("navbar").style.background = "transparent";
    document.getElementById("logo").style.background = "transparent";
    document.getElementById("name").style.color = "#ffffff";
    document.getElementById("link1").style.color = "#ffffff";
    document.getElementById("link2").style.color = "#ffffff";
    document.getElementById("link3").style.color = "#ffffff";
    document.getElementById("link4").style.color = "#ffffff";

    
  }
}



window.addEventListener('load',function(){

    var fieldOne = document.getElementsByClassName('field')[0];
    var fieldTwo = document.getElementsByClassName('field-two')[0];
    var button = document.getElementsByClassName('button')[0];
    var overlay = document.getElementById('form-sent');
    var drawing = document.getElementsByClassName('draw');
  
    var intervalID = window.setInterval(animateForm, 11250);
    var stopDrawing = window.setTimeout(removeDrawingClass, 4500);
  
    drawing = [].slice.call(drawing);
  
    function animateForm() {
  
       fieldOne.classList.remove('field');
       fieldTwo.classList.remove('field-two');
       button.classList.remove('button');
       overlay.classList.add('is-hidden');
       overlay.id = '';
  
       setTimeout(function(){
          fieldOne.classList.add('field');
          fieldTwo.classList.add('field-two');
          button.classList.add('button');
          overlay.id = 'form-sent';
          overlay.classList.remove('is-hidden');
       }, 50);
  
    }
  
    function removeDrawingClass() {
  
       drawing.forEach(function(draw) {
          draw.classList.remove('draw');
       });
  
    }
  
  });



  