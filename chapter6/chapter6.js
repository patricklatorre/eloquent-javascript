/**
 * An iterable 2D array represented as a single array.
 * to get an element:
 *    X * width + Y
 */
class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }
  }

  get(x, y) {
    return this.content[y * this.width + x];
  }
  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }
}

////////////////////////////////////////////////////////////////

/**
 * Divider between exercises
 */
function startExercise(exerciseName) {
  const line = '--------------';
  console.log(`${line} ${exerciseName.toUpperCase()} ${line}`);
}
