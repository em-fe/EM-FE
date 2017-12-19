<template>
  <div class="page-select">
    <h2>下拉框：</h2>
    <div style="margin-bottom:10px">
    多选：</div>

    <!--  -->
    <emfe-select :datas="data1" type="checkbox" @getAllData="getData" selectText="提示文字" @checkedopt="getlist" @delopt="getlist2"></emfe-select>
    API：自定义属性 :<br>
              :datas="data1"<br>
              type="checkbox"<br>

    <div style="margin-bottom:10px">默认（有错误提示）</div>
    <emfe-select :errOk="true" :datas="data1" type="default" @getAllData="getData" selectText="提示文字" @checkedopt="getlist">
      <div slot="error">错误提示</div>
    </emfe-select>

    <div style="margin:50px 0 10px">
      带新建的多选
    </div>

    <!--  -->
    <emfe-select :datas="data2" type="checkbox" :checkVals="checkeds" news @addDataCheck="addDataCheck" @checkedopt="getlist" @delopt="getlist2" @getAllData="getData" selectText="提示文字"></emfe-select>
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

    <div style="margin:50px 0 10px">
      普通提示下拉框
    </div>

    <!--  -->
    <emfe-select :datas="data3" type="default" @getDefData="getData" tip="提示文字"></emfe-select>
    API：包含2个配置项：<br>
              自定义属性 :<br>
              :datas="data3"<br>
              type="default"<br>
              tip="提示文字"<br>
              placement="right"<br>
    <br>
    <br>
    <br>
    <br>

    <br><br>
    <h3>API</h3>
    <table style="width:100%;text-align:center" class="table">
      <thead>
        <tr>
          <th width="25%">属性</th>
          <th width="30%">说明</th>
          <th width="20%">类型</th>
          <th width="25%">默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>className</td>
          <td>自定义的 class 名称。</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>type</td>
          <td>下拉框类型(checkbox|default|icon)</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>seleStu</td>
          <td>有没有新建</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>addText</td>
          <td>添加标签提示文案</td>
          <td>String</td>
          <td>添加标签</td>
        </tr>
        <tr>
          <td>checkVals</td>
          <td>默认显示</td>
          <td>Array</td>
          <td>[]</td>
        </tr>
        <tr>
          <td>errOk</td>
          <td>是否报错</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>selectText</td>
          <td>下拉框提示文案</td>
          <td>String</td>
          <td>选择标签</td>
        </tr>
        <tr>
          <td>datas</td>
          <td>数据</td>
          <td>Array</td>
          <td>必须</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否可用</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>click(clickInput)</td>
          <td>点击下拉框事件</td>
          <td>Function</td>
          <td>function(){}</td>
        </tr>
        <tr>
          <td>add[addDataCheck(多选添加)|addDataRadio(单选添加) 依然能用]</td>
          <td>添加数据</td>
          <td>Function</td>
          <td>function(){}</td>
        </tr>
        <tr>
          <td>change[getDefData(选中下拉选项) 依然能用]</td>
          <td>选中下拉选项</td>
          <td>Function</td>
          <td>function(){}</td>
        </tr>
        <tr>
          <td>getDefData</td>
          <td>选中下拉选项(type = icon|default)</td>
          <td>Function</td>
          <td>function(){}</td>
        </tr>
        <tr>
          <td>getAllData</td>
          <td>选中下拉选项(type = checkbox)</td>
          <td>Function</td>
          <td>function(){}</td>
        </tr>
        <tr>
          <td>checkedopt</td>
          <td>多选情况选中</td>
          <td>Function</td>
          <td>function(){}</td>
        </tr>
        <tr>
          <td>delopt</td>
          <td>多选情况 不选中</td>
          <td>Function</td>
          <td>function(){}</td>
        </tr>
        <tr>
          <td>close</td>
          <td>关闭时触发</td>
          <td>Function</td>
          <td>function(){}</td>
        </tr>
      </tbody>
    </table>
    <br><br>
    <table style="width:100%;text-align:center" class="table">
      <thead>
        <tr>
          <th width="33%">事件名</th>
          <th width="33%">说明</th>
          <th width="33%">返回值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>click (clickInput 依然能用)</td>
          <td>点击下拉框事件</td>
          <td>-</td>
        </tr>
        <tr>
          <td>add[addDataCheck(多选添加)|addDataRadio(单选添加) 依然能用]</td>
          <td>添加数据</td>
          <td>[新添加的值，所有数据]</td>
        </tr>
        <tr>
          <td>getDefData</td>
          <td>选中下拉选项(type = icon|default)</td>
          <td>[当前选中值，选中的数据，所有数据]</td>
        </tr>
        <tr>
          <td>getAllData</td>
          <td>选中下拉选项(type = checkbox)</td>
          <td>[当前选中值，选中的数据，所有数据]</td>
        </tr>
        <tr>
          <td>change[getDefData(选中下拉选项)|getAllData(选择触发) 依然能用]</td>
          <td>选中下拉选项</td>
          <td>[当前选中值，所有数据]</td>
        </tr>
        <tr>
          <td>checkedopt</td>
          <td>多选情况选中</td>
          <td>[当前选中值，当前数据，所有数据]</td>
        </tr>
        <tr>
          <td>delopt</td>
          <td>多选情况 不选中</td>
          <td>[当前选中值，当前数据，所有数据]</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'pageSelect',
  data() {
    return {
      checkedNames: ['Jack'],
      checkVals: ['esfa','2','2','2','2', '2', '2', '2'],
      datas: '',
      checkeds: [3, 4],
      data1Checked: ['1', '2', '2', '2', '2', '2'],
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
        {
          name: 'esfa',
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
