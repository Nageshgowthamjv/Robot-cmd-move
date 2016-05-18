var Grid = {};

function diff() {
	this.dx = this.px - this.x;
	this.dy = this.py - this.y;
	this.px = this.x;
	this.py = this.y;
}

var Robot = {
	move: {
		L: function() {
			diff.call(Grid);
			if (Grid.dx == -1) {
				//facing south
				Grid.y = Grid.y + (1);
			} else if (Grid.dx == 1) {
				//facing east
				Grid.y = Grid.y + (-1);
			} else if (Grid.dy == -1) {
				//facing north
				Grid.x = Grid.x + (-1);
			} else if (Grid.dy == 1) {
				//facing west
				Grid.x = Grid.x + (1);
			}
		},
		R: function() {
			diff.call(Grid);
			if (Grid.dx == -1) {
				//facing south
				Grid.y = Grid.y + (-1);
			} else if (Grid.dx == 1) {
				//facing east
				Grid.y = Grid.y + (1);
			} else if (Grid.dy == -1) {
				//facing north
				Grid.x = Grid.x + (1);
			} else if (Grid.dy == 1) {
				//facing west
				Grid.x = Grid.x + (-1);
			}
		},
		G: function() {
			diff.call(Grid);
			if (Grid.dx !== 0) {
				Grid.x = Grid.x + 1;
			} else if (Grid.dy !== 0) {
				Grid.y = Grid.y + 1;
			}
		}
	}
};



function testSeq(input) {

	Grid = {
		x: 0,
		y: 0,
		px: -1,
		py: 0,
		dx: 1,
		dy: 0
	};

	input.toUpperCase();

	for (var i = 0; i < input.length; i++) {
		Robot.move[input[i]]();
		console.log(Grid.x, Grid.y);
	}
	if (Grid.x === 0 && Grid.y === 0) {
		console.log('Seq : ', input, ' Will repeat');
	} else {
		console.log('Seq : ', input, ' Will not repeat');
	}

}

testSeq('GRRR');