
<template>
    <div>
        <Product v-for="product in products" :product="product" :key="product.id">
        </Product>
    </div>
</template>

<script >
import {mapState} from 'vuex'
import Product from './Product.vue'
export default{
    components: {
               Product
        },
        computed:{
            ...mapState({
                products:(state)=>state.products
            })
        }
}
</script>

<style l>

</style>