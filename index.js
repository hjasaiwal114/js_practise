class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    calculateTotalPrice(quantity) {
        return this.price * quantity;
    }
}

class PersonalCareProduct extends Product {
    constructor(id, name, price, warrantyPeriod) {
        super(id, name, price);
        this.warrantyPeriod = warrantyPeriod;
    }

    calculateTotalPrice(quantity) {
        const totalPrice = super.calculateTotalPrice(quantity);
        return totalPrice + this.warrantyPeriod;
    }
}

const PersonalCareProduct = new PersonalCareProduct(1, "Shampoo", 10, 2);
const totalPrice = PersonalCareProduct.calculateTotalPrice(3);

console.log(`Total Price: $${totalPrice}`);
