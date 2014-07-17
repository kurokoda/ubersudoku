Application = {
    WIDTH: undefined,
    HEIGHT: undefined,

    initSizeConstants: function(){
        Application.WIDTH = $(document).width();
        Application.HEIGHT = $(document).height();
    }
}

$(document).ready(function () {
    Application.initSizeConstants();
    Slideshow.start();
});

$(document).resize(function () {
    Application.initSizeConstants();
});
