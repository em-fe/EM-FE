<template>
  <div class="panelpage">
    <div class="demo1">
      <div class="demoBox">
        <emfe-panel className="add" :data="dataList"></emfe-panel>
      </div>
      <div class="demoBox2">
        <emfe-panel className="add" :data="dataList2"></emfe-panel>
      </div>
    </div>
    <br>
    <emfe-panel className="add" type="hint" :data="dataList2"></emfe-panel>
    <br>
    <br>
    <emfe-panel className="add" :switchType='true' :data="dataList2" @switch-toogle="switchs"></emfe-panel>
    <br>
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
          <td>自定义类名</td>
          <td>String</td>
          <td>默认""</td>
        </tr>
        <tr>
          <td>data</td>
          <td>数据 text为内容，cont为次数，switchOk为是否有switch开关</td>
          <td>Array</td>
          <td>默认[]</td>
        </tr>
        <tr>
          <td>type</td>
          <td>icon类型</td>
          <td>String</td>
          <td>默认''</td>
        </tr>
        <tr>
          <td>switchType</td>
          <td>switch类型</td>
          <td>[String, Boolean]</td>
          <td>默认false</td>
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
          <td>switchs</td>
          <td>点击switch，返回switch的状态</td>
          <td>true or false</td>
        </tr>
        <tr>
          <td>icon-click</td>
          <td>点击icon触发</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "panelpage",
  data() {
    return {
      dataList:[
        {text: '累计消费次数', cont: '24次', switchOk:false},
        {text: '累计消费金额', cont: '￥20300.00', switchOk:false},
        {text: '平均消费1', cont: '￥210.00', switchOk:false},
      ],
      dataList2:[
        {text: '累计消费次数', cont: '24次', switchOk:false},
        {text: '累计消费金额', cont: '￥20300.00', switchOk:false},
        {text: '平均消费1', cont: '￥210.00', switchOk:false},
        {text: '累计消费次数2', cont: '￥210.00', switchOk:false},
        {text: '累计消费金额1', cont: '￥210.00', switchOk:true},
      ],
    };
  },
  methods: {
    switchs(status) {
      console.log(111, status);
    },
  },
};
</script>
<style>
  .panelpage {
    width: 800px;
    height: 300px;
  }
  .demo1 {
    width: 100%;
    height: 100%;
  }
  .demoBox {
    float: left;
    width: 48%;
    margin-right: 4%;
    height: 100%;
  }
  .demoBox2 {
    float: left;
    width: 48%;
    height: 100%;
  }
</style>
