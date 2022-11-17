
<template>
        <div>
        <v-card elevation="2">
            <v-card-subtitle>{{cart.name}}</v-card-subtitle>
            <v-card-subtitle>{{cart.price}}</v-card-subtitle>
            <v-btn @click="removeFromCart" >Remove</v-btn>
            <br/>
            <v-card-text >Quantity : {{cart.quantity}}</v-card-text>
            <div >Price : {{cart.price*cart.quantity}}</div>
            <br/>
            <v-btn 
            class="mx-2"
            fab
            dark
            small
            color="primary" @click="increase">
                <v-icon>
                    mdi-plus
                </v-icon>
            </v-btn>
            <v-btn 
            class="mx-2"
            fab
            dark
            small
            color="primary" @click="decrease">
                <v-icon>
                    mdi-minus
                </v-icon>
            </v-btn>
            </v-card>
    </div>
    </template>
    <script >
    // import {mapMutations} from 'vuex';
    export default{
        name: 'ShowCart',
        props:['cart'],
        data(){
        return{
            quantity:""
        }
    },
        methods:{
            removeFromCart(){
                this.$store.commit("REMOVE_PRODUCT",this.cart)
            },
            increase(){
                this.$store.dispatch('IncreaseProduct',this.cart)
            },
            decrease(){
                this.$store.dispatch('DecreaseProduct',this.cart)
            }
        }
    }
    </script>
    
    <style >
    
    </style>