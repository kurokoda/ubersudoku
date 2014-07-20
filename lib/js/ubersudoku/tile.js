function Tile(parent, value, index) {
    this.parent = "#" + parent;
    this.index = index;
    this.id = 'tile_' + index;
    this.element = '#' + this.id;
    this.value = value;
    this.locked = false;
    this.errorCount = 0;
    this.errorClass = undefined;
    this.colorClass = undefined;
    this.okayClass = undefined;
    this.init(index);
    this.addEventListeners();
    Tile.instances.push(this);
}

Tile.instances = [];

Tile.isLocked = function (target) {
    return Tile.instances[target.getAttribute('data-index')].locked;
};

Tile.resetAllTiles = function () {
    for (var i = 0; i < this.instances.length; i++) {
        this.instances[i].resetErrorLevel();
    }
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
        this.colorClass = "white";
        this.okayClass = "blue-light";
    }
    else {
        $(this.parent).append('<div data-index="' + this.index + '" class = "cell grey" id="' + this.id + '" />');
        this.colorClass = "grey";
        this.okayClass = "blue";
    }
    if (this.value > 0) {
        $(this.element).addClass('locked');
        $(this.element).text(this.value);
        this.locked = true;
    }
};

Tile.prototype.addEventListeners = function () {
    $(this.element).click(function () {
        if (!Tile.isLocked(this)) {
            var index = this.getAttribute('data-index');
            var value = Game.selectedTileValue;
            Game.tileValues[index] = value;
            $(this).text(value);
        }
    });

    $(this.element).mouseover(function () {
        if (!Tile.isLocked(this)) {
            $(this).removeClass('fade-out').addClass('fade-in');
        }
    });

    $(this.element).mouseout(function () {
        if (!Tile.isLocked(this)) {
            $(this).removeClass('fade-in').addClass('fade-out');
            $(this).addClass(this.colorClass);
        }
    });
};

Tile.prototype.displayErrorLevel = function () {
    if (this.errorCount == 0)
        return;
    switch (this.errorCount) {
        case 1:
            this.errorClass = "light-red";
            break
        case 2:
            this.errorClass = "med-red";
            break
        case 3:
            this.errorClass = "red";
            break
    }
    $(this.element).addClass(this.errorClass);
    $(this.element).addClass('fade-out');
    var delegate = this;
    setTimeout(function () {
        $(delegate.element).removeClass(delegate.errorClass).addClass(delegate.colorClass)
    }, 1000)
};

Tile.prototype.displayOK = function () {
    $(this.element).addClass(this.okayClass);
    $(this.element).addClass('fade-out');
    var delegate = this;
    setTimeout(function () {
        $(delegate.element).removeClass(delegate.okayClass).addClass(delegate.colorClass)
    }, 500)
};

Tile.prototype.resetErrorLevel = function () {
    this.errorCount = 0;
};


