<template>
    <div style="margin-left: 200px;margin-top: 50px">
        <div v-for='(commodityCategory, listIndex) in commodities' :key='listIndex' style="margin-top: 50px">
            <el-row>
                <div style="font-weight: bolder"><span><i class="el-icon-arrow-down"></i>&nbsp;&nbsp;&nbsp;{{commodityCategory.category}}</span></div>
                <el-col :span='4' v-for='(commodity, itemIndex) in commodityCategory.data'
                        :key='`${listIndex}-${itemIndex}`' >
                    <div>
                            <img :src='commodity.image' width='190px' height='200px' @click="DetailPages(commodity.productID)">
                    </div>
                    <div>
                            <span @click="DetailPages(commodity.productID)">{{commodity.label}}</span>
                    </div>
                    <span><i></i>&nbsp;{{commodity.price}}</span>

                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'commodity-panel',
        props: {
            commodities: {
                type: Array,
                default: () => [],
            }
        },
      methods:{
          DetailPages(productID){
            this.$router.push({path:"/DetailPage",query:{productID}});
          }
      }
    };
</script>

<style scoped>

</style>