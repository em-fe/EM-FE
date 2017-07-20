<template>
  <div class="page-select">
    下拉框：<br>
    多选：
    <emfe-select :datas="data1" type="checkbox"></emfe-select>

    <div style="margin-top:120px">
      单选：
    </div>
    <emfe-select :datas="data2" type="radio"></emfe-select>

    <div style="margin-top:120px">
      带新建的多选
    </div>
    <emfe-select :datas="data1" seleStu="newList" type="checkbox" v-on:addData="addDatas"></emfe-select>

    <div style="margin-top:120px">
      带新建的单选
    </div>
    <emfe-select :datas="data2" seleStu="newList" type="radio" v-on:addData="addDatas"></emfe-select>
  </div>
</template>
<script>
export default {
  name: 'pageSelect',
  data() {
    return {
      datas: '',
      data1: [
        {
          name: 'wefajlrjgakdjsdklfgjk;djfkldjfgkljfjdhjklhsdfjgkshdkljaiursfajkds',
        },
        {
          name: '88888',
        },
      ],
      data2: [
        {
          name: '666',
        },
        {
          name: '6666666',
        },
      ],
    };
  },
  methods: {
    addDatas(nData) {
      this.data1.push({ name:nData });
    },
  },
};
</script>

