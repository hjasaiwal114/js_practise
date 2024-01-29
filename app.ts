interface Product {
    name: string;
    price: number;
    description: string;
}

type DiscountProduct = Omit<Partial<Product>, 'description'>;

const discountItem : DiscountProduct = {
    name: 'Widget',
    price: 19.99,
}