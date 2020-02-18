function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

let grid;
let cols = 10;
let rows = 10;
let resolution = 50;

function setup() {
    createCanvas(1300, 700);
    cols = width / resolution;
    rows = height / resolution;

    grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = floor(random(2));
        }
    }
}

function draw() {
    background('rgb(227,234,234)');
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * resolution;
            let y = j * resolution;
            if (grid[i][j] == 1) {
                
                let c = color(2, 203, 179);
                fill(c);
                stroke(c);
                ellipse(x, y, resolution - 1, resolution - 1);
            }
        }
    }

    let next = make2DArray(cols, rows);

    //compute next based on grid
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let state = grid[i][j];


            //Count live neighbors
            let sum = 0;
            let neighbors = countNeighbors(grid, i, j);



            //RULES
            if (state == 0 && neighbors == 3) {
                next[i][j] = 1;
            }
            else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
                next[i][j] = 0;
            }
            else {
                next[i][j] = state;
            }

        }
    }
    grid = next;

}

function countNeighbors(grid, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {

            let col = (x + i + cols) % cols;
            let row = (y + j + rows) % rows;

            sum += grid[col][row];
        }
    }
    sum -= grid[x][y];
    return sum;
}

// reset board when mouse is pressed
function mousePressed() {
    setup();
  }
