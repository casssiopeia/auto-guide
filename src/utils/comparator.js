const COMPARATOR = {
    biggerBetter: (a, b) => a > b,
    lowerBetter: (a, b) => a < b
};

export const getBestCar = (cars, key, type) => {
    console.log(type);
    return cars.reduce((bestCar, currentCar) => {
        return COMPARATOR[type](currentCar[key], bestCar[key]) ? currentCar : bestCar;
    }, cars[0]);
}