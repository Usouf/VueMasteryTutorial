<template>
  <div v-if="product">
    <h1>{{ product.name }}</h1>
    <p>Category: @{{ product.category }}</p>
    <p>Price: {{ product.price }}</p>
    <p>Description: {{ product.description }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Detail',
  props: ['id'],
  created() {
    this.$store.dispatch('product/getProduct', this.id)
    // console.log("from created: " + this.getProductById(this.id));
  },
  computed: {
    ...mapState({
      product: state => state.product.product
    }),
    ...mapGetters(['product/getProductById'])
  }
}
</script>

<style scoped></style>
