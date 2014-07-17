Game = {
    NUM_TILES: 81,
    tileValues: undefined,

    show: function () {
        $('#content').append('<div class="board" id = "board"></div>');
        this.init();
        var cell_id = 0;
        for (var i = 0; i < 9; i++) {
            $('#board').append('<div class = "row" id="row_' + i + '" />');
            for (var j = 0; j < 9; j++) {
                $("#row_" + i).append('<div class = "cell" id="' + cell_id + '" />');
                cell_id++;
            }
        }
        $('#board').append('<div id="tileselector" />');
        for (var k = 0; k < 9; k++) {
            $('#tileselector').append('<div class = "cell blue" id="' + k + '" />');
        }

    },
    init: function () {
        this.tileValues = "609238745274561398853947621486352179792614583531879264945723816328196457167485932".split("");
    }
}
