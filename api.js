import { Categories } from "./categoriesService"
import { Products } from "./productsService"
import { Auth } from "./authService"
import { Firebase } from "./firebaseService"
import { Order } from "./ordersService"
import { Clients } from "./clientsService"

export const api = {
    Products,
    Categories,
    Auth,
    Firebase,
    Order,
    Clients
}

const apiUrl = import.meta.env.DEV ? 'http://localhost:8000' : 'https://api.bazarrshop.com'

export const url = new URL(apiUrl + '/api')
export const urlStorage = new URL(apiUrl + '/storage')
export const urlProducts = new URL(url + '/products')
export const urlCategories = new URL(url + '/categories')
export const urlOrder = new URL(url + '/order')
export const urlClients = new URL(url + '/clients')