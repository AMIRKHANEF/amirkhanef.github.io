//////////////// menu /////////////////////
$('li#menu').click(function(){
    $('.menu').toggleClass("change");
    $('.menu-items').toggleClass("change");
    $('.section-dropdown-search').removeClass('show');
    $('.section-dropdown-top').removeClass('show');
});
$('.search-drop').click(function(){
    $('.section-dropdown-search').toggleClass('show');
});
$('.top-drop').click(function(){
    $('.section-dropdown-top').toggleClass('show');
});

/////////////// main search ///////////
$("input[type=checkbox]").click(function(event){
    var id = event.target.className;
    $('#' + id).toggleClass('box-inset');
});




$('.signin-btn').click(function(){
    $('#SignIn').show();
});
$('#search-button').click(function(){
    $('.title-box').slideUp(800);
    $('.search-sec').animate({width:'80%'});
    $('.search-sec').css('margin','auto');
    $('.title').css('padding-top','20px');
    $('#offer').fadeOut(100);
    $('#search-content').fadeIn(1000);
});