<template>
  <div id="register">
    <headerCom></headerCom>
    <div id="section-login">
      <p><input class="form-control" id="inputEmail3" placeholder="请输入账号" v-model="account"></p>
      <p><input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码" v-model="password"></p>
      <p><button type="submit" class="btn btn-default" @click="register">注册</button></p>
    </div>
    <footerCom ></footerCom>
  </div>
</template>
<script>
  import headerCom from '@/components/Header'
  import footerCom from '@/components/Footer'
  export default {
    name: 'register',
    components: {
      headerCom,
      footerCom
    },
    data() {
      return {
        account : '',
        password : ''
      }
    },
    methods:{
      register() {
          let params = {
            account : this.account,
            password : this.password
          };
          if(params.account==""||params.password==""){
              alert("请填写完整！");
          }else{
          //创建一个账号密码
          // TODO:注册可用creatAccount接口
            return this.$http.post('/api/login/createAccount',params)
              .then((response) => {
                //console.log(response)
                alert(response.statusText);
                window.location.href="/";
              })
          }

      }
    }

  }

</script>
<style>
#section-login{margin-top:150px;}
</style>
