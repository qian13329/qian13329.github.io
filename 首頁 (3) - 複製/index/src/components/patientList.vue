<template>
  <!-- <tr @click="DataToPid(item)" :key="item.pid">
    <td>
      <router-link to="/PatientList/113245">
        <img src="../assets/img/list.png" class="icon--list" />
      </router-link>
    </td>
    <td>{{ item.pNum }}</td>
    <td>{{ item.pName }}</td>
    <td>{{ item.pSex }}</td>
    <td>{{ item.room }}</td>
  </tr> -->

  <router-link to="/PatientList/113245">
    <div class="patientList">
      <div @click="DataToPid(item)" :key="item.pid">
        <a>{{ item.pNum }}</a>
      </div>
      <div>
        <a>{{ item.pName }}</a>
      </div>
      <div>
        <a>{{ item.pSex }}</a>
      </div>
      <div>
        <a>{{ item.room }}</a>
      </div>
    </div>
  </router-link>
</template>

<script>
// this.$router.params.pid=> 1,
export default {
  props: {
    item: Object,
  },
  methods: {
    DataToPid(item) {
      this.item = item;
    },
  },
};
</script>

<style scoped>
a {
  width: 100%;
}

@media screen and (min-width: 1025px) {
  .patientList {
    width: 100%;
    height: 50px;
    font-size: 20px;
    color: black;
    border-bottom: 1px solid #ddd;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .patientList div {
    width: 25%;
    text-align: center;
  }
}

/* pad */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .patientList {
    width: 100%;
    height: 45px;
    font-size: 18px;
    color: black;
    border-bottom: 1px solid #ddd;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .patientList div {
    width: 25%;
    text-align: center;
  }
}

/* phone row */
@media screen and (min-width: 551px) and (max-width: 768px) {
  .patientList {
    width: 100%;
    height: 45px;
    font-size: 16px;
    color: black;
    border-bottom: 1px solid #ddd;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .patientList div {
    width: 25%;
    text-align: center;
  }
}

/* phone cloumn*/
@media screen and (max-width: 550px) {
  .patientList {
    width: 100%;
    height: 40px;
    font-size: 15px;
    color: black;
    border-bottom: 1px solid #ddd;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .patientList div {
    width: 25%;
    text-align: center;
  }
}
</style>