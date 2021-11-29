<template>
  <div>
    <form @submit.prevent="createProduct">
      <div class="field">
        <label>Username</label>
        <input
          v-model="product.name"
          type="text"
          placeholder="Add a product name"
        />
      </div>
      <div class="field">
        <label>Product Name</label>
        <input
          v-model="product.name"
          type="text"
          placeholder="Add a product name"
        />
      </div>
      <input type="submit" class="button -fill-gradient" value="Submit" />
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    methods: {

    },
  }
</script>

<style scoped>

</style>
