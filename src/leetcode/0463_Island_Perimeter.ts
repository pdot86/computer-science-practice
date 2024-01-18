/**
 * 463) Island Perimeter
 * Difficulty:  Easy
 * Topics: Array, Depth-First Search, Breadth-First Search, Matrix
 * Companies: Facebook, Oracle, Apple, Amazon, Bloomberg, Google, DoorDash
 */

function islandPerimeter(grid: number[][]): number {
  let result = 0;
  const maxRow = grid.length - 1;
  const maxCol = grid[0].length - 1;

  if (maxRow === 0 && maxCol === 0) {
    return 4;
  }

  for (let row = 0; row <= maxRow; row++) {
    for (let col = 0; col <= maxCol; col++) {
      if (grid[row][col]) {
        result += lookAround(row, col);
      }
    }
  }

  function lookAround(x, y) {
    let side = 0;

    // Up
    if (x === 0) {
      side += 1;
    } else {
      if (grid[x - 1][y] === 0) {
        side += 1;
      }
    }

    // Down
    if (x === maxRow) {
      side += 1;
    } else {
      if (grid[x + 1][y] === 0) {
        side += 1;
      }
    }

    // Left
    if (y === 0) {
      side += 1;
    } else {
      if (grid[x][y - 1] === 0) {
        side += 1;
      }
    }

    // Right
    if (y === maxCol) {
      side += 1;
    } else {
      if (grid[x][y + 1] === 0) {
        side += 1;
      }
    }

    return side;
  }

  return result;
}
