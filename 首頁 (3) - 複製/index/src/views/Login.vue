<template>
  <div>
    <div class="wrapper">
      <div class="header">
        <div class="banner">
          <a class="logo">無憂無鬱</a>
        </div>
      </div>
      <div class="login">
        <button class="userLogin">一般登入</button>
        <button class="AdminLogin">醫護人員登入</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style scoped>
.login {
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.login button {
  margin-top: 70px;
  background-color: #e9b485;
  color: aliceblue;
  font-size: 50px;
  border: 0;
  font-weight: bold;
}

@media screen and (max-width: 550px) {
  .login {
    height: 400px;
  }

  .login button {
    width: 250px;
    height: 150px;
    font-size: 40px;
  }
}

@media screen and (min-width: 550px) and (max-width: 768px) {
  .login {
    height: 450px;
  }

  .login button {
    width: 300px;
    height: 200px;
    font-size: 45px;
  }
}

@media screen and (min-width: 768px) {
  .login {
    height: 500px;
  }

  .login button {
    width: 350px;
    height: 250px;
    font-size: 50px;
  }
}
</style>