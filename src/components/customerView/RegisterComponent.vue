<template>

  <div style="width: 100%;height: 500px;background: #f2f2f2;">

        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <div style="width: 500px;position: absolute;left: 500px;top: 150px">
              <el-form-item label="用户名" prop="useName">
                <el-input v-model.number="ruleForm.useName"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
              </el-form-item>

          </div>

          <div style="position: absolute;left: 500px;top: 340px">
            <el-form-item>
<!--              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>-->
              <el-button type="primary" @click="submitForm()">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </div>

        </el-form>
    </div>

</template>
<script>
import _ from 'lodash';
import {getUser} from "@/service/authentication/authentication.service";
import {mapActions} from 'vuex';

export default {
  name:"RegisterComponent",

  data() {
    let that = this;
    var checkUseName = function (rule, value, callback)  {
      console.log(that);
      if (!value) {
        return callback(new Error('用户名不能为空'));
      }
      setTimeout(() => {

          if (value.length > 18) {
            callback(new Error('用户名长度需要小于18'));
          } else {
            callback();
          }

      }, 1000);
    };
    var validatePass = function (rule, value, callback)  {
      console.log(that);
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (that.ruleForm.checkPass !== '') {
          that.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }

    };
    var validatePass2 = function (rule, value, callback)  {
      console.log(that);
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== that.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      result:"",
      ruleForm: {
        pass: '',
        checkPass: '',
        useName: ''
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        useName: [
          { validator: checkUseName, trigger: 'blur' }
        ]
      }

    };
  },
  methods: {
    ...mapActions({
      setUserInfo: 'SET_USER_INFO',
    }),
    async submitForm() {
      this.result = await getUser(this.ruleForm.useName,this.ruleForm.pass).catch(e => {
        console.log(e);
      });
      // {status: '500', data: {userName: ''}, message: ''}
      if (_.get(this.result, 'status') === 200) {
        this.$message.success('注册成功');
        this.setUserInfo(this.result.data);
        this.$router.push({
          path: '/',
        });
      }
      else {
        this.$message.error('该用户名已经被注册');
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
}
</script>