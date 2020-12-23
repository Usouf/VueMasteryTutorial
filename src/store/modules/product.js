import ProductService from '@/services/ProductService.js'

export const namespaced = true

export const state = {
  response: {
    totalCount: 0,
    totalPages: 0,
    nextPage: 0,
    currentPage: 0,
    previousPage: 0,
    products: []
  },
  product: {}
}

export const mutations = {
  ADD_PRODUCTS(state, product) {
    state.products.push(product)
  },
  ADD_ALL_PRODUCTS(state, productsResponse) {
    state.response.totalCount = productsResponse.count
    state.response.totalPages = productsResponse.total_pages
    state.response.nextPage = productsResponse.next
    state.response.currentPage = productsResponse.current
    state.response.previousPage = productsResponse.previous
    state.response.products = productsResponse.results
  },
  ADD_PRODUCT(state, product) {
    state.product = product
  }
}

export const actions = {
  createProduct({ commit }, product) {
    console.log('Creating product from actions')
    return ProductService.postProduct(product)
      .then(response => {
        console.log(response)
        commit('ADD_PRODUCTS', product)
      })
      .catch(error => {
        console.log('Error creating product: ', error)
      })
  },
  getAllProducts({ commit }, page) {
    console.log('getAllProducts: page => ' + page)
    return ProductService.getProducts(page)
      .then(response => {
        console.log(response)
        commit('ADD_ALL_PRODUCTS', response.data)
      })
      .catch(error => {
        console.log(error)
      })
  },
  getProduct({ commit, getters, rootState }, id) {
    var product = getters.getProductById(id)
    console.log('User creating is: ' + rootState.user.user.name)

    if (product) {
      commit('ADD_PRODUCT', product)
    } else {
      console.log('Fetch data from server')
      ProductService.getProduct(id)
        .then(response => {
          // this.product = response.data
          console.log(response.data)
          commit('ADD_PRODUCT', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}

export const getters = {
  getProductById: state => id => {
    console.log('getting product from getter: ' + id)
    return state.response.products.find(product => product.id === id)
  }
}
