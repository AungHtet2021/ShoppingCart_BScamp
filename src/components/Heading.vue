<template>
<v-container>
  <v-app-bar 
    app
    color="success"
    dark
    >
    <router-link to="/">Home</router-link>
    <v-spacer></v-spacer>
    <router-link to="/cart"><v-badge color="red" :content="count" v-if="choose">
      <v-icon>shopping_cart</v-icon>
    </v-badge>
    </router-link>
    </v-app-bar>
</v-container>
</template>

<script>
import { mapState,mapGetters} from 'vuex';
// import { mapGetters } from 'vuex';
export default {
  name: 'Heading',
  props: {
    
  },
  computed:{
        ...mapState({
            cart:(state)=>state.cart,
            choose:(state)=>state.choose
        }),
        ...mapGetters({
         count : 'getCartLength'
        })
      }
}
</script>

<style>

</style>

