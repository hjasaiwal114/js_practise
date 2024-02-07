import z from "zod";

const schema = z.object({
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "name must be a stirng",
    }),
    age: z.number(),
    isAlive: z.boolean(),
    hobbies: z.array(z.string()),
    address: z.object({
        street: z.string(),
    }),
});

type CreateUserInput = z.infer<typeof schema>;

function cretaeUser(props: CreateUserInput) {
    const result = schema.safeParse(props);

    return result;
}

const payload: CreateUserInput = {
    age: 30,
    isAlive: true,
    hobbies: ["codin","reading"],
    address: {
        street: "123 Main St",
    },
    // @ts-ignore
    isunknown: true;
};

const result = cretaeUser(payload);
console.log(JSON.stringify(result, null, 2));