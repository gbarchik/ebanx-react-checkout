const fakeBooks = [
    {
        id: 1,
        name: 'Insights',
        description: 'The best ecommerce overview in Latin America',
        image: '',
        price: 89.9
    },
    {
        id: 2,
        name: 'Aliexpress',
        description: 'Pratical guide for to do excellent purchases in Aliexpress ',
        image: '',
        price: 89.9
    },
    {
        id: 3,
        name: 'Clothes sizes',
        description: 'Complete guide about clothes sizes from China',
        image: '',
        price: 89.9
    }
]

const getProducts = () => Promise.resolve({
    success: true,
    products: fakeBooks
})

export default getProducts