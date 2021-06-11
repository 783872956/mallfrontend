<template>

  <div>
      <div>
        <img src="image/logo.png" style="margin-left: 200px;margin-top: 50px">
      </div>

      <div>
        <img src="image/img_2.png" style="margin-left: 200px;margin-top: 20px">
      </div>

      <div style="margin-top: 50px">

        <div style="width: 400px;height:400px;border: 1px solid #F2F2F2;margin-left: 298px">
          <img v-if="result" :src="result.image" style="width: 400px;height: 400px">
        </div>

        <div style="width: 530px;height:400px;position: absolute;top: 302px;left: 700px">
          <span  v-if="result" style="color: black;font-size: 16px;font-weight: bold;">
            {{result.label}}
          </span>
          <div style="background-color: #2DA77A;color: white;text-align: center;line-height: 40px;margin-top: 10px;">
            <span style="font-size: 18px;font-weight: bold;font-family: Arial;">
              聚划算
            </span>
            <span style="font-size: 10px">
              此商品即将参加聚划算，<span style="color: #FFC057;">1天19小时</span>后开始
            </span>
          </div>
          <div style="background-image: url(image/img_3.png);height: 102px;padding: 10px;color: #666666;">
            <div style="margin-top: 5px;">
              <img src="image/img_4.png" height="16px">
              <span style="font-size: 10px;">全天猫实物商品通用</span>
            </div>

            <div style="margin-top: 5px;">
              <span style="color: #999999;display: inline-block;width: 68px;font-size: 10px">价格</span>
              <span style="font-family: Arial;font-size: 12px;">￥</span>
              <span style="font-family: Arial;font-size: 12px;color: #333333;text-decoration: line-through;">1399</span>
            </div>

            <div style="margin-top: 0px;">
              <span style="color: #999999;display: inline-block;width: 68px;font-size: 10px">促销价</span>
              <span style="font-family: Arial;font-size: 18px;color: #C40000;">￥</span>
              <span  v-if="result" style="color: #c40000;font-family: Arial;font-size: 30px;">{{result.price}}</span>
            </div>
          </div>

          <div style="margin: 20px 0px;border-top-style: dotted;border-top-color: #C9C9C9;
          border-top-width: 1px;border-bottom-style: dotted;border-bottom-color: #C9C9C9;
          border-bottom-width: 1px;padding: 10px;">
            <div style="font-size: 10px;margin-left: 100px;display: inline">
              销量
              <span style="font-weight: bold;color: #C40000;">6049</span>
            </div>
            <div style="font-size: 10px;margin-left: 180px;display: inline;">
              累计评论
              <span style="font-weight: bold;color: #C40000;">189</span>
            </div>
          </div>

          <div style="color: #999999;font-size: 15px;">
            <span style="margin-left: 10px">数量</span>
            <el-input-number v-model="num" @change="handleChange" :min="1" :max="75" label="描述文字" style="margin-left: 10px">

            </el-input-number>
            <span style="margin-left: 10px">库存75件</span>
          </div>

          <div style="margin: 3px 0px;">
              <span style="color: #999999;font-size: 10px">承诺服务</span>
              <span style="color: #999999;font-size: 10px;margin-left: 5px;">正品保证</span>
              <span style="color: #999999;font-size: 10px;margin-left: 5px;">急速退款</span>
              <span style="color: #999999;font-size: 10px;margin-left: 5px;">赠运险费</span>
              <span style="color: #999999;font-size: 10px;margin-left: 5px;">七天无理由退换</span>
          </div>

          <div style="margin-left: 100px;margin-top: 10px">
            <el-button type="danger" plain style="width: 150px" @click="purchase()">立即购买</el-button>
            <el-button plain style="width: 150px" @click="addTo()">加入购物车</el-button>
          </div>
        </div>

      </div>

    <div style="width: 790px;margin: 40px auto;">
      <div style="border: 1px solid #DFDFDF;">
         <span>商品详情</span>
      </div>
      
      <div style="border: 1px solid #DFDFDF;padding: 40px;">
        <div style="color: #999999;font-weight: bold;margin-bottom: 20px;font-size: 13px">产品参数：</div>
        <div>
          <span style="font-size: 12px;">操作系统:  VIDAA </span>
          <span style="font-size: 12px;margin-left: 50px;">3D类型:  无 </span>
          <span style="font-size: 12px;margin-left: 50px;">能效等级:  一级 </span>
          <span style="font-size: 12px;margin-left: 50px;">产品名称:  Hisense/海信 </span>
          <span style="font-size: 12px;margin-left: 50px;">网络连接方式:  全部支持 </span>
          <span style="font-size: 12px;">制造商名称:  青岛海信电器股份有限公司 </span>
          <span style="font-size: 12px;margin-left: 50px;">型号:  LED60EC660 </span>
          <span style="font-size: 12px;margin-left: 50px;">分辨率:  3840x2160 </span>
          <span style="font-size: 12px;margin-left: 50px;">证书编号:  2016010808 </span>
          <span style="font-size: 12px;">申请人名称:  青岛海信电器股份有限 </span>
          <span style="font-size: 12px;margin-left: 50px;">3C产品型号:  LED60K5500 </span>
          <span style="font-size: 12px;margin-left: 50px;">证书状态:  有效 </span>
          <span style="font-size: 12px;margin-left: 50px;">品牌:  Hisense/海信 </span>
        </div>

      </div>

      <div>
        <img src="https://how2j.cn/tmall/img/productDetail/682.jpg" alt="">
        <img src="https://how2j.cn/tmall/img/productDetail/681.jpg" alt="">
        <img src="https://how2j.cn/tmall/img/productDetail/680.jpg" alt="">
        <img src="https://how2j.cn/tmall/img/productDetail/679.jpg" alt="">
        <img src="https://how2j.cn/tmall/img/productDetail/678.jpg" alt="">
        <img src="https://how2j.cn/tmall/img/productDetail/677.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import {selectEachProduct} from '../../service/search/search.service';
import {insertShoppingCart} from "@/apis/order"
import {mapGetters} from "vuex";
import _ from "lodash";
export default {
  name: "DetailsPageComponent",
  data() {
    return {
      num: 1,
      result:'',
      shoppingCart:''
    };
  },
  computed: {
    ...mapGetters({
      userInfo: 'GET_USER_INFO',
    }),
    userName () {
      return _.get(this.userInfo, 'userName');
    },
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    purchase(){
      let productID = this.$route.query.productID;
      this.$router.push({path:"/PurchasePage",query: {productID,num:this.num}});
    },

    async addTo(){
      let productID = this.$route.query.productID;
      let num = this.num;
      const shoppingCart = await insertShoppingCart({productID:productID,count:num,userName:this.userName}).catch(e => {
        console.log(e);
      });
      if(shoppingCart.status==200){
        this.$message.success("加入购物车成功");
      }


    }
  },
   async created() {

   console.log(this.$route.query.productID);
   this.result = await selectEachProduct(this.$route.query.productID).catch(e => {
     console.log(e);
   });
  }

};

</script>

<style scoped>

</style>