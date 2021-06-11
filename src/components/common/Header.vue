<template>
    <div class="header" id="header">
        <ul>
            <li>
<!--                <a href="index.html"><i class="el-icon-link"></i>&nbsp;天猫首页</a>-->
              <router-link to="/"><i class="el-icon-link"></i>&nbsp;天猫首页</router-link>
            </li>

            <li v-if="userName">
                <p id="user_name_show" style="margin-top: 5px; margin-right: 30px; font-size: 10px;color: #999;">
                  用户名：<span>{{userName}}</span>
                </p>
            </li>
            <li v-if="!userName">
               <router-link to="/login">{{type}}</router-link>
            </li>
            <li v-if="!userName">
               <router-link to="/register">{{type1}}</router-link>
            </li>
        </ul>

        <span style="float: right; margin-right: 150px">
            <a href="">我的订单</a>
            <router-link to="/ShoppingCart"><i class="el-icon-shopping-cart-2"></i>&nbsp;购物车</router-link>
        </span>
    </div>
</template>

<script>
import _ from 'lodash';
import {mapGetters} from 'vuex';
    export default {
        name: 'Header',
        data () {
            return {
                type: '请登录',
                type1: '免费注册',
            }
        },
      computed: {
          ...mapGetters({
            userInfo: 'GET_USER_INFO',
          }),
          userName () {
            return _.get(this.userInfo, 'userName');
          },
      },
    };
</script>

<style scoped>

</style>