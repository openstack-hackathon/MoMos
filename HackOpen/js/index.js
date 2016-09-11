$('.toggle').on('click', function() {
  $('.container').stop().addClass('active');
});
$('.close').on('click', function() {
  $('.container').stop().removeClass('active');
});
/*
$(".myButton").click(function() {
    console.log("hola");
    window.location.href = "calendario/";
});
*/