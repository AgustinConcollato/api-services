import { urlAddress } from "./api"

export class Address {
    constructor(userId) {
        this.userId = userId
    }

    async get(userId) {
        try {
            const response = await fetch(`${urlAddress}/${this.userId}`)

            if (!response.ok) {
                throw new Error('Error al obtener las direcciones')
            }

            return await response.json()
        } catch (error) {
            throw new Error(error)
        }
    }

    async save(address) {
        try {
            const response = await fetch(`${urlAddress}/${this.userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ code: address.code })
            })

            if (!response.ok) {
                throw new Error('Error al guardar la dirección')
            }

            return await response.json()

        } catch (error) {
            throw new Error(error)
        }
    }
}