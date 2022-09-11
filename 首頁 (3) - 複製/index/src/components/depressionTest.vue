<template>
  <tr class="trTable">
    <!-- v-for="i in 32" :key="i" -->
    <td class="question">
      <div>{{ item.question }}</div>
    </td>
    <td class="checkTable score">
      <div><input type="radio" name="check" /></div>
      <!-- [' + i + ']' -->
    </td>
    <td class="checkTable score">
      <div>
        <input type="radio" name="check" />
      </div>
    </td>
    <td class="checkTable score">
      <div>
        <input type="radio" name="check" />
      </div>
    </td>
    <td class="checkTable score">
      <div>
        <input type="radio" name="check" />
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  data() {
    return {
      check: [1, 2, 3],
    };
  },
  props: {
    item: Object,
  },
  methods: {},
};
</script>

<style scoped>
.trTable {
  height: 70px;
}

.checkTable {
  width: 120px;
}

td {
  border-bottom: 1px dotted gray;
}

.score {
  width: 100px;
  text-align: center;
}

/* 電腦 */
@media screen and (min-width: 1025px) {
  .score {
    font-size: 20px;
    width: 100px;
  }

  input {
    width: 18px;
    height: 18px;
  }

  .questionTable {
    width: 450px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .score {
    font-size: 15px;
    width: 80px;
  }
}

@media screen and (min-width: 551px) and (max-width: 767px) {
  .score {
    font-size: 10px;
    width: 60px;
  }
}

/* 手機 */
@media screen and (max-width: 550px) {
  .score {
    font-size: 6px;
    width: 40px;
  }
}
</style>