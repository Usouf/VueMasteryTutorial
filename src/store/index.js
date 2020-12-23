import { createStore } from 'vuex'
import * as user from '@/store/modules/user.js'
import * as product from '@/store/modules/product.js'

export default createStore({
  name: 'vuex',
  state: {
    categories: ['Indoor', 'Out Door'],
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: false }
    ]
  },
  modules: {
    user,
    product
  }
})
