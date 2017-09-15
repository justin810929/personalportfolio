$(document).ready(function() {
	$(window).scroll(function(){
    {
    $(".top").display()
    }
})
	$('.top a').click(function(event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: 0
  }, 600);
 });
	$('.content a').click(function(event) {
  event.preventDefault();
  $('html,body').animate({scrollTop:$('.storyF').offset().top}, 300);
 });
	$('.NCT a').click(function(event) {
  event.preventDefault();
  $('html,body').animate({scrollTop:$('.NAS').offset().top}, 300);
 });
	$('.NCT2 a').click(function(event) {
  event.preventDefault();
  $('html,body').animate({scrollTop:$('.career').offset().top}, 300);
 });
});