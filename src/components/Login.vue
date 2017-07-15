<template>
  <div class="login">
    <headerCom></headerCom>
    <div id="section-login">
      <p><input class="form-control" id="inputEmail3" placeholder="请输入账号" v-model="account"></p>
      <p><input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码" v-model="password"></p>
      <p><button type="submit" class="btn btn-default" @click="login">登录</button></p>
    </div>
    <div class="register">
      还没帐号？
      <router-link class=""  to="/register">去注册</router-link>
    </div>
  </div>
</template>
<script>
  import headerCom from '@/components/Header'
  export default {
    name: 'login',
    components: {
      headerCom
    },
    data() {
      return {
        account : '',
        password : ''
      }
    },
    methods:{
      login() {
        // 获取已有账号密码
        let params = {
          account : this.account,
          password : this.password
        };
        this.$http.get('/api/login/getAccount')
          .then((response) => {
            //响应成功回调
//          var account=response.body[0].account;
//          var password=response.body[0].password;
            var flag=false;
            for(var i=0;i<response.body.length;i++){
              var account=response.body[i].account;
              var password=response.body[i].password;
              if(params.account==account&&params.password==password){
                flag=true;
                alert("登录成功!");
                break;
              }
            }
            if (!flag){
              alert("输入的账号或密码不正确！");
            }
            //console.log(response.data);


          })
// TODO:注册可用creatAccount接口
//          let params = {
//            account : this.account,
//            password : this.password
//          };
        // 创建一个账号密码
        //return this.$http.post('/api/login/createAccount',params);
//        .then((response) => {
//          console.log(response)
//        })
//        .catch((reject) => {
//          console.log(reject)
//        });
      }
    }
  }
</script>
<style>
#section-login{margin-top:150px;}
.register{margin-top: 50px;float: right;padding:20px;}
</style>
