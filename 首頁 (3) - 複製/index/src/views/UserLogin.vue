<template>
  <div>
    <div class="wrapper">
      <div class="header">
        <div class="banner">
          <a class="logo">無憂無鬱</a>
        </div>
      </div>

      <div class="container">
        <h1>一般登入</h1>
        <form action="">
          <div class="userLogin">
            <div>
              <label>帳號</label>
              <input type="text" />
            </div>
            <div>
              <label>密碼</label>
              <input type="password" />
            </div>
          </div>
          <div><button type="submit">確認</button></div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  min-width: 370px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  margin-top: 40px;
  text-align: center;
}

form {
  padding-top: 40px;
  width: 350px;
  line-height: 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userLogin {
  font-size: 20px;
  font-weight: bold;
}

.userLogin div {
  display: flex;
  align-items: center;
}

input {
  font-size: 18px;
  outline: none;
  padding-left: 10px;
  margin-left: 10px;
  border: none;
  background-color: #fae6d4;
  height: 30px;
  width: 200px;
  border-radius: 7px;
}

button {
  width: 80px;
  height: 30px;
  font-size: 16px;
  text-align: center;
  margin-top: 40px;
  border: none;
  border-radius: 7px;
  background-color: #e9b485;
  color: white;
}

button:hover {
  background-color: #e9b485ce;
}

@media screen and (max-width: 550px) {
  h1 {
    font-size: 25px;
  }

  .userLogin {
    font-size: 20px;
  }

  button {
    font-size: 13px;
    width: 70px;
    height: 25px;
  }
}

@media screen and (min-width: 550px) and (max-width: 768px) {
  h1 {
    font-size: 30px;
  }

  .userLogin {
    font-size: 22px;
  }

  button {
    font-size: 13px;
    width: 70px;
    height: 25px;
  }
}

@media screen and (min-width: 768px) {
  h1 {
    font-size: 35px;
  }

  .userLogin {
    font-size: 28px;
  }

  input {
    height: 35px;
    width: 240px;
  }

  button {
    font-size: 18px;
    width: 80px;
    height: 35px;
  }
}
</style>