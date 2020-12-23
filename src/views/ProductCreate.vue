<template>
  <div>
    <form @submit.prevent="createProduct">
      <div class="field">
        <label>Product Name</label>
        <input
          v-model="product.name"
          type="text"
          placeholder="Add a product name"
        />
      </div>
      <div class="field">
        <label>Product Price</label>
        <input
          v-model.number="product.price"
          type="number"
          placeholder="Add an product title"
        />
      </div>
      <div class="field">
        <label>Select a category</label>
        <select v-model="product.category">
          <option v-for="cat in categories" :key="cat">{{ cat }}</option>
        </select>
      </div>
      <div class="field">
        <label>Description</label>
        <input
          v-model="product.description"
          type="text"
          placeholder="Add a description"
        />
      </div>
      <input type="submit" class="button -fill-gradient" value="Submit" />
    </form>
  </div>
</template>

<script>
// import { mapState, mapGetters } from 'vuex'
// import Datepicker from 'vuejs-datepicker'

export default {
  name: 'Product Create',
  // components: {
  //   Datepicker
  // },
  created() {
    console.log(this.product)
  },
  data() {
    return {
      product: this.createFreshProduct(),
      categories: this.$store.state.categories
    }
  },
  // computed: {
  //   ...mapGetters(['categoriesLength', 'getTodoById']),
  //   ...mapState(['user', 'categories'])
  // },
  methods: {
    createProduct() {
      console.log('Creating product')
      this.$store.dispatch('product/createProduct', this.product).then(() => {
        this.$router.push({
          name: 'ProductDetail',
          params: { id: this.product.id }
        })
        this.product = this.createFreshProduct()
      })
    },
    createFreshProduct() {
      return {
        name: '',
        price: 0,
        category: '',
        description: ''
      }
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
