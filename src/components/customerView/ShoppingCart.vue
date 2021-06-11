<template>
<div>
  <div>
    <img src="image/logo.png" style="margin-left: 200px;margin-top: 50px">
  </div>
  <div style="max-width: 1013px;margin: 10px auto;color: black;">

   <div style="margin-top: 100px">

     <el-table
         ref="multipleTable"
         :data="shoppingList"
         tooltip-effect="dark"
         style="width: 100%"
         @selection-change="select">
       <el-table-column
                        type="selection"
                        width="55">
       </el-table-column>
       
       <el-table-column v-for="(column,index) in tableColumn" :key="index"
            :label="column.name"
           >
         <template slot-scope="scope">
           <img v-if="column.name === '商品信息'" :src="scope.row.image">
           <span style="margin-left: 10px">{{scope.row[column.prop]}}</span>
         </template>
       </el-table-column>

       <el-table-column
           label="操作"
           width="55">
         <template slot-scope="scope">
           <el-link type="info" @click="del(scope.$index)">删除</el-link>
         </template>
       </el-table-column>
     </el-table>
   </div>

    <div style="background-color: #E5E5E5;line-height: 50px;margin: 20px 0px;color: black; padding-left: 20px;">
      <div style="float: right">
        <span style="font-size: 12px">
          已选商品
          <span style="color: #C40000;font-weight: bold;font-size: 16px;">{{selectedProducts.length}}</span>
          件
        </span>
        <span style="font-size: 12px">合计(不含运费):</span>
        <span style="color: #C40000;font-weight: bold;font-size: 20px;">￥{{selectTotalCount}}</span>
        <el-button type="danger" style="width: 100px;line-height: 10px" @click="toPayment">结算</el-button>
      </div>
    </div>

    <div>
      <img src="image/img.png" style="margin-top: 20px">
    </div>
  </div>

</div>
</template>

<script>
import {selectVeryProduct} from "@/service/search/search.service";
import {mapGetters} from "vuex";
import _ from "lodash";
import {deleteProduct} from "@/service/authentication/authentication.service";

export default {
  name: "ShoppingCart",
  data () {
    return {
      list: [],
      tableColumn: [{
        name: '商品信息',
        prop: 'label',
        width: '',
      }, {
        name: '单价',
        prop: 'price',
        width: '',
      }, {
        name: '数量',
        prop: 'count',
        width: '',
      }, {
        name: '金额',
        prop: 'totalCount',
        width: '',
      }],
      selectedProducts: [],
    };
  },
  computed: {
    ...mapGetters({
      userInfo: 'GET_USER_INFO',
    }),
    userName () {
      return _.get(this.userInfo, 'userName');
    },
    shoppingList () {
      return _.map(this.list, item => {
        return Object.assign({}, item, {totalCount: item.price * item.count});
      })
    },
    selectTotalCount () {
      return _.reduce(this.selectedProducts, (sum, item) => {
        return sum + item.totalCount;
      }, 0);
    },
  },
  async created () {
    this.list = await selectVeryProduct(this.userName).catch(e => {
      console.log(e);
    });
  },
  methods:{
    async del(index){
      const deleteResult = await deleteProduct(this.list[index].productID,this.userName);
      if(deleteResult.status==200){
        this.$message.success("删除成功");
      }
      this.list.splice(index,1);

    },
    select(products){
      this.selectedProducts = products;
    },
    toPayment(){
      this.$router.push({name:"PurchasePage",params: {selectedProducts: this.selectedProducts}});
    }
  },

}
</script>

<style scoped>

</style>