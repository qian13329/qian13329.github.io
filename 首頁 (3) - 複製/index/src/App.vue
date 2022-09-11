<template>
  <div id="app">
    <!-- 切換各個router的頁面畫面 -->
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.wrapper {
  width: 100%;
  font-family: "Microsoft JhengHei";
  margin: 0 auto;
}

/* 上方橫幅 */
.header {
  width: 100%;
}

.banner {
  width: 100%;
  background-color: #ea9f59;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
}

.logo {
  font-weight: bold;
  color: white;
}

/* 內容 */
.container {
  width: 100%;
}

a {
  text-decoration: none;
}

/* >1024 */
@media screen and (min-width: 1025px) {
  .header {
    height: 100px;
  }

  .banner {
    height: 100px;
  }

  .logo {
    font-size: 60px;
  }

  .back {
    width: 50px;
    height: 50px;
    position: fixed;
    top: 25px;
    left: 30px;
  }

  .container {
    padding-bottom: 100px;
  }

  /* 頁尾 */
  .footerBg {
    height: 100px;
  }

  .footerBg img {
    width: 55px;
    height: 55px;
  }

  .footerBg div {
    width: 80px;
  }
}

/* 768~1024 */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .header {
    height: 100px;
  }

  .banner {
    height: 100px;
  }

  .back {
    width: 50px;
    height: 50px;
    position: fixed;
    top: 25px;
    left: 30px;
  }

  .logo {
    font-size: 60px;
  }

  .container {
    padding-bottom: 100px;
  }

  /* 頁尾 */
  .footerBg {
    height: 100px;
  }

  .footerBg img {
    width: 55px;
    height: 55px;
  }

  .footerBg div {
    width: 80px;
  }
}

/* 551~767 */
@media screen and (min-width: 551px) and (max-width: 768px) {
  .header {
    height: 80px;
  }

  .banner {
    height: 80px;
  }

  .logo {
    font-size: 50px;
  }

  .back {
    width: 40px;
    height: 40px;
    position: fixed;
    top: 20px;
    left: 20px;
  }

  .container {
    padding-bottom: 90px;
  }

  /* 頁尾 */
  .footerBg {
    height: 90px;
  }

  .footerBg img {
    width: 45px;
    height: 45px;
  }

  .footerBg div {
    width: 80px;
    font-size: 15px;
  }
}

/* <551 */
@media screen and (max-width: 550px) {
  .header {
    height: 60px;
  }

  .banner {
    height: 60px;
  }

  .logo {
    font-size: 40px;
  }

  .back {
    width: 30px;
    height: 30px;
    position: fixed;
    top: 15px;
    left: 15px;
  }

  .container {
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 75px;
  }

  /* 頁尾 */
  .footerBg {
    height: 75px;
  }

  .footerBg img {
    width: 30px;
    height: 30px;
  }

  .footerBg div {
    width: 80px;
    font-size: 12px;
  }
}

/* 頁尾 */
.footer {
  width: 100%;
  color: black;
}

.footerBg {
  width: 100%;
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
}

.router-link-footer {
  color: black;
}

.router-link-href {
  color: black;
}

.footerBg div {
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footerBg a {
  margin-top: 7px;
}
</style>
