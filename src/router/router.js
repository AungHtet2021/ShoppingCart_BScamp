import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home"
import Cart from "../views/Cart"

Vue.use(VueRouter)

const routes=[
    {
        path:"/",
        name:"home",
        component:Home
    },
    {
        path:"/cart",
        name:"cart",
        component:Cart
    }
]

const router=new VueRouter({
    mode:"history",
    base:process.env.BASE_URL,
    routes,
});
export default router;