<template>
<div>

  <div>
    <img src="image/logo.png" style="margin-left: 300px;margin-top: 30px">
  </div>

  <div style="text-align: center;margin-top: 20px">
    <span style="color: #4D4D4D;font-size: 12px">扫一扫付款（元）</span>
    <span style="display: block;color: #FF6600;font-weight: bold;font-size: 20px;margin: 10px;">
      ￥{{ totalPrice }}
    </span>
  </div>

  <div>
    <img src="image/img_7.png" style="margin-left: 670px">
  </div>

  <div>
    <el-button type="primary" style="margin-left: 715px;margin-top: 10px" @click="afterPayment()">确认支付</el-button>
  </div>

</div>
</template>

<script>

import {createOrder} from "@/apis/order"

export default {
  name: "Payment",
  data() {
    return {
      result:''
    };
  },
  props: [
    "totalPrice",
    "address",
    "postalCode",
    "phone",
    "userName",
    "name",
    "productList"
  ],
  mounted() {
    console.log(this.totalPrice,
    this.address,
    this.postalCode,
    this.phone,
    this.userName,
    this.name)
  },
  methods:{
    async afterPayment(){

      const result = await createOrder({

        userName:this.userName,
        productList: this.productList,
        orderAddress: {
            address:this.address,
            postalCode:this.postalCode,
            name:this.name,
            phone:this.phone
        },

      }).catch(e => {
        console.log(e);
      });

      if (result.status==200){
        this.$message.success("购买成功");
        this.$router.push({path:"/AfterPayment",query:{address:this.address,totalPrice:this.totalPrice,productList:this.productList}});
      }


    }
  }
}
</script>

<style scoped>

</style>