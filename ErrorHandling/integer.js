function validateInput(input) {
    if (input !== 'string') {
        throw new Error("input can only be string");
    }

    console.log("Input is valid:", input);
}


try {
    validateInput("Hello, world!");
} catch (error) {
    console.log("Error", error.message)
}