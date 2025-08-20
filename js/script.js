
$(function(){

let left_num = 0
setInterval(function(){
  left_num = left_num - 1
  if(left_num<-13720 ){left_num=0}
    $('.img_list ul').css({"transform": "rotate(-32deg) rotateX(26deg) rotateY(26deg) skewX(8deg) skewY(11deg) translateX("+left_num+"px)"})
},10)

/* let sc = 0
//6698
$(window).scroll(function(){
  sc = $(window).scrollTop() //현재스크롤값
  $('.sc_text').text(sc)

  if(sc>7698){
    $('.work_section1').css({'position':'fixed','top':'0'})    
  }
  else { 
    $('.work_section1').css({'position':'absolute','top':'1000px'}) 
  }


    if(sc>8645){
    $('.work_section2').css({'position':'fixed','top':'0'})    
  }
  else { 
    $('.work_section2').css({'position':'absolute','top':'2000px'}) 
  }

      if(sc>9620){
    $('.work_section3').css({'position':'fixed','top':'0'})    
  }
  else { 
    $('.work_section3').css({'position':'absolute','top':'3000px'}) 
  }

  
      if(sc>10628){
    $('.work_section4').css({'position':'fixed','top':'0'})    
  }
  else { 
    $('.work_section4').css({'position':'absolute','top':'4000px'}) 
  }

        if(sc>11630){
    $('.work_section5').css({'position':'fixed','top':'0'})    
  }
  else { 
    $('.work_section5').css({'position':'absolute','top':'5000px'}) 
  }








    let sc = 0
    let circle_num  = 1;
//6698
$(window).scroll(function(){
  sc = $(window).scrollTop() //현재스크롤값
  $('.sc_text').text(sc)


if(sc > 15500) {
  circle_num = 1+(sc-15540)*0.003
  $('.circle').css({
    transform: 'scale('+circle_num+')'  
  });
 
}


  if (sc > 15800) {
    $('.circle').css({
      'position': 'fixed'
    });
  }
})










//////////////////////////////////////////////////

/*   if(sc>2400){
    $('#head img').stop().animate({left:-200}) 
    $('#head p').stop().animate({right:-200}) 

  } else {
    $('#head img').stop().animate({left:0}) 
    $('#head p').stop().animate({right:0}) 
  }

  if(sc>2900){
    $('#otherspace_1 img').stop().animate({marginTop:700},500)
  }else{
     $('#otherspace_1 img').stop().animate({marginTop:800},500)
  }


  if(sc>3260){
    $('#otherspace_1 p').stop().animate({marginTop:10},500)
  }else{
     $('#otherspace_1 p').stop().animate({marginTop:60},500)
     }


    if(sc>3360){
    $('#.font_v p').stop().animate({marginTop:20},500)
  }else{
     $('#.font_v p').stop().animate({marginTop:30},500)
     }

})
 */





let left_roll = 0
setInterval(function(){
  left_roll = left_roll -1
  if(left_roll<-2220 ){left_roll=0}
    $('.card_unit').css({left:left_roll})
},10)






let right_move = 0;
setInterval(function () {
  right_move = right_move - 1;
  if (right_move < -2300) {
    right_move = 0;
  }
  $('.track-right').css({ right: right_move  });
}, 10);


let left_move = 0;
setInterval(function () {
 left_move = left_move - 1;
  if (left_move < -3200) {
    left_move = 0;
  }
  $('.track-left').css({ left: left_move  });
}, 10);





$('.row').mouseover(function(){
      $(this).children('.serv_img').stop().show()
    })
    $('.row').mouseout(function(){
      $(this).children('.serv_img').stop().hide()
    })








})
