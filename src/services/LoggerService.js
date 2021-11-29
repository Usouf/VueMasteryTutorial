import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  name: 'ProductService',
  getProducts(username, password) {
    console.log('Product params: ' + pageParam)
    const params = new URLSearchParams()
    params.append('page', pageParam)

    if (pageParam !== 'undefined' || pageParam !== null) {
      return apiClient.get('/products', { params: params })
    } else {
      return apiClient.get('/products')
    }
  },
  getProduct(id) {
    return apiClient.get('/products/' + id)
  },
  postProduct(product) {
    return apiClient.post('/products', product)
  }
}
