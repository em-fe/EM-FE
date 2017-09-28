<template>
  <div class="page-select">
    <h2>下拉框：</h2>
    <div style="margin-bottom:10px">
    </style>多选：</div>

    <!--  -->
    <emfe-select :datas="data1" type="checkbox" @getAllData="getData" selectText="提示文字" @checkedopt="getlist" @delopt="getlist2"></emfe-select>
    API：自定义属性 :<br>
              :datas="data1"<br>
              type="checkbox"<br>


    <div style="margin:50px 0 10px">
      带新建的多选
    </div>

    <!--  -->
    <emfe-select :datas="data2" seleStu="newList" type="checkbox" :checkVals="checkeds" @addDataCheck="addDataCheck" @checkedopt="getlist" @delopt="getlist2" @getAllData="getData" selectText="提示文字"></emfe-select>
    API：包含3个配置项和一个方法：<br>
              自定义属性 :<br>
              :datas="data1"<br>
              seleStu="newList"<br>
              type="checkbox"<br>
              一个方法是：addDataCheck （添加自定义数据使用）
    <!-- / -->

    <div style="margin:50px 0 10px">
      普通下拉框
    </div>

    <!--  -->
    <emfe-select :datas="data3" type="default" @getDefData="getData"></emfe-select>
    API：包含2个配置项：<br>
              自定义属性 :<br>
              :datas="data3"<br>
              type="default"<br>
    <!-- / -->

    <div style="margin:50px 0 10px">
      带 icon 的下拉框
    </div>

    <!--  -->
    <emfe-select :datas="data4" type="icon" @getDefData="getData"></emfe-select>
    API：包含2个配置项：<br>
              自定义属性 :<br>
              :datas="data4"<br>
              type="icon"<br>
    <!-- / -->

    <h2 style="margin-top:50px">1.不可点击的数据添加上一条 disabled: 'disabled' 的字段，可点的字段不加；</h2>
    <h2>2.selectText配置项里写提示文字 不填写即默认的‘选择标签’</h2>

  </div>
</template>
<script>
export default {
  name: 'pageSelect',
  data() {
    return {
      checkedNames: ['Jack'],
      checkVals: ['esfa','2'],
      datas: '',
      checkeds: [3, 4],
      data1: [
        {
          name: '1',
          checked: true,
          disabled: false,
        },
        {
          name: '2',
          checked: true,
          disabled: false,
        },
        {
          name: '3',
          checked: false,
          disabled: false,
        },
        {
          name: 'esfa',
          checked: false,
          disabled: false,
        },
      ],
      data2: [
        {
          name: '1',
          checked: true,
          disabled: false,
        }
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
      data4: [
        {
          name: '中国',
          tel: '+86',
          icon: 'https://static.evente.cn/evente/img/flag/v1/zg.jpg',
        },
        {
          name: '香港',
          tel: '+852',
          icon: 'https://static.evente.cn/evente/img/flag/v1/xg.jpg',
        },
      ],
    };
  },
  methods: {
    addDataCheck(nData) {
      this.data2.push({
        name:nData,
        checked: true,
     });
      console.log('添加：' + nData);
    },
    addDataRadio(nData) {
      this.data2.push({ name:nData });
      console.log('添加：' + nData);
    },
    getData(name, allData) {
      console.log('111选择的数据为：' + name, allData);
    },
    getAllData(allData) {
      console.log('选择的数据为：' + allData);
    },
    getlist(item) {
      console.log('选中了：'+item);
    },
    getlist2(item) {
      console.log('删除了：'+item);
    },
  },
};
</script>
