Slideshow = {

    index: 0,
    images: ['./lib/img/slideshow/home-hero-2-1440-900.jpg', './lib/img/slideshow/home-hero-3-1440-900.jpg', './lib/img/slideshow/home-hero-4-1440-900.jpg', './lib/img/slideshow/home-hero-5-1440-900.jpg', './lib/img/slideshow/home-hero-6-1440-900.jpg', './lib/img/slideshow/home-hero-10-1440-900.jpg'],
    herotexts: ['moving tiles', 'getting score', 'beating yourself', 'sharing frustrations', 'owning the board', 'creating puxxles'],
    taglines: ['win a game, get picked up in minutes', 'time, value, and productivity, you can waste them all', 'stay at home when you could be going out', 'destroy your social capital one game at a time', 'welcome to glorious sudoku victory', 'never leave the house again'],

    start: function () {
        this.initSlider();
        setInterval(this.advance, 3000)
    },

    advance: function () {
        var target = $("#background");
        target.animate({
            left: '-100%'
        }, 500, function () {
            Slideshow.initSlider();
        });
    },

    initSlider: function () {
        var $background = $("#background");
        var modIndex = this.getModIndex()
        $background.html("");
        $background.append("<div class='slide-container' id='container-left'></div>");
        $background.append("<div class='slide-container' id='container-right'></div>");
        $('#container-left').append("<img class='image' src=" + this.images[modIndex] + "/>");
        $('#container-right').append("<img class='image' src=" + this.images[modIndex + 1] + "/>");
        $('#container-right').css({left: '100%'});
        $('#container-left').append("<div class='herotext'>" + this.herotexts[modIndex] + "</div>");
        $('#container-left').append("<div class='tagline'>" + this.taglines[modIndex] + "</div>");
        $('#container-left').append("<p><div class='button' id='playbutton'>Play Ubersudoku</div></p>");

        $('#container-right').append("<div class='herotext'>" + this.herotexts[modIndex + 1] + "</div>");
        $('#container-right').append("<div class='tagline'>" + this.taglines[modIndex + 1] + "</div>");
        $('#container-right').append("<p><div class='button' id='playbutton'>Play Ubersudoku</div></p>");
        $('#background').css({left: '0%'});
    },

    getModIndex: function () {
        modIndex = this.index % this.images.length;
        this.index++;
        return modIndex
    },

    pause: function () {
        //undefined;
    }
};
