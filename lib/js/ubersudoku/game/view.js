View = {

    game: undefined,

    init: function () {
        $('#content').append('<div class="frame" id = "game"></div>');
        game = $('#game');
        game.empty();
        this.build();
    },

    build: function () {
        this.createTiles();
        this.createSelectorTiles();

        this.createButtons();
        this.createInstructions();
    },

    createInstructions: function () {
        game.append('<p>Use your keyboard to select a value</p>');
        game.append("<p>Click a tile to set its value</p>");
        game.append("<p>Double click a tile to reset its value</p>");
        game.append("<p>Click the evaluate button for hints</p>");
    },

    createButtons: function () {
        game.append('<p><div class="button" id="evaluatebutton">Evaluate</div></p>');
        game.append('<p><div class="button" id="newgamebutton">New game</div></p>');
    },

    createTiles: function () {
        var cell_id = 0;
        for (var i = 0; i < 9; i++) {
            var parentRow = "row_" + i;
            $('#game').append('<div id="' + parentRow + '"/>');
            for (var j = 0; j < 9; j++) {
                var value = Model.tileValues[cell_id];
                var tile = new Tile(parentRow, value, cell_id++);
                Model.tiles.push(tile);
            }
        }
    },

    createSelectorTiles: function () {
        $('#game').append('<div id="tileselector" />');
        for (var k = 1; k <= 9; k++) {
            new SelectorTile("#tileselector", k);

        }
    },

    updateSelectors: function (value) {

        for (var i = 0; i < SelectorTile.instances.length; i++) {
            if (SelectorTile.instances[i].value == value) {
                $(SelectorTile.instances[i].element).addClass("active");
            }
            else {
                $(SelectorTile.instances[i].element).removeClass("active");
            }
        }
    },

    showResults: function () {
        $('#game').fadeOut("slow", function () {
            $('#game').remove();
            $('#content').append('<div class="frame" id = "game-over"></div>');
            $('#game-over').addClass('textpadding')
            $('#game-over').append('<div class="title">YOU ARE UBER</div>');
            $('#game-over').append('<p>Congratulations. You have won, I hope you enjoyed my game, and I look forward to hearing from you soon. Thanks again for playing </p>');
            $('#game-over').append('<p>- Ian Greenough </p>');
            $('#game-over').append('<p><div class="button" id="playagainbutton">Play again</div></p>');
            $('#playagainbutton').click(function () {
                Controller.init();
            });
        });
    }
}
