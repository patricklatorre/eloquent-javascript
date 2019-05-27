/**
 * An iterable 2D array represented as a single array.
 * to get an element:
 *    X * width + Y
 */
class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    // Set the iterator to Matrix iterator by changing the prototype
    Matrix.prototype[Symbol.iterator] = function () {
      return new MatrixIterator(this);
    }
    this.width = width;
    this.height = height;
    this.matrix = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.matrix[y * width + x] = element(x, y);
      }
    }
  }

  get(x, y) {
    return this.matrix[y * width + x];
  }

  set(x, y, element) {
    this.matrix[y * width + x] = element;
  }
}

/**
 * Iterator for the Matrix class
 */
class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = 0;
  }

  next() {
    if (this.y == this.matrix.height)
      return { done: true };

    let element = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x, this.y),
    };

    this.x++;

    if (this.x == this.matrix.width)
      return { value, done: false };
  }
}

class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }

  set(x, y, element) {
    super.set(x, y, element);
    if (x != y) {
      super.set(y, x, element);
    }
  }
}

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get length() {
    return Math.sqrt(x * x + y * y);
  }

  plus(addendVec) {
    return new Vec(this.x + addendVec.x, this.y + addendVec.y);
  }

  minus(addendVec) {
    return new Vec(this.x - addendVec.x, this.y - addendVec.y);
  }
}


////////////////////////////////////////////////////////////////

startExercise('vectors');
const v1 = new Vec(1, 20);
const v2 = new Vec(20, 2);
console.log(v1);
console.log(v2);
console.log('=', v1.plus(v2));




////////////////////////////////////////////////////////////////

/**
 * Divider between exercises
 */
function startExercise(exerciseName) {
  const line = '--------------';
  console.log(`${line} ${exerciseName.toUpperCase()} ${line}`);
}
