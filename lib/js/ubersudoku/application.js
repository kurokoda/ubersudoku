Application = {
    WIDTH: undefined,
    HEIGHT: undefined,

    initSizeConstants: function () {
        Application.WIDTH = $(document).width();
        Application.HEIGHT = $(document).height();
    },

    addEventListeners: function () {
        $('#brand').click(function (e) {
            $(location).attr('href', "./");
        });
    },

    displayWinningState: function () {
        $('#brand').click(function (e) {
            $(location).attr('href', "./");
        });
    }
}

$(document).ready(function () {
    Application.initSizeConstants();
    Application.addEventListeners();
    Slideshow.start();
});

$(document).resize(function () {
    Application.initSizeConstants();
});

$(document).keydown(function (e) {
    if (e.keyCode > 48 && e.keyCode < 58) {
        var numericValueOfKeyPressed = e.keyCode - 48;
        Game.updateSelectors(numericValueOfKeyPressed);
    }
});



