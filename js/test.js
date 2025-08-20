
$(function(){


let sc = 0

/////////////////////
$(window).scroll(function(){
  sc = $(window).scrollTop() //현재스크롤값
  if(sc>2000){
    $('li:nth-child(1)').css({'position':'fixed','top':'0'})    
  }
  else { 
    $('li:nth-child(1)').css({'position':'absolute','top':'2000px'}) 
  }

  if(sc>3000){
    $('li:nth-child(2)').css({'position':'fixed','top':'0'})    
  }
  else { 
    $('li:nth-child(2)').css({'position':'absolute','top':'3000px'}) 
  }

})
/////////////////////











})
