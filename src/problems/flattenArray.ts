/**
 * Flatten an array of arrays without using the .flat() method.
 */

/**
 * Flattens a multidimensional array
 * @param arr {any[]} A multidimensional array
 * @returns {any[]}
 */
function flattenArray(arr: any[]): any[] {
  const flatArray = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      flatArray.push(...flattenArray(item));
    } else {
      flatArray.push(item);
    }
  }

  return flatArray;
}
