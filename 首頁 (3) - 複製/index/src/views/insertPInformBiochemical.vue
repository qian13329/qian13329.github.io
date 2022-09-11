<template>
  <div class="wrapper">
    <div class="header">
      <div class="banner">
        <!-- 返回鍵 -->
        <router-link :to="'/insertPInform'"
          ><div>
            <a href="#"
              ><img src="../assets/img/back.png" class="back"
            /></a></div
        ></router-link>
        <a class="logo">無憂無鬱</a>
      </div>
    </div>

    <div class="container">
      <form action="">
        <div>
          <label for="pId">身分證字號</label>
          <input type="text" id="pId" v-model="pId" />
        </div>
        <div>
          <label for="pTAG">三酸甘油脂</label>
          <input type="text" id="pTAG" v-model="pTAG" />
        </div>
        <div>
          <label for="pHDL">高密度脂蛋白</label>
          <input type="text" id="pHDL" v-model="pHDL" />
        </div>
        <div>
          <label for="pVAT">腹部脂肪</label>
          <input type="text" id="pVAT" v-model="pVAT" />
        </div>
        <div>
          <label for="pAC">空腹血糖</label>
          <input type="text" id="pAC" v-model="pAC" />
        </div>
        <div>
          <label for="p5HTTLPR">血清素運送基因- 5羥色胺</label>
          <input type="text" id="p5HTTLPR" v-model="p5HTTLPR" />
        </div>
        <div>
          <label for="pVitaminD">維生素D</label>
          <input type="text" id="pVitaminD" v-model="pVitaminD" />
        </div>
        <div class="btn">
          <button @click="addPInformBiochemical">送出</button>
          <button type="reset">清除</button>
        </div>
      </form>
    </div>
    <!-- footer -->
    <div class="footer">
      <div class="footerBg">
        <router-link :to="'/CheckIndex'" class="router-link-footer">
          <div>
            <img src="../assets/img/check-un.png" alt="今日事務" />
            <a>今日事務</a>
          </div>
        </router-link>

        <router-link :to="'/insert'" class="router-link-footer">
          <div>
            <img src="../assets/img/new-file.png" alt="新增資料" />
            <a>新增資料</a>
          </div>
        </router-link>

        <router-link :to="'/'" class="router-link-footer">
          <div>
            <img src="../assets/img/home-un.png" alt="首頁" />
            <a>首頁</a>
          </div>
        </router-link>

        <router-link :to="'/DepressionIndex'" class="router-link-footer">
          <div>
            <img src="../assets/img/broken-heart-un.png" alt="憂鬱症專區" />
            <a>憂鬱症專區</a>
          </div>
        </router-link>

        <router-link :to="'/setting'" class="router-link-footer">
          <div>
            <img src="../assets/img/settings-un.png" alt="設定" />
            <a>設定</a>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pId: "",
      pTAG: "",
      pHDL: "",
      pVAT: "",
      pAC: "",
      p5HTTLPR: "",
      pVitaminD: "",
    };
  },

  methods: {
    // 回上一頁
    back() {
      this.$router.go(-1);
    },

    // 新增患者生化資料
    addPInformBiochemical() {
      insertPInformBiochemical({
        pId: this.pId,
        pTAG: this.pTAG,
        pHDL: this.pHDL,
        pVAT: this.pVAT,
        pAC: this.pAC,
        p5HTTLPR: this.p5HTTLPR,
        pVitaminD: this.pVitaminD,
      }).then(() => {
        alert("新增成功");
        this.pId = "";
        this.pTag = "";
        this.pHDL = "";
        this.pVAT = "";
        this.pAC = "";
        this.p5HTTLPR = "";
        this.pVitaminD = "";
      });
    },
  },
};
</script>

<style scoped>
form {
  width: 768px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
}

form div {
  width: 500px;
  font-size: 25px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px auto;
}

form input {
  width: 180px;
  height: 35px;
  font-size: 20px;
  border: 0;
  border-radius: 10px;
  outline: none;
  background-color: #fae6d4;
  padding-left: 10px;
}

form select {
  width: 180px;
  height: 35px;
  font-size: 18px;
  border: 0;
  border-radius: 10px;
  outline: none;
  background-color: #fae6d4;
  padding-left: 10px;
}

.btn {
  width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}

.btn button {
  width: 150px;
  height: 40px;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 3px;
  color: white;
  background-color: #e9b485;
  border: 0;
  border-radius: 5px;
  margin-top: 30px;
}

.btn button:hover {
  background-color: #e9b485ce;
}

/* >1024 */
@media screen and (min-width: 1025px) {
  .container {
    max-width: 1000px;
    margin: 0 auto;
    padding-bottom: 100px;
  }
}

/* 768~1024 */
@media screen and (min-width: 768px) and (max-width: 1024px) {
}

/* 551~767 */
@media screen and (min-width: 551px) and (max-width: 768px) {
}

/* <551 */
@media screen and (max-width: 550px) {
} ;
</style>