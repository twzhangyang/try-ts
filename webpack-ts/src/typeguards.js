const logError = (error) => {
    if (typeof error === 'string') {
        console.log(error);
    }
    else {
        console.log(error.message);
    }
};
export class Rectangle {
    constructor(topLeft, width, height) {
        this.topLeft = topLeft;
        this.width = width;
        this.height = height;
    }
}
export class Circle {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }
}
const getArea = (geometry) => {
    if (geometry instanceof Circle) {
        return Math.PI * Math.pow(geometry.radius, 2);
    }
    else {
        return geometry.height * geometry.width;
    }
};
const isPoint = (geometry) => typeof geometry.x === 'number' && typeof geometry.y === 'number';
const logCenter = (geometry) => {
    if (isPoint(geometry)) {
        console.log(geometry.x, geometry.y);
    }
    else if (geometry instanceof Rectangle) {
        console.log(geometry.topLeft.x + geometry.width / 2, geometry.topLeft.y + geometry.height / 2);
    }
    else {
        console.log(geometry.center);
    }
};
//# sourceMappingURL=typeguards.js.map