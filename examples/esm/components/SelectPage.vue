<template>
  <div class="page-select">
    下拉框：<br>
    多选：
    <emfe-select :datas="data1" type="checkbox"></emfe-select>
    <div style="margin-top:120px">
      单选：
    </div>
    <emfe-select :datas="data2" type="radio" @add-save="save"></emfe-select>
  </div>
</template>

<script>
export default {
  name: 'pageSelect',
  data() {
    return {
      data1: [
        {
          id: 8,
          name: '888888',
        },
        {
          id: 88,
          name: '88888',
        },
      ],
      data2: [
        {
          id: 6,
          name: '666',
        },
        {
          id: 66,
          name: '6666666',
        },
      ],
    };
  },
  methods: {
    save() {
      console.log('save');
    },
  },
};

</script>

