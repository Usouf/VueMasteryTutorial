<template>
    <div v-if="product">
        <h1>{{ product.name }}</h1>
        <p>Category: @{{ product.category }}</p>
        <p>Price: {{ product.price }}</p>
        <p>Description: {{ product.description }}</p>
    </div>
</template>

<script>
import EventService from '@/services/EventService.js'

export default {
    props: ['id'],
    data() {
        return {
            product: null
        }
    },
    created() {
        EventService.getEvent(this.id)
        .then(response => {
            this.product = response.data
        })
        .catch(error => {
            console.log(error)
        })
    }
}
</script>

<style scoped>

</style>
