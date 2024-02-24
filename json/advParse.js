const jsonString = `{"name": "john", "age": 30, "dateOfBirth": "1990-01=01"}`;

const reviver  = (key, value) {
    if (key === 'dateofBirth') {
        return new Date(value);
    }
    return value;
};

const obj = JSON.parse(jsonSirng, reviver);

console.log(obj.dateOfBirth);