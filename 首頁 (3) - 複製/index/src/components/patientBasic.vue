<template>
  <div class="bgColor">
    <div>
      <a class="basic-title">職業</a>
      <a id="pProfession">學生</a>
    </div>
    <div>
      <a class="basic-title">婚姻</a>
      <a id="pMarriage">離婚</a>
    </div>
    <div>
      <a class="basic-title">子女</a>
      <a id="pChild">無</a>
    </div>
    <div>
      <a class="basic-title">家庭人數</a>
      <a id="pFamilySize">4人</a>
    </div>
    <div>
      <a class="basic-title">宗教信仰</a>
      <a id="pReligion">佛教</a>
    </div>
    <div>
      <a class="basic-title">教育程度</a>
      <a id="pEdu">國小</a>
    </div>
    <div>
      <a class="basic-title">病史</a>
      <a id="pDisease">心臟病</a>
    </div>
    <div>
      <a class="basic-title">使用藥物</a>
      <a id="pDrugs">嗎啡</a>
    </div>
    <div>
      <a class="basic-title">運動習慣</a>
      <a id="pSport">慢跑1km/天</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
    max-width: 400px;
    min-width: 250px;
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
    max-width: 350px;
    min-width: 220px;
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
    max-width: 825px;
    background-color: #fff1e392;
    font-size: 20px;
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
    font-size: 22px;
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