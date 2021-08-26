///////////////// tabs //////////////
$(".tab-item").click(function (event) {
    var tabId = event.target.id;
    $("#carousel-vid").attr('src', $('iframe').attr('src'));
    $(".tab-item").removeClass("active");
    $("#" + tabId).addClass("active");
    $(".tabs-contents").css("opacity", 0);
    $(".tabs-contents").removeClass("show active");
    $("#" + tabId + "-content").addClass("show active");
    $("#" + tabId + "-content").animate({
        opacity: 100
    }, 3000);
});

///////////////// carousel ////////////////
$(".carousel-nav").click(function () {
    console.log("saf");
    $("#carousel-vid").attr('src', $('iframe').attr('src'));
});

///////////////// rating ////////////////
var sliderOne = $('.first-slider');
var sliderOneValue = $('.first-slider-value');

var sliderTwo = $('.second-slider');
var sliderTwoValue = $('.second-slider-value');

var sliderthree = $('.third-slider');
var sliderthreeValue = $('.third-slider-value');

var sliderfour = $('.fourth-slider');
var sliderfourValue = $('.fourth-slider-value');

sliderOne.on('input', function (event) {
    sliderOneValue.html(event.target.value);
});

sliderTwo.on('input', function (event) {
    sliderTwoValue.html(event.target.value);
});

sliderthree.on('input', function (event) {
    sliderthreeValue.html(event.target.value);
});

sliderfour.on('input', function (event) {
    sliderfourValue.html(event.target.value);
});

$('.slider-range').change(function () {
    var total = parseInt(sliderOneValue.text()) + parseInt(sliderTwoValue.text()) + parseInt(sliderthreeValue.text()) + parseInt(sliderfourValue.text());
    $('.total-value').html(total);
    if (total >= 90) {
        $('.high-rate').css('visibility', 'visible');
    } else{
        $('.high-rate').css('visibility', 'hidden');
    }
});