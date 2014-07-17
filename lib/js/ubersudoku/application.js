Application = {
    WIDTH: undefined,
    HEIGHT: undefined,

    initSizeConstants: function () {
        Application.WIDTH = $(document).width();
        Application.HEIGHT = $(document).height();
    },

    addEventListeners: function () {
        $('#playbutton').click(function () {
            Slideshow.pause();
            $('#hero').fadeOut("slow", function () {
                Game.show()
            });
        });
    }
}

$(document).ready(function () {
    Application.initSizeConstants();
    Application.addEventListeners();
    Slideshow.start();
    //TEST
    $('#hero').hide();
    Game.show();

});

$(document).resize(function () {
    Application.initSizeConstants();
});
