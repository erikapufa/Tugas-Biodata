$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $(header).toggleClass('toggle')
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $(header).removeClass('toggle')
    });
    // smooth
$('a[href*="#")').on(function(e){
    e.preventDeafult();

    $('html, body').animated({

        screenTop: $($(this).attr('href')).offset().top,

    },
    500,
    'linear'
    );

})
});

