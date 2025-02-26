export default function generateOrder(random, collectionSize) {
    let order = [];

    for (let i = 0; i < collectionSize; i++) {
        order.push(i);
    }

    if (!random) {
        return order;
    } else {
        order.sort(() => Math.random() - 0.5);
        order.sort(() => Math.random() - 0.4);
        return order.sort(() => Math.random() - 0.3);
    }
}
