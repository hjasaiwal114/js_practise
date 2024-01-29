interface Car {
    make: string;
    model: string;
    year: number;
}

type PartialCar = Partial<Car>;

const partilCar : PartialCar = {
    make: 'toyota',
};