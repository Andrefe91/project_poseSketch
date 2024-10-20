export default function generateOrder(random, collectionSize) {
    let order = [];

    for (let i = 0; i < collectionSize; i++) {
        order.push(i);
    }

    if (!random) {
        return order;
    } else {
        return order.sort(() => Math.random() - 0.5);
    }
}
