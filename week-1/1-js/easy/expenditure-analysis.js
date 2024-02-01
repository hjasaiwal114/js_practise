function calculateTotalSpentByCategory(transactions) {
    const categoryMap = {};

    transactions.forEach(transaction => {
        const { category, price} = transaction;

        if (!categoryMap[category]) {
            categoryMap[category] = price;
        } else {
            categoryMap += price;
        }
    });

    const result  = Object.keys(categoryMap).map(category => ({
        [category]: categoryMap[category]
    }));

    return result;
}