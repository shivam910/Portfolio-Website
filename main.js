$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20) 
      $(".navbar").addClass("sticky");
    else
      $(".navbar").removeClass("sticky");
  });
});
$(document).on('click','.navbar-menu a',function(){
  $(this).addClass('active').siblings().removeClass('active')
})
