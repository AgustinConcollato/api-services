import { urlShoppingCart } from './api'

export class ShoppingCart {
    constructor(parameters) { }

    async add(data) {

        const response = fetch(urlShoppingCart, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        return await response.json()
    }

    async update(data) {

        const response = fetch(urlShoppingCart, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        return await response.json()
    }

    async get(userId) {

        const response = fetch(`${urlShoppingCart}/${userId}`)

        return await response.json()
    }

    async delete({ userId, productId }) {

        const response = fetch(`${urlShoppingCart}/${userId}/${productId}`, {
            method: 'DELETE'
        })

        return await response.json()
    }
}