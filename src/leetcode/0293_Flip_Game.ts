/**
 * 293) Flip Game
 * Difficulty:  Easy
 * Topics: String
 * Companies: Google
 */

function generatePossibleNextMoves(currentState: string): string[] {
  let result = [];
  let arr = currentState.split('');
  let possibleStarts = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === '+') {
      if (arr[i + 1] === '+') {
        possibleStarts.push(i);
      } else {
        i += 1;
      }
    }
  }

  for (let j = 0; j < possibleStarts.length; j++) {
    let tmp = [...arr];

    tmp[possibleStarts[j]] = '-';
    tmp[possibleStarts[j] + 1] = '-';

    result.push(tmp.join(''));
  }

  return result;
}
