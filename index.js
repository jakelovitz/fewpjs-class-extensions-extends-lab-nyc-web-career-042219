class Polygon {
    constructor(array) {
        this.array = array
    }

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        return this.array.reduce((a, b) => a + b, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.array[0] + this.array[1] < this.array[2] || this.array[1] + this.array[2] < this.array[0] || this.array[0] + this.array[3] < this.array[2]) {
            return false;
        } 
        // else if (this.array[1] + this.array[2] > this.array[0]) {
        //     return true;
        // } 
        // else if (this.array[0] + this.array[3] > this.array[2]) {
        //     return true;
        // } 
        else {
            return true;
        }
    }
  }

  class Square extends Polygon {
    get isValid() {
        if (this.array.every( (val, i, array) => val === array[0] )) {
            return true;
        } else {
            return false;
        }
    }

    get area() {
        return this.array[0] * this.array[1]
    }
  }