$(document).on('mousemove', function(e){
    $('#sharpen').css({
        left: e.pageX,
        top: e.pageY,
    });
});