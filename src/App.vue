<template>
  <div id="app">
    <p><input class="form-control" id="inputEmail3" placeholder="请输入账号" v-model="account"></p>
    <p><input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码" v-model="password"></p>
    <p><button type="submit" class="btn btn-default" @click="login">登录</button></p>
  </div>
</template>

<script>
export default {
  name: 'app',
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
#app {padding-top:150px;font-family: 'Avenir', Helvetica, Arial, sans-serif;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;color: #2c3e50;}
#app p{line-height: 50px;text-align: center;}
#app p input{border: 1px solid #ddd;height:25px;padding: 5px;}
.btn{width:100px;height:30px;border: none;background-color: dodgerblue;color:#ffffff;border-radius: 2px;}
</style>
