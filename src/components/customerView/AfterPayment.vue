<template>
<div>
  
  <div>
    <img src="image/logo.png" style="margin-left: 300px;margin-top: 50px">
  </div>

  <div style="border: 1px solid #D4D4D4;max-width: 1013px;margin: 10px auto 20px auto;">
    <div style="height: 50px;background-color: #ECFFDC;padding: 17px 0px 0px 25px;">
      <img src="image/paySuccess.png" style="vertical-align: middle;">
      <span style="font-weight: bold;font-size: 14px;margin-left: 10px;">您已成功付款</span>
    </div>

    <div style=" padding: 26px 35px;">
      <ul style="font-size: 12px">
        <li style="color: red">收货地址：{{this.$route.query.address}}</li>
        <br>
        <li style="color: red">实付款：￥{{this.$route.query.totalPrice}}</li>
        <br>
        <li>预计****送达</li>
      </ul>
      <br>
      <div style="font-size: 12px">您可以
        <span>查看已买到的宝贝</span>&nbsp;
        <span>查看交易详情</span>
      </div>
    </div>

    <div style="border-top: 1px dotted #D4D4D4;margin: 0px 31px;"></div>

    <div style="color: black;font-size: 12px;margin-left: 20px">
<!--      <img src="image/warn.png" style="vertical-align: middle">-->
      <b>安全提醒：</b>
      下单后，
      <span style="color: #C40000;font-weight: bold;">用QQ给您发送链接办理退款的都是骗子！</span>
      天猫不存在系统升级，订单异常等问题，谨防假冒客服电话诈骗！

    </div>
    
  </div>

  <div style="margin-left: 300px;margin-top: 50px">
    <img src="image/img.png">
  </div>

  
</div>
</template>

<script>
import {deleteProductAfterPayment} from "@/service/authentication/authentication.service";
export default {
  name: "AfterPayment",
  methods:{
  },
  async created() {
    console.log(this.$route.query.productList);
     await deleteProductAfterPayment(this.$route.query.productList);
  }
}
</script>

<style scoped>

</style>