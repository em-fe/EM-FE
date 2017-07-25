<template>
  <div class="page-select">
    <h2>下拉框：</h2>
    <div style="margin-bottom:10px">
    </style>多选：</div>

    <!--  -->
    <emfe-select :datas="data1" @checkselect="checkselect" type="checkbox"></emfe-select>
    API：包含两个配置项：<br>
              自定义属性 :<br>
              :datas="data1"<br>
              type="checkbox"
    <!-- / -->

    <div style="margin:90px 0 10px">
      单选：
    </div>
    <!--  -->
    <emfe-select :datas="data2" type="radio" v-on:getData="getdatas"></emfe-select>
    API：包含两个配置项：<br>
              自定义属性 :<br>
              :datas="data2"<br>
              type="radio"
    <!-- / -->

    <div style="margin:90px 0 10px">
      带新建的多选
    </div>

    <!--  -->
    <emfe-select :datas="data1" seleStu="newList" type="checkbox" v-on:addDataCheck="addDataCheck"></emfe-select>
    API：包含3个配置项和一个方法：<br>
              自定义属性 :<br>
              :datas="data1"<br>
              seleStu="newList"<br>
              type="checkbox"<br>
              一个方法是：addDataCheck （添加自定义数据使用）
    <!-- / -->

    <div style="margin:90px 0 10px">
      带新建的单选
    </div>

    <!--  -->
    <emfe-select :datas="data2" seleStu="newList" type="radio" v-on:addDataRadio="addDataRadio"></emfe-select>
    API：包含3个配置项和一个方法：<br>
              自定义属性 :<br>
              :datas="data2"<br>
              seleStu="newList"<br>
              type="radio"<br>
              一个方法是：addDataRadio （添加自定义数据使用）
    <!-- / -->

    <div style="margin:90px 0 10px">
      普通下拉框
    </div>

    <!--  -->
    <emfe-select :datas="data3" type="default" v-on:getdef="getDef"></emfe-select>
    API：包含2个配置项：<br>
              自定义属性 :<br>
              :datas="data3"<br>
              type="default"<br>
    <!-- / -->

    <h2>不可点击的数据添加上一条 disabled: 'disabled' 的字段，可点的字段不加</h2>

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
          name: 'wefajlrjgakdjsdklfgjkdjfkldjfgkljfjdhjklhsdfjgkshdkljaiursfajkds',
        },
        {
          name: '88888',
        },
        {
          name: '88',
        },
        {
          name: '888',
        },
      ],
      data2: [
        {
          name: '666',
        },
        {
          name: 'sfafgdgsdf',
        },
        {
          name: 'ergdsf',
        },
      ],
      data3: [
        {
          name: 'default',
          disabled: 'disabled',
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
      console.log(nData);
    },
    addDataRadio(nData) {
      this.data2.push({ name:nData });
      console.log(nData);
    },
    getdatas(v) {
      console.log(v);
    },
    getDef(v) {
      console.log(v);
    },
    checkselect(val) {
      console.log(val);
    },
  },
};
</script>

