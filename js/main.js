const ROWS = 7;
const COLS = 7;

const START = [0, 0];
const GOAL = [6, 6];

const WALLS = [
    [1, 4],
    [4, 6],
    [1, 3],
    [1, 2],
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2],
    [4, 4],
    [6, 4],
    [3, 0],
    [5, 1],
    [1, 5],
    [2, 5],
    [4, 5],
];

const DIRECTIONS = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
];

const grid = document.getElementById("pathfinding-grid");
const runButton = document.getElementById("run-bfs");

const cells = [];

// 1. Build the visual grid
for (let row = 0; row < ROWS; ++row) {
    const cellRow = [];

    for (let col = 0; col < COLS; ++col) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");

        if (row === START[0] && col === START[1]) {
            cell.classList.add("start");
        }
        else if (row === GOAL[0] && col === GOAL[1]) {
            cell.classList.add("goal");
        }
        else if (isWall(row, col)) {
            cell.classList.add("wall");
        }

        grid.appendChild(cell);
        cellRow.push(cell);
    }

    cells.push(cellRow);
}

function isWall(row, col) {
    return WALLS.some(([r, c]) => r === row && c === col);
}

// 2. Find the shortest path using BFS
function bfs() {
    const visited = Array.from(
        { length: ROWS },
        () => Array(COLS).fill(false)
    );

    const parent = Array.from(
        { length: ROWS },
        () => Array(COLS).fill(null)
    );

    const queue = [START];
    let head = 0;

    const explorationOrder = [];

    visited[START[0]][START[1]] = true;

    while (head < queue.length) {
        const [row, col] = queue[head++];
        explorationOrder.push([row, col]);

        if (row === GOAL[0] && col === GOAL[1]) {
            break;
        }

        for (const [dr, dc] of DIRECTIONS) {
            const nr = row + dr;
            const nc = col + dc;

            if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS) {
                continue;
            }

            if (visited[nr][nc] || isWall(nr, nc)) {
                continue;
            }

            visited[nr][nc] = true;
            parent[nr][nc] = [row, col];

            queue.push([nr, nc]);
        }
    }

    // 3. Reconstruct the shortest path
    const path = [];

    if (visited[GOAL[0]][GOAL[1]]) {
        let [row, col] = GOAL;

        while (true) {
            path.push([row, col]);

            if (row === START[0] && col === START[1]) {
                break;
            }

            [row, col] = parent[row][col];
        }

        path.reverse();
    }

    return { explorationOrder, path };
}

// 4. Animate the result
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animateBFS() {
    runButton.disabled = true;

    const { explorationOrder, path } = bfs();

    // Clear any previous animation
    for (const row of cells) {
        for (const cell of row) {
            cell.classList.remove("visited", "path");
        }
    }

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    const delay = 120;

    // Animate explored cells
    for (const [row, col] of explorationOrder) {
        if (delay > 0) {
            await sleep(delay);
        }

        cells[row][col].classList.add("visited");
    }

    // Animate the shortest path
    for (const [row, col] of path) {
        if (delay > 0) {
            await sleep(delay);
        }

        cells[row][col].classList.add("path");
    }

    runButton.disabled = false;
}

runButton.addEventListener("click", animateBFS);