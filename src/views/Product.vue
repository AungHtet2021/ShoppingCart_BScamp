

<template>
<div>
    <v-card elevation="2">
        <v-card-title>{{product.name}}</v-card-title>
        <v-card-subtitle>{{product.price}}</v-card-subtitle>
        <v-btn @click="addToCart" :disabled="selectedProduct">Add to Cart</v-btn>
    </v-card>
</div>
</template>
<script >
// import {mapMutations} from 'vuex';
import  {mapState} from 'vuex';
export default{
    props:['product'],
    methods:{
        // ...mapMutations({
        //     ADD_PRODUCT
        // }),
        addToCart(){
            this.$store.commit("ADD_PRODUCT",this.product)
        }
    },
    computed:{
        ...mapState({
        carts:(state)=>state.cart
    }),
        selectedProduct(){
            let inCart=false;
            this.carts.forEach(item => {
                if(item.id == this.product.id){
                    inCart = true;
                }
            });
            return inCart;
        }
    }
}
</script>

<style >

</style>