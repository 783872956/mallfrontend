<template>
    <div>
            <img src="image/logo.png" alt="" style="margin-left: 100px;margin-top: 30px; cursor: pointer;" @click="refresh">

      <el-autocomplete
          v-model="searchKeyword" :fetch-suggestions="querySearchAsync"
          placeholder="时尚男鞋 时尚女装" @select="handleSelect"
          style="margin-left: 300px;width: 300px"
      ></el-autocomplete>
        <button type="submit" class="buttonPosition">搜索</button>

        <div class="searchList">
            <a href="">平衡车</a>
            <span>|</span>
            <a href="">扫地机器人</a>
            <span>|</span>
            <a href="">原汁机</a>
            <span>|</span>
            <a href="">冰箱</a>
        </div>
    </div>
</template>

<script>
import _ from "lodash";
import {productAutoComplete} from "@/service/search/search.service";
    export default {
        name: 'search-criteria',
      data() {
        return {
          searchKeyword: '',

        }
      },
      methods:{
        async querySearchAsync (searchKeyword, cb) {
          console.log(searchKeyword, this.searchKeyword);
          if (!searchKeyword) return cb([]);
          // call backen api and get data
          const result = await productAutoComplete(searchKeyword);
          if (result.status === 200) {
            console.log(result.data);
            return cb(_.map(result.data, item => {
              return {value: item.label};
            }));
          }
          else {
            return cb([]);
          }

          // cb(data)

        },
        handleSelect () {},
        refresh(){
          this.$router.push({path:"/"});
        }
      }
    };

</script>

<style scoped>

</style>