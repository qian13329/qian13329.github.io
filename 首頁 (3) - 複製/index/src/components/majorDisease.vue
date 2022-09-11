<template>
  <div class="bgColor">
    <div>
      <a class="basic-title">病例</a>
      <a id="pPeriod">{{ item.disease }}</a>
    </div>
    <div>
      <a class="basic-title">期數</a>
      <a id="pPeriod">第{{ item.period }}期</a>
    </div>
    <div>
      <a class="basic-title">腫瘤大小</a>
      <a id="pTumorSize">{{ item.size }}mm</a>
    </div>
    <div>
      <a class="basic-title">淋巴轉移</a>
      <a id="pCA">{{ item.CA }}</a>
    </div>
    <div>
      <a class="basic-title">轉移位置</a>
      <a id="pCASpace">{{ item.CASpace }}</a>
    </div>
    <div>
      <a class="basic-title">治療方案</a>
      <a id="pTreat">{{ item.treat }}</a>
    </div>
    <div>
      <a class="basic-title">藥物</a>
      <a id="pDrugs">{{ item.drugs }}</a>
    </div>
    <div>
      <a class="basic-title">藥物過敏</a>
      <a id="pAllergy">{{ item.drugAllergy }}</a>
    </div>
    <div>
      <router-link to="/" class="depression">➜憂鬱指數</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
};
</script>
    
<style scoped>
.depression {
  color: #12741a;
  font-weight: bold;
}
@media screen and (min-width: 1240px) {
  .bgColor {
    background-color: #fff1e392;
    font-size: 24px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    margin-top: 20px;
    border-radius: 12px;
  }

  .bgColor div {
    width: 250px;
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .basic-title {
    width: 100px;
    color: #ea9f59;
    font-weight: bold;
  }
}
/* computer */
@media screen and (min-width: 1025px) and (max-width: 1240px) {
  .bgColor {
    background-color: #fff1e392;
    font-size: 22px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
  }

  .bgColor div {
    max-width: 300px;
    min-width: 210px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .basic-title {
    width: 100px;
    color: #ea9f59;
    font-weight: bold;
  }
}

/* pad */
@media screen and (min-width: 767px) and (max-width: 1024px) {
  .bgColor {
    background-color: #fff1e392;
    font-size: 22px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
  }

  .bgColor div {
    max-width: 300px;
    min-width: 210px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .basic-title {
    width: 100px;
    color: #ea9f59;
    font-weight: bold;
  }
}

/* phone row */
@media screen and (min-width: 501px) and (max-width: 767px) {
  .bgColor {
    background-color: #fff1e392;
    font-size: 18px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
  }

  .bgColor div {
    max-width: 300px;
    min-width: 200px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .basic-title {
    width: 100px;
    color: #ea9f59;
    font-weight: bold;
  }
}

/* phone cloumn */
@media screen and (max-width: 500px) {
  .bgColor {
    background-color: #fff1e392;
    font-size: 22px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
  }

  .bgColor div {
    max-width: 300px;
    min-width: 250px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  .basic-title {
    width: 100px;
    color: #ea9f59;
    font-weight: bold;
  }
}
</style>