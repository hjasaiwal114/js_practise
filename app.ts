function myFunc<T>(input: T) : T {
    return input;
}

const result  = myFunc<{
    name: string;
}>({
    name: 'Himanshu',
});

const resultTwo  = myFunc<string[]>(["Tom"]);