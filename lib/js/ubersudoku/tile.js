function Tile(parent, value, index) {
    this.parent = "#" + parent;
    this.index = index;
    this.id = 'tile_' + index;
    this.element = '#' + this.id;
    this.value = value;
    this.locked = false;
    this.init(index);
    this.addEventListeners();
    Tile.instances.push(this);
}

Tile.instances = [];

Tile.isLocked = function (target) {
    return Tile.instances[target.getAttribute('data-index')].locked;
};

Tile.getOffsetTileIndices = function () {
    var result = [];
    var bases = [3, 27, 33, 57];
    for (var k = 0; k < bases.length; k++) {
        var base = bases[k];
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                var head = base + j + (i * 9);
                result.push(head)
            }
        }
    }
    return result;
};

Tile.prototype.init = function () {
    if (Tile.getOffsetTileIndices().indexOf(this.index) > -1) {
        $(this.parent).append('<div data-index="' + this.index + '" class = "cell white" id="' + this.id + '" />');
    }
    else {
        $(this.parent).append('<div data-index="' + this.index + '" class = "cell grey" id="' + this.id + '" />');
    }
    if (this.value > 0) {
        this.locked = true;
        $(this.element).addClass('locked');
        $(this.element).text(this.value);
    }
};

Tile.prototype.addEventListeners = function () {
    $(this.element).click(function () {
        if (!Tile.isLocked(this)) {
            var index = this.getAttribute('data-index')
            Game.tileValues[index] = Tile.instances[index].value;
            $(this).text(Game.selectedTileValue);
        }
    });

    $(this.element).mouseover(function () {
        if (!Tile.isLocked(this))
            $(this).removeClass('hover-out').addClass('hover-in');
    });

    $(this.element).mouseout(function () {
        if (!Tile.isLocked(this)) {
            $(this).removeClass('hover-in').addClass('hover-out');
            if (Tile.getOffsetTileIndices().indexOf(this.getAttribute('data-index')) > -1) {
                $(this).addClass('grey');
            }
            else {
                $(this).addClass('white');
            }
        }
    });
};


