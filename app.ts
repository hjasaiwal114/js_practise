type MyType = {
    property: string;
};

enum MyEnum {
    enumone= 'enumOne',
    enumTwo = 'enumTwo',
}


type MyTypeTwo =  {
    property2: boolean;
    property3: myEnum 
} & MyType;

async function myFunction(input: MyTypeTwo) : Promise<MyTypeTwo> {
    return input;
}

Object.values(MyEnum).map