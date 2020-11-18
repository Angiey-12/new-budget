<template>
    <el-main class="login-page">
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="8" class="login-window">
                <p class="user-login-title">用户登录</p>
                <div class="login-form-container">
                    <el-form label-position="left" label-width="80px" :model="loginForm" :rules="rules" ref="loginForm">
                        <el-form-item label="用户名" prop="username">
                            <el-input v-model="loginForm.username"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="passwd">
                            <el-input v-model="loginForm.passwd"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
                <el-button type="primary" @click="submitForm('loginForm')">确认</el-button>
            </el-col>
        </el-row>    
    </el-main>
</template>
<script>
export default {
    name:'Login',
    data() {
        return {
            loginForm: {
                username: '',
                passwd:''
            },
            rules: {
                username:[
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                passwd:[
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
}
</script>
<style scope>
.login-page{
    margin-top: 30px;
}
.user-login-title{
    font-size: 24px;
    /*text-align: center;*/
}
.login-window{
   box-shadow: 1px 1px 5px #888;
   padding: 20px 30px;
}
.login-form-container{
    margin-top: 30px;
}
</style>