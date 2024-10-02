const baseUrl = process.env.API_BASE_URL
export const get_all_items = async () => {
try {
    const data = await fetch(`${baseUrl}/marleyandme/products`, {
        method: 'GET'
    })

    const res = await data.json()
    return res
} catch (error) {
    console.error(error)
}
}