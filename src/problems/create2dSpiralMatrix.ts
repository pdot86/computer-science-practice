/**
 * PROBLEM: Create a 2D Spiral Matrix given a size of n.
 *
 * - From Meta's practice questions (https://www.facebook.com/careers/life/sample_interview_questions)
 *
 * NOTES:
 *  - The 2D Matrix will consist of n arrays of n items
 *  - There will be a total of n * n items in the matrix
 *  - The matrix will start at the top left, go right, down, left, up, repeat
 *
 * EXAMPLE: n = 3
 *  - Start off with a 2D Matrix of 3 arrays each with 3 values:
 *  [
 *    [?, ?, ?],
 *    [?, ?, ?],
 *    [?, ?, ?]
 *  ]
 *
 *  - Total items in the entire matrix: 3 * 3 = 9
 *
 *  - The matrix should start in the top left at 1 and spiral at the bounds
 *  [
 *    ☛  ►  ▼
 *    ►  ★  ▼
 *    ▲  ◀︎  ◀︎
 *  ]
 *
 *  - The resulting 2D Spiral Matrix:
 *  [
 *    [1, 2, 3],
 *    [8, 9, 4],
 *    [7, 6, 5]
 *  ]
 */

/**
 * Creates a 2D Spiral Matrix
 * @param n {number} A number to generate a 2D Spiral Matrix of this size
 * @returns number[][]
 */
function create2dSpiralMatrix(n: number) {
  if (n <= 0) {
    throw new Error('create2dSpiralMatrix(n:number) n must be greater than 0');
  }

  // Set up our first dimmension of our Matrix
  const matrix: number[][] = new Array(n);

  // Calculate the maximum number, and the number of total items in our Matrx
  const end = n * n;

  // Set up our cardinal directions and how to increment the rol/col
  const dirRow = [0, 1, 0, -1];
  const dirCol = [1, 0, -1, 0];

  // Create a cached function to check if the next row/col is invalid so it is
  // not created on every itteration of the loop.
  const isInvalid = (_mtx: number[][], _row: number, _col: number) => _row < 0 || _col < 0 || _row >= _mtx.length || _col >= _mtx.length || _mtx[_row][_col] !== undefined;

  // We can't use fill on line 40 because then we end up with a single array and
  // pointers to it for each of the rows resulting in n repeats of the same row.
  // So we itterate over each row creating a new array of size n resulting in n
  // arrays of size n.
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n);
  }

  // With our matrix now setup, we can start filling it in, so set some initial
  // values to track everything.
  let dir = 0;
  let row = 0;
  let col = 0;

  // Itterate over all integers from 1 up to and including the total amount of
  // items in our matrix to insert each value at the current row/col.
  for (let count = 1; count <= end; count++) {
    // Set the current row/col value to the itteration count
    matrix[row][col] = count;

    // Increment the row and column for the next itteration, but first check to
    // make sure that the next row or column index is with the bounds of our
    // matrix (dir should always be 0 - n).
    // When the incremented is invalid it will reset the value of dir back to 0
    // which keeps us within the 4 cardinal directions.
    if (isInvalid(matrix, row + dirRow[dir], col + dirCol[dir])) {
      dir = (dir + 1) % 4;
    }

    // Increment the row/column to the next dir (which changes when the next
    // itteration will be for an invalid position)
    row += dirRow[dir];
    col += dirCol[dir];
  }

  // Return the completed 2D Spiral Matrix
  return matrix;
}

export default create2dSpiralMatrix;
