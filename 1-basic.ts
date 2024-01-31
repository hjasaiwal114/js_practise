import z from 'zod';

const schema = z.object({
    name: z.string(),
    age: z.number(),
    isAlive: z.boolean(),
    hobbies: z.array(z.string()),
    address: z.object({
        street: z.string(),
    }),
});


const payload = {
    name: "Himanshu",
    age: 23,
    isAlive: true,
    hobbies: ["coding", "reading"],
    address: {
        street: "123 Main ST",
    },
};

const result = schema.parse(payload)

console.log(stringl)