/**
 * A photography set consists of `N` cells in a row, numbered from `1` to `N` in
 * order, and can be represented by a string `C` of length `N`. Each cell `i` is
 * one of the following types (indicated by `C[i]`, the `ith` character of `C`):
 *    - If `C[i]​ = "P"`, it is allowed to contain a photographer
 *    - If `C[i]​ = "A"`, it is allowed to contain an actor
 *    - If `C[i]​ = "B"`, it is allowed to contain a backdrop
 *    - If `C[i]​ = "."`, it must be left empty
 *
 * A photograph consists of a photographer, an actor, and a backdrop, such that
 * each of them is placed in a valid cell, and such that the actor is between
 * the photographer and the backdrop. Such a photograph is considered artistic
 * if the distance between the photographer and the actor is between `X` and `Y`
 * cells (inclusive), and the distance between the actor and the backdrop is
 * also between `X` and `Y` cells (inclusive). The distance between cells `i`
 * and `j` is `∣i - j|` (the absolute value of the difference between their
 * indices).
 *
 * Determine the number of different artistic photographs which could
 * potentially be taken at the set. Two photographs are considered different if
 * they involve a different photographer cell, actor cell, and/or backdrop cell.
 *
 * Constraints:
 * 1 <= N <= 200
 * 1 <= X <= Y <= N
 *
 * Sample test case #1
 * N = 5
 * C = APABA
 * X = 1
 * Y = 2
 *
 * Expected Return Value = 1
 *
 * Sample test case #2
 * N = 5
 * C = APABA
 * X = 2
 * Y = 3
 *
 * Expected Return Value = 0
 *
 * Sample test case #3
 * N = 8
 * C = .PBAAP.B
 * X = 1
 * Y = 3
 *
 * Expected Return Value = 3
 */
function getArtisticPhotographCount(N: number, C: string, X: number, Y: number) {
  let count = 0;

  // Define all positions of photographers, models, and backgrounds
  let photographers: number[] = [];
  let models: number[] = [];
  let backgrounds: number[] = [];

  // Go through our string and push the index to the appropriate array
  for (let i = 0; i < N; i++) {
    switch (C.charAt(i)) {
      case 'P':
        photographers.push(i);
        break;
      case 'A':
        models.push(i);
        break;
      case 'B':
        backgrounds.push(i);
        break;
    }
  }

  // Go through our models...
  for (let md of models) {
    // Go through the photographers...
    for (let pg of photographers) {
      if (md > pg && md - pg >= X && md - pg <= Y) {
        // When the current model is to the right of a photographer within X-Y
        // Go through the backgrounds...
        for (let bg of backgrounds) {
          // When the backgound is to the right of the model/phoptographer pair
          // and is within X-Y we have an artistic photo!
          if (bg > md) {
            bg - md >= X && bg - md <= Y && count++;
          }
        }
      } else if (pg > md && pg - md >= X && pg - md <= Y) {
        // When the current model is to the left of the photographer within X-Y
        // Go through the backgrounds...
        for (let bg of backgrounds) {
          // When the background is to the left of the model/photographer pair
          // and is within X-Y we have an artistic photo!
          if (bg < md) {
            md - bg >= X && md - bg <= Y && count++;
          }
        }
      }
    }
  }

  return count;
}
