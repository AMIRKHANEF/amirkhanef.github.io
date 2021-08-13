///////////////// tabs //////////////
$(".tab-item").click(function (event) {
    var tabId = event.target.id;
    $("#carousel-vid").attr('src', $('iframe').attr('src'));
    $(".tab-item").removeClass("active");
    $("#" + tabId).addClass("active");
    $(".tabs-contents").css("opacity", 0);
    $(".tabs-contents").removeClass("show active");
    $("#" + tabId + "-content").addClass("show active");
    $("#" + tabId + "-content").animate({opacity: 100}, 3000);
});


///////////////// carousel ////////////////
$(".carousel-nav").click(function(){
    console.log("saf");
    $("#carousel-vid").attr('src', $('iframe').attr('src'));
});