<template>
  <div class="products">
    <h1>Products For {{ user.user.name }}</h1>
    <span>Total results: {{ product.response.totalCount }}</span>
    <br />
    <ProductCard
      v-for="product in product.response.products"
      :key="product.id"
      :product="product"
    />
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li
          class="page-item"
          v-bind:class="{ disabled: !product.response.previousPage }"
        >
          <a class="page-link" @click="getPrevious">Previous</a>
        </li>
        <li
          class="page-item"
          v-for="page in product.response.totalPages"
          :key="page"
        >
          <a class="page-link" @click="getExactPage(page)">{{ page }}</a>
        </li>
        <li class="page-item" v-bind:class="{ disabled: !product.response.nextPage }">
          <a class="page-link" @click="getNext">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCard from '@/components/ProductCard.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ProductList',
  components: {
    ProductCard
  },
  created() {
    this.$store.dispatch('product/getAllProducts', 1)
    // this.getAllProducts(1)
  },
  methods: {
    getNext() {
      if (this.product.response.nextPage) {
        console.log(this.product.response.nextPage)
        // this.getAllProducts(this.product.response.nextPage)
        this.$store.dispatch('product/getAllProducts', this.product.response.nextPage)
      }
    },
    getPrevious() {
      if (this.product.response.previousPage) {
        // this.getAllProducts(this.product.response.previousPage)
        this.$store.dispatch('product/getAllProducts', this.product.response.previousPage)
      }
    },
    getExactPage(page) {
      this.$store.dispatch('product/getAllProducts', page)
    }
  },
  computed: {
    ...mapActions(['getAllProducts']),
    ...mapState(['user', 'product'])
  }
}
</script>

<style scoped>
.products {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
