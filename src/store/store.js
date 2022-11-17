import Vue from "vue";
import Vuex from "vuex"
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        choose:false,
        products:[
            {id:1,name:"coffee",price:200,quantity:1},
            {id:2,name:"noodle",price:700,quantity:1},
            {id:3,name:"bread",price:500,quantity:1},
            {id:4,name:"water",price:500,quantity:1},
        ],
        cart:[]
    },
    getters:{
        getCartLength(state){
            return state.cart.length
        }
    },
    mutations:{
        ADD_PRODUCT(state,product){
            state.choose=true;
            // product.quantity=1;
            state.cart.push(product)
        },
        REMOVE_PRODUCT(state,removeProduct){
            state.cart=state.cart.filter(item=>{
                return item.id!=removeProduct.id;
            })
        },
        INCREASE(state,product){
            state.cart=state.cart.filter(item=>{
                if(item.id == product.id) item.quantity++;
                return item
            })
        },
        DECREASE(state,product){
            state.cart=state.cart.filter(item=>{
                if(item.id == product.id && product.quantity>1)
                item.quantity--; 
                return item
            })
        }

    },
    actions:{
        IncreaseProduct(context,product){
            context.commit('INCREASE',product);
        },
        DecreaseProduct(context,product){
            context.commit('DECREASE',product);
        }
    }
})