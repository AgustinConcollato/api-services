import { urlAddress } from "./api"

export class Address {
    constructor(parameters) { }

    async get(userId) {
        try {
            const response = await fetch(`${urlAddress}/${userId}`)

            if (!response.ok) {
                throw new Error('Error al obtener las direcciones')
            }

            return await response.json()
        } catch (error) {
            throw new Error(error)
        }
    }
}