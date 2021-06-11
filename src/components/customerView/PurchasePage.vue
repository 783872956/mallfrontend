<template>
<div>

  <div>
    <img src="image/logo.png" style="margin-left: 200px;margin-top: 20px">
  </div>

  <div>
    <img src="image/img_5.png" style="margin-left: 700px">
  </div>

  <div>

    <div style="color: #333333;font-size: 16px;font-weight: bold;text-align: left;margin-bottom: 30px;margin-left: 300px">
      输入收货地址
    </div>

    <div style="margin-left: 300px">
        <span>
          <label style="vertical-align: top;text-align: left;font-size: 12px">详细地址</label>
          <textarea name="address" v-model="address" id="address" cols="50" rows="2" style="margin-left: 20px" placeholder="建议您如实填写详细收货地址，例如接到名称，门牌号码，楼层和房间号等信息">
          </textarea>
        </span>

        <span style="display: block;margin-top: 10px">
          <label style="vertical-align: top;text-align: left;font-size: 12px">邮政编码</label>
          <input type="text" name="post" v-model="postalCode" style="margin-left: 20px;width: 300px" placeholder="如果您不清楚邮递区号，请填写000000" >
        </span>

        <span style="display: block;margin-top: 10px">
           <label style="vertical-align: top;text-align: left;font-size: 12px">收货人姓名</label>
           <input type="text" style="margin-left: 8px" v-model="name" placeholder="长度不超过15">
        </span>

        <span style="display: block;margin-top: 10px">
          <label style="vertical-align: top;text-align: left;font-size: 12px">手机号码</label>
          <input type="text" style="margin-left: 20px" v-model="phone" placeholder="请输入11位手机号码">
        </span>

    </div>
  </div>

  <div style="margin-left: 300px;margin-top: 50px">
    <div style="color: #333333;font-size: 16px;font-weight: bold;text-align: left;margin-bottom: 30px;">
      确认订单信息
    </div>
    <table style="width: 100%;border-collapse: separate;background-color: transparent">
      <thead>
      <tr>
        <th colspan="2" style="color: #999999;font-family: Arial;font-weight: normal;font-size: 12px;text-align: left;padding-bottom: 5px;">
          <img src="image/img_6.png" style="width: 15px;">
          <span style="color: #333333">店铺：天猫小店</span>
        </th>
        <th style="color: #999999;font-family: Arial;font-weight: normal;font-size: 12px;text-align: left;padding-bottom: 5px;">
          单价
        </th>
        <th style="color: #999999;font-family: Arial;font-weight: normal;font-size: 12px;text-align: left;padding-bottom: 5px;">
          数量
        </th>
        <th style="color: #999999;font-family: Arial;font-weight: normal;font-size: 12px;text-align: left;padding-bottom: 5px;">
          小计
        </th>
        <th style="color: #999999;font-family: Arial;font-weight: normal;font-size: 12px;text-align: left;padding-bottom: 5px;">
          配送方式
        </th>
      </tr>

      <tr>
        <td colspan="2" style="background-color: #b2d1ff;border-right: 2px solid #fff;height: 3px;"></td>
        <td style="background-color: #b2d1ff;border-right: 2px solid #fff;height: 3px;"></td>
        <td style="background-color: #b2d1ff;border-right: 2px solid #fff;height: 3px;"></td>
        <td style="background-color: #b2d1ff;border-right: 2px solid #fff;height: 3px;"></td>
        <td style="background-color: #b2d1ff;border-right: 2px solid #fff;height: 3px;"></td>
      </tr>
      </thead>

      <tbody>
        <tr v-for="(item,index) in tableData" :key="index">
          <td style="text-align: left;">
            <img v-if="item.image" :src="item.image" style="width: 50px;height: 50px">
          </td>
          <td style="text-align: left;font-size: 12px;">{{item.label}}</td>
          <td style="font-size: 12px;">￥{{item.price}}</td>
          <td style="font-size: 12px;">{{item.count}}</td>
          <td style="font-size: 12px;color: #CC0000;font-weight: bold;">
            ￥{{item.totalCount}}
          </td>
          <td style="font-size: 12px;">普通配送</td>
        </tr>
        <tr>
          <td colspan="2" style="background-color: #b2d1ff;border-right: 2px solid #fff;height: 2px;"></td>
          <td style="background-color: #b2d1ff;border-right: 2px solid #fff;height: 2px;"></td>
          <td style="background-color: #b2d1ff;border-right: 2px solid #fff;height: 2px;"></td>
          <td style="background-color: #b2d1ff;border-right: 2px solid #fff;height: 2px;"></td>
          <td style="background-color: #b2d1ff;border-right: 2px solid #fff;height: 2px;"></td>
        </tr>
      </tbody>
    </table>

    <div style="margin-left: 1000px;">
      <span style="font-size: 12px;color: #999999">店铺合计(含运费): ￥{{totalPrice}}</span>
    </div>
  </div>

  <div style="margin: 40px;height: 40px;">
    <div style="float: right!important;">
      <span>实付款：</span>
      <span style="color: #C40000 !important;font-size: 22px;font-weight: bold;border-bottom: 1px dotted #F2F6FF;">
        ￥{{totalPrice}}
      </span>
    </div>
  </div>

  <div>
    <el-button type="danger" style="margin-left: 1300px" @click="payment()">提交订单</el-button>
  </div>


</div>
</template>

<script>

import {selectEachProduct} from "@/service/search/search.service";
import {mapGetters} from "vuex";
import _ from "lodash";

export default {
  name: "PurchasePage",

  data() {
    return {
      product:'',
      address:'',
      postalCode:'',
      name:'',
      phone:''
    };
  },
  props: {
    selectedProducts: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapGetters({
      userInfo: 'GET_USER_INFO',
    }),
    userName () {
      return _.get(this.userInfo, 'userName');
    },
    tableData () {
      return _.isEmpty(this.singleProduct) ? this.selectedProducts : [this.singleProduct];
    },
    singleProduct () {
      if (_.isEmpty(this.product)) return;
      const obj = {count: this.$route.query.num,totalCount:this.product.price*this.$route.query.num};
      return Object.assign({}, this.product, obj);
    },
    totalPrice (){
      return _.reduce(this.tableData, (sum, item) => {
        return sum + item.totalCount;
      }, 0);
    }

  },
  async created() {
    console.log(this.$route.query.productID);
    console.log(this.$route.query.num);
    console.log(this.$route.query.shopcar);
    if(this.$route.query.productID!=null){
      this.product = await selectEachProduct(this.$route.query.productID).catch(e => {
        console.log(e);
      });
    }

  },
  methods:{
    payment(){
      const productList = _.map(this.tableData, item => {
        return {price: item.price, count: item.count, productID: item.productID};
      })
      this.$router.push({name:"Payment",params:{totalPrice: this.totalPrice,address:this.address,
          postalCode:this.postalCode,name:this.name,phone:this.phone, productList: productList, userName:this.userName,
        }})
    }
  }
}


</script>

<style scoped>

</style>