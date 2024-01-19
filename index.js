const heavyFunction = {
    radius : 1,
    squareSide: 4,
    calculateAreaOfCircle: function(radius) {
        return Math.PI * radius * radius;
    },
    calculateAreaOfCircle: function(side) {
        return side * side;
    },
    getCurrentDate: function() {
        const currentDate = new Date();
        return currentDate.toDateString();
    },
    performCalculations: function() {
        const circleRadius = 5;
        const circleArea = this.calculateAreaOfCircle(circleRadius);
        console.log(`Area of Circle: ${circleArea}`);

        setTimeout(() => {
            const squareSide = 4;
            const squareArea = this.calculateAreaOfCircle(squareSide);
            console.log(`Area of Square: ${squareArea}`);

            setTimeout(() => {
                const currentDate = this.getCurrentDate();
                console.log(`Current date: ${currentDate}`);
            }, 3000);
        }, 3000);
    },
}

heavyFunction.performCalculations();