<template>

<div style="width: 100%;height: 500px;background: #f2f2f2">
  <div class="input" id="loginCon">
    <br><br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <div style="margin-top: 100px">
      <label style="font-weight: bolder">用户登录</label>

      <br>

         <div style="width: 300px">
           <i class="el-icon-user" style="position: absolute;top: 200px;left: 575px;"></i>
           <el-input v-model="input" placeholder="请输入用户名"></el-input>
         </div>

          <div style="width: 300px">
            <i class="el-icon-lock" style="position: absolute;top: 245px;left: 575px;"></i>
            <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
          </div>

      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="" style="color: #999999">忘记密码</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <a href="register.html" style="color: #999999">免费注册</a><br><br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <el-button  style="width: 200px;margin-left:45px;" type="primary" round @click="login">登录</el-button>
    </div>

  </div>
</div>

</template>

<script>

import {login} from "@/service/authentication/authentication.service";
import _ from 'lodash';
import {mapActions} from 'vuex';


export default {
  name: 'LoginComponent',
  data() {
    return {
      input: '',
      password:'',
      result:''
    }
  },
  methods: {
    ...mapActions({
      setUserInfo: 'SET_USER_INFO',
    }),
    async login(){
      this.result = await login(this.input,this.password).catch(e => {
        console.log(e);
      });
      if (_.get(this.result,"status") === 200) {
            this.$message.success("登录成功");
            this.setUserInfo(this.result.data);
            this.$router.push({path: "/"});
      } else {
            this.$message.error("用户名或者密码错误");
      }
    }
  }


}
</script>

<style lang='css'>
@import '../../assets/style/index.css';
@import '../../assets/style/login.css';
@import '../../assets/style/register.css';
</style>
