SolutionGenerator = {
    solutions: new Array(81),
    attempts: new Array(81),
    index: 0,


    generate: function () {
        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                var result;
                if (Math.round(Math.random() * Game.difficulty) == 0)
                    result = (i * 3 + Math.floor(i / 3) + j) % 9 + 1;
                else
                    result = 0;
                this.solutions[i * 9 + j] = result;
            }
        }
        //this.solutions = "609238745274561398853947621486352179792614583531879264945723816328196457167485932".split("");
        return this.solutions;
    },

    isViable: function (candidate) {
        if (this.solutions.getSudokuRow(this.index).indexOf(candidate) > -1) {
            return false;
        }
        if (this.solutions.getSudokuColumn(this.index).indexOf(candidate) > -1) {
            return false;
        }
        return true;
    },

    getCandidates: function () {
        return $([1, 2, 3, 4, 5, 6, 7, 8, 9]).not(this.attempts[this.index]).get();
    }
};
