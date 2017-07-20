<template>
  <div class="page-select">
    <h2>下拉框：</h2>
    <div style="margin-bottom:10px">
    </style>多选：</div>

    <!--  -->
    <emfe-select :datas="data1" type="checkbox"></emfe-select>
    <!-- / -->

    <div style="margin:90px 0 10px">
      单选：
    </div>

    <!--  -->
    <emfe-select :datas="data2" type="radio"></emfe-select>
    <!-- / -->

    <div style="margin:90px 0 10px">
      带新建的多选
    </div>

    <!--  -->
    <emfe-select :datas="data1" seleStu="newList" type="checkbox" v-on:addDataCheck="addDataCheck"></emfe-select>
    <!-- / -->

    <div style="margin:90px 0 10px">
      带新建的单选
    </div>

    <!--  -->
    <emfe-select :datas="data2" seleStu="newList" type="radio" v-on:addDataRadio="addDataRadio"></emfe-select>
    <!-- / -->

    <div style="margin:90px 0 10px">
      普通下拉框
    </div>

    <!--  -->
    <emfe-select :datas="data3" type="default"></emfe-select>
    <!-- / -->

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
      data3: [
        {
          name: 'default',
        },
        {
          name: '一夜暴富',
        },
      ],
    };
  },
  methods: {
    addDataCheck(nData) {
      this.data1.push({ name:nData });
    },
    addDataRadio(nData) {
      this.data2.push({ name:nData });
    },
  },
};
</script>

