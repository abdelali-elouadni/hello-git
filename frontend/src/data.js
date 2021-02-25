// data est un object contenant multiples produit. Product est un tableau qui contient des objets
const data = {
    products: [
        {
            _id:'1',
            name:'CBDrink 1',
            category:'boisson',
            image:'/images/p1.jpg',
            price: 3,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
            description: 'boisson à base de CBD et thé vert'
        },
        {
            _id:'2',
            name:'CBDrink 2',
            category:'boisson',
            image:'/images/p2.jpg',
            price: 4,
            countInStock: 0,
            rating: 4,
            numReviews: 7,
            description: 'boisson à base de CBD et fruit de la passion'
        },
    ]
}

export default data;