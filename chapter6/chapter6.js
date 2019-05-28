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
    this.matrix = matrix;
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
      return { element, done: false };
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

class Group {
  constructor() {
    this.data = [];
    Group.prototype[Symbol.iterator] = function () {
      return new GroupIterator(this);
    };
  }

  static from(iterable) {
    let g = new Group();
    for (let e of iterable) g.add(e);
    return g;
  }

  add(element) {
    if (this.data.includes(element)) return false;
    this.data.push(element);
    return true;
  }

  delete(element) {
    let i = this.data.indexOf(element);
    if (i === -1) return false;
    this.data = this.data.filter((value) => value != element);
    return true;
  }

  has(element) {
    return this.data.includes(element);
  }
}

class GroupIterator {
  constructor(group) {
    this.i = 0;
    this.group = group;
  }

  next() {
    if (this.i === this.group.data.length)
      return { done: true };

    let element = {
      i: this.i,
      value: this.group.data[this.i],
    };

    this.i++;
    return { element, done: false }
  }
}
////////////////////////////////////////////////////////////////

startExercise('vectors');
const v1 = new Vec(1, 20);
const v2 = new Vec(20, 2);
console.log(v1);
console.log(v2);
console.log('=', v1.plus(v2));

startExercise('groups');
let g = new Group();
g.add('item1');
g.add('item2');
g.add('item3');
console.log(g);
g.delete('item2');
for (let value of Group.from(['a', 'b', 'c']))
  console.log(value);


startExercise('borrowing a method');
let map = { one: true, two: true, hasOwnProperty: true };
console.log(
  Object.getPrototypeOf(map).hasOwnProperty.call(map, 'hasOwnProperty')
);



////////////////////////////////////////////////////////////////

/**
 * Divider between exercises
 */
function startExercise(exerciseName) {
  const line = '--------------';
  console.log(`${line} ${exerciseName.toUpperCase()} ${line}`);
}
