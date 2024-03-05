/**
 * 657) Robot Return to Origin
 * Difficulty:  Easy
 * Topics: String, Simulation
 * Companies: Goldman Sachs, Yandex, Amazon, Google
 */

function judgeCircle(moves: string): boolean {
  const tracker = {
    U: 0,
    D: 0,
    L: 0,
    R: 0,
  };

  for (let i = 0; i < moves.length; i++) {
    tracker[moves.charAt(i) as keyof typeof tracker] += 1;
  }

  if (tracker.U === tracker.D) {
    if (tracker.L === tracker.R) {
      return true;
    }
  }

  return false;
}
