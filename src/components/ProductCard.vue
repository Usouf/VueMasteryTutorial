<template>
  <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
    <div class="product-card">
      <span>@{{ product.category }}</span>
      <h4>{{ product.name }}</h4>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.product-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.product-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
a {
  color: #42b983;
}
a:link {
  text-decoration: none;
}
/* h4 {
color: #42b983;
}
span {
color: #42b983;
} */
</style>
