$(document).ready(function(){
    
    $("#js-hamburger").click(function () {
        $("#js-top-line").toggleClass("active");
        $("#js-center-line").toggleClass("active");
        $("#js-bottom-line").toggleClass("active");
        $("#js-nav").toggleClass("show");
    });
    
    $(".images img").click(function(){
        $("#full-image").attr("src", $(this).attr("src"));
        $('#image-viewer').show();
    });
    
    $("#image-viewer .close").click(function(){
        $('#image-viewer').hide();
    });
    
    if (window.matchMedia('(max-width: 600px)').matches) {
        $(".images img").off('click');
    }
});