
<template>
    <div>
        <ShowCart v-for="cart in carts" :cart="cart" :key="cart.id">   
        </ShowCart>
        <h1>Total Price : {{totalCost}} MMk</h1>
    </div>
</template>
<script >
import {mapState} from 'vuex'
import ShowCart from './ShowCart.vue'
export default{
    components:{
        ShowCart
    },
    computed:{
        ...mapState({
            carts:(state)=>state.cart
        }),
        totalCost(){
            let total = 0;
            this.carts.forEach((cart) => {
                total += cart.price * cart.quantity;
        });
        return total;
        }
    }
}
</script>

<style >

</style>