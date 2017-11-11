<template>
  <div class="changecount">
    <emfe-changecount :count="count"></emfe-changecount>
    <button @click="add" type="button" name="button">点击</button>
    <button @click="add1" type="button" name="button">点击</button>
  </div>
</template>
<script>
export default {
  name: 'changecountPage',
  data() {
    return {
      count: 292,
    };
  },
  methods: {
    add() {
      this.count += 6;
    },
    add1() {
      --this.count;
    },
  },
};
</script>
