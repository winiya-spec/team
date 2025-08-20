
$(function(){

let left_num = 0
setInterval(function(){
  left_num = left_num - 1
  if(left_num<-5200 ){left_num=0}
    $('.box').css({left:left_num})
},5)


})
