<template>
  <div class="tag-page">
    <div>
      <h3>切换标签</h3>
      <br>
      <emfe-tag-parent className="default">
        <emfe-tag index="0" @tag="tag">默认</emfe-tag>
        <emfe-tag index="1" active=true @tag="tag">选中</emfe-tag>
        <emfe-tag index="2" disable="true">禁止</emfe-tag>
      </emfe-tag-parent>
    </div>
    <br>
    <div>
      <h3>复选标签</h3>
      <br>
      <emfe-tag-parent className="checket">
        <emfe-tag index="0">默认</emfe-tag>
        <emfe-tag index="1">选中</emfe-tag>
        <emfe-tag index="2" disable="true">禁止</emfe-tag>
      </emfe-tag-parent>
    </div>
    <br>
    <div>
      <h3>复选标签带icon</h3>
      <br>
      <emfe-tag-parent className="checket">
        <emfe-tag index="0" type="hint">默认</emfe-tag>
        <emfe-tag index="1" type="hint">选中</emfe-tag>
        <emfe-tag index="2" type="hint" disable="true"></emfe-icon>禁止</emfe-tag>
      </emfe-tag-parent>
    </div>
    <br>
    <div>
      <h3>筛选标签</h3>
      <br>
      <emfe-tag-parent className="screen">
        <emfe-tag index="0" skin="blue">默认</emfe-tag>
        <emfe-tag index="1"  skin="blue">选中</emfe-tag>
      </emfe-tag-parent>
      <br>
      <emfe-tag-parent className="screen" :data="dataList">
        <emfe-tag v-for="(item, index) in dataList" :index="index" active="true" skin="yellow">{{item}}</emfe-tag>
      </emfe-tag-parent>
    </div>
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
          <td>选择皮肤</td>
          <td>String</td>
          <td>必填，值为'default','checket','screen'</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>disabled为 ‘true’时input输入框禁用，disabled为‘false’时input输入框可用</td>
          <td>Boolead,String</td>
          <td>默认为'fasle'</td>
        </tr>
        <tr>
          <td>active</td>
          <td>active为默认激活状态</td>
          <td>Boolead,String</td>
          <td>默认为'fasle'</td>
        </tr>
        <tr>
          <td>index</td>
          <td>子组件索引</td>
          <td>Boolead,String</td>
          <td>必填</td>
        </tr>
        <tr>
          <td>type</td>
          <td>type 是icon图标的类型</td>
          <td>String</td>
          <td>默认为''</td>
        </tr>
        <tr>
          <td>skin</td>
          <td>筛选标签两种皮肤状态。</td>
          <td>String</td>
          <td>-</td>
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
          <td>tag</td>
          <td>点击tag，返回当前tag的索引值</td>
          <td>Number</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'tag-page',
  data() {
    return {
      dataList: ['默认', '选中'],
    };
  },
  methods:{
    tag(index) {
      console.log(index);
    }
  },
};
</script>
