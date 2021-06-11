import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './components/customerView/Dashboard';
import LoginComponent from "./components/customerView/LoginComponent";
import RegisterComponent from "@/components/customerView/RegisterComponent";
import DetailsPageComponent from "@/components/customerView/DetailsPageComponent";
import ShoppingCart from "@/components/customerView/ShoppingCart";
import PurchasePage from "@/components/customerView/PurchasePage";
import Payment from "@/components/customerView/Payment";
import AfterPayment from "@/components/customerView/AfterPayment";
import store from '@/store';
import _ from 'lodash';

Vue.use(Router);

const routerTmp = new Router({
    mode:"history",
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard,
            props: true,
        },
        {
            path: '/login',
            name:'login',
            component:LoginComponent
        },
        {
            path:'/register',
            name:'register',
            component:RegisterComponent
        },
        {
            path:'/DetailPage',
            name:'DetailPage',
            component:DetailsPageComponent
        },
        {
            path:'/ShoppingCart',
            name:'ShoppingCart',
            component:ShoppingCart
        },
        {
            path:'/PurchasePage',
            name:'PurchasePage',
            component:PurchasePage,
            props:true
        },
        {
            path:'/Payment',
            name:'Payment',
            component:Payment,
            props:true
        },
        {
            path:'/AfterPayment',
            name:'AfterPayment',
            component:AfterPayment
        }


    ]
});

routerTmp.beforeEach((to, from, next) => {
    console.log(to, from);
    if (to.path === '/PurchasePage') {
        const userInfo = store.getters['GET_USER_INFO'];
        if (!_.get(userInfo, 'userName')) {
            next('/login');
        }
        else {
            next();
        }
    }
    else {
        next();
    }
});


export default routerTmp;