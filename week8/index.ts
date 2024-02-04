interface Todo {
    title: string;
    description: string;
    id: number;
    done: boolean;
}

type UpdateTodoInput = Partial<Todo>; 

function swap<T, U>(a: T, b:U) : (U, T) {
    return [b, a]
}

const [state, setState] = swap(1, "2");
const 