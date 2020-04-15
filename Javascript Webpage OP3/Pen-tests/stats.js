function increment(){
    $('.box').hide();
    setTimeout(function(){
      $('.box').show();
    },100);
  
    $('.number').each(function(){
      var $this = $(this),
          value = $this.text();
      $({someValue: 0}).animate({someValue: value}, {
        duration: 1200,
        easing:'swing', 
        step: function() {      
          $this.text(Math.round(this.someValue));
        },
        complete: function() {
          $this.text(value);
        }
      });
    });  
  }
  
  increment(); 
  
  setInterval(function(){
    increment();
  },2000);