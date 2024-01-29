interface MyInterface {
    property1?: string;
    property2: number;
    property3: boolean;
}

interface MyInterfaceTwo {
    property: number;
}

interface MyInterfaceThree {
    property5?: boolean; 
}

interface MyInterfaceTwo extends MyInterface,MyInterfaceThree {
    property6: string;
}

async function myFunction(input: MyInterfaceTwo) : Promise<MyInteface> {
    return input;
}