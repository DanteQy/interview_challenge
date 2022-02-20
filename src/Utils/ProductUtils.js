const ENDPOINT = 'http://localhost:3001'

async function getProducts() {
    try {
        const response = await fetch(`${ENDPOINT}/product`)
        const body = await response.json()
        return body
    } catch (error) {
        return [{
            'error': 'Unable to retrieve products',
            'more': JSON.stringify(error)
        }]
    }
}

async function getProduct(id) {
    try {
        const response = await fetch(`${ENDPOINT}/product/${id}`)
        const body = await response.json()
        return body
    } catch (error) {
        return [{
            'error': `Unable to retrieve product id ${id}`,
            'more': JSON.stringify(error)
        }]
    }
}

export { getProducts, getProduct }
