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
          <label for="pName">姓名</label>
          <input type="text" id="pName" v-model="pName" />
        </div>
        <div>
          <label for="pSex">性別</label>
          <select name="pSex" id="pSex" v-model="pSex">
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </div>
        <div>
          <label for="pAge">年齡</label>
          <input type="number" id="pAge" v-model="pAge" />
        </div>
        <div>
          <label for="pMarriage">婚姻</label>
          <select name="pMarriage" id="pMarriage" v-model="pMarriage">
            <option value="未婚">未婚</option>
            <option value="已婚">已婚</option>
            <option value="離婚">離婚</option>
          </select>
        </div>
        <div>
          <label for="pChild">子女數</label>
          <input type="number" id="pChild" v-model="pChild" />
        </div>
        <div>
          <label for="pDisease">病史</label>
          <input type="text" id="pDisease" v-model="pDisease" />
        </div>
        <div>
          <label for="pProfession">職業</label>
          <input type="text" id="pProfession" v-model="pProfession" />
        </div>
        <div>
          <label for="pReligion">宗教信仰</label>
          <input type="text" id="pReligion" v-model="pReligion" />
        </div>
        <div>
          <label for="pEdu">教育程度</label>
          <input type="text" id="pEdu" v-model="pEdu" />
        </div>
        <div>
          <label for="pDrugs">使用藥物</label>
          <input type="text" id="pDrugs" v-model="pDrugs" />
        </div>
        <div>
          <label for="pAllergy">藥物過敏</label>
          <input type="text" id="pAllergy" v-model="pAllergy" />
        </div>
        <div>
          <label for="pFamilySize">家庭人數</label>
          <input type="number" id="pFamilySize" v-model="pFamilySize" />
        </div>
        <div>
          <label for="pSport">運動習慣</label>
          <input type="text" id="pSport" v-model="pSport" />
        </div>
        <div class="btn">
          <button @click="addPInformBasic">確認</button>
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
    // 為什麼要寫return返回
    // 因為不使用return包裹的數據會在項目的全局可見，會造成變量污染
    // 使用return包裹後數據中變量只在當前組件中生效，不會影響其他組件。
    return {
      pId: "",
      pName: "",
      pSex: "",
      pAge: "",
      pMarriage: "",
      pChild: "",
      pDisease: "",
      pProfession: "",
      pReligion: "",
      pEdu: "",
      pDrugs: "",
      pAllergy: "",
      pFamilySize: "",
      pSport: "",
    };
  },

  methods: {
    // 回上一頁
    back() {
      this.$router.go(-1);
    },

    // 新增患者基本資料
    addPInformBasic() {
      insertPInformBasic({
        pId: this.pId,
        pName: this.pName,
        pSex: this.pSex,
        pAge: this.pAge,
        pMarriage: this.pMarriage,
        pChild: this.pChild,
        pDisease: this.pDisease,
        pProfession: this.pProfession,
        pReligion: this.pReligion,
        pEdu: this.pEdu,
        pDrugs: this.pDrugs,
        pAllergy: this.pAllergy,
        pFamilySize: this.pFamilySize,
        pSport: this.pSport,
      }).then(() => {
        alert("新增成功");
        this.pId = "";
        this.pName = "";
        this.pSex = "";
        this.pAge = "";
        this.pMarriage = "";
        this.pChild = "";
        this.pDisease = "";
        this.pProfession = "";
        this.pReligion = "";
        this.pEdu = "";
        this.pDrugs = "";
        this.pAllergy = "";
        this.pFamilySize = "";
        this.pSport = "";
      });
    },
  },
};
</script>

<style scoped>
form {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
}

form div {
  width: 320px;
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
  .container {
    max-width: 1000px;
    padding-bottom: 100px;
  }
}

/* 551~767 */
@media screen and (min-width: 551px) and (max-width: 768px) {
  .container {
    padding-bottom: 90px;
  }
}

/* <551 */
@media screen and (max-width: 550px) {
  .container {
    min-width: 400px;
    padding-bottom: 75px;
  }
} ;
</style>