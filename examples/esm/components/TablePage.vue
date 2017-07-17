<template>
  <div class="emfeTableBox">
    <p>如果你希望第一列是checkbox，column数组第一个需要传type="selection",并同时在组件中传入checkbox组件</p>
    <br>
    <p>表格固定宽度</p>
    <emfe-table :columns="column" :data="data2">
      <emfe-table-head slot="head" >
      sss
      </emfe-table-head>
      <emfe-table-body slot="body" v-for="(dataList,index) in data2" :ind="index" key="index" :dataList="dataList">
      sss
      </emfe-table-body>
    </emfe-table>
    <br>
    <p>表格不固定宽度,需要传type="true"</p>
    <p>在使用rowspan的时候，必须要传入row="true",row是确定那个td要合并，在该td下的td的text需要传""。</p>
    <emfe-table :columns="column2" :data="data" type="true">
      <emfe-table-head  slot="head" >
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in data" :ind="index" key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
    <br>
    <p>表格不固定宽度,需要传type="true"</p>
    <p>同时，emitjump事件。</p>
    <emfe-table :columns="column" :data="data2" type="true">
      <emfe-table-head  slot="head" >
      iconBox
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in data2" key="index" :ind="index" :dataList="dataList" @jump="Jump">
      iconBox
      </emfe-table-body>
    </emfe-table>
  </div>
</template>
<script>
export default {
  name: 'table-page',
  data() {
    return {
      column:[
        {
          type: 'selection',
          title: 'icon',
          key: 'name',
        },
        {
          title: '年龄年龄年龄年龄年龄年龄年龄年龄年龄',
          key: 'age',
        },
        {
          title: '地址地址地址',
          key: 'address',
        },
        {
          title: '年龄',
          key: 'address2',
        },
        {
          title: '地址',
          key: 'address3',
        },
        {
          title: 'icon',
          key: 'address4',
        },
        {
          title: '年龄年龄年龄年龄年龄年龄年龄年龄年龄',
          key: 'address5',
        },
        {
          title: '地址地址地址',
          key: 'address6',
        },
        {
          title: 'icon',
          key: 'address7',
        },
        {
          title: '年龄年龄年龄年龄年龄年龄年龄年龄年龄',
          key: 'address8',
        },
        {
          title: '地址地址地址',
          key: 'address9',
        },
      ],
      column2:[
        {
          title: 'icon22',
          key: 'name',
        },
        {
          title: '年龄',
          key: 'age',
        },
        {
          title: '地址',
          key: 'address',
        },
        {
          title: '地址2',
          key: 'address2',
        },
        {
          title: '地址3',
          key: 'address3',
        },
        {
          title: '地址4',
          key: 'address4',
        },
        {
          title: '地址5',
          key: 'address5',
        },
        {
          title: '地址6',
          key: 'address6',
        },
        {
          title: '地址7',
          key: 'address7',
        },
        {
          title: '地址8',
          key: 'address8',
        },
        {
          title: '地址9',
          key: 'address9',
        },
      ],
      data: [
        {
          name: {text:'王小明', row:false},
          age: {text:'北京市朝阳区芍药居1', row:false},
          address: {text:'北京市朝阳区芍药居2', row:false},
          address2: {text:'北京市朝阳区芍药居2', row:true},
          address3: {text:'北京市朝阳区芍药居4', row:false},
          address4: {text:'北京市朝阳区芍药居5', row:false},
          address5: {text:'北京市朝阳区芍药居6', row:false},
          address6: {text:'北京市朝阳区芍药居7', row:false},
          address7: {text:'北京市朝阳区芍药居7', row:true},
          address8: {text:'北京市朝阳区芍药居7', row:false},
          address9: {text:'北京市朝阳区芍药居7', row:false},
        },
        {
          name: {text:'王小明', row:false},
          age: {text:'北京市朝阳区芍药居1', row:false},
          address: {text:'北京市朝阳区芍药居2', row:false},
          address2: {text:'', row:true},
          address3: {text:'北京市朝阳区芍药居4', row:false},
          address4: {text:'北京市朝阳区芍药居5', row:false},
          address5: {text:'北京市朝阳区芍药居6', row:false},
          address6: {text:'北京市朝阳区芍药居7', row:false},
          address7: {text:'', row:true},
          address8: {text:'北京市朝阳区芍药居7', row:false},
          address9: {text:'北京市朝阳区芍药居7', row:false},
        },
        {
          name: {text:'王小明', row:false},
          age: {text:'北京市朝阳区芍药居1', row:false},
          address: {text:'北京市朝阳区芍药居2', row:false},
          address2: {text:'', row:true},
          address3: {text:'北京市朝阳区芍药居4', row:false},
          address4: {text:'北京市朝阳区芍药居5', row:false},
          address5: {text:'北京市朝阳区芍药居6', row:false},
          address6: {text:'北京市朝阳区芍药居7', row:false},
          address7: {text:'北京市朝阳区芍药居7', row:false},
          address8: {text:'北京市朝阳区芍药居7', row:false},
          address9: {text:'北京市朝阳区芍药居7', row:false},
        },
      ],
      data2:[
        {
          name: {text:'王小明', row:false},
          age: {text:'北京市朝阳区芍药居1', row:false},
          address: {text:'北京市朝阳区芍药居2', row:false},
          address2: {text:'北京市朝阳区芍药居3', row:false},
          address3: {text:'北京市朝阳区芍药居4', row:false},
          address4: {text:'北京市朝阳区芍药居5', row:false},
          address5: {text:'北京市朝阳区芍药居6', row:false},
          address6: {text:'北京市朝阳区芍药居7', row:false},
          address7: {text:'北京市朝阳区芍药居7', row:false},
          address8: {text:'北京市朝阳区芍药居7', row:false},
          address9: {text:'北京市朝阳区芍药居7', row:false},
        },
        {
          name: {text:'王小明', row:false},
          age: {text:'北京市朝阳区芍药居1', row:false},
          address: {text:'北京市朝阳区芍药居2', row:false},
          address2: {text:'北京市朝阳区芍药居3', row:false},
          address3: {text:'北京市朝阳区芍药居4', row:false},
          address4: {text:'北京市朝阳区芍药居5', row:false},
          address5: {text:'北京市朝阳区芍药居6', row:false},
          address6: {text:'北京市朝阳区芍药居7', row:false},
          address7: {text:'北京市朝阳区芍药居7', row:false},
          address8: {text:'北京市朝阳区芍药居7', row:false},
          address9: {text:'北京市朝阳区芍药居7', row:false},
        },
        {
          name: {text:'王小明', row:false},
          age: {text:'北京市朝阳区芍药居1', row:false},
          address: {text:'北京市朝阳区芍药居2', row:false},
          address2: {text:'北京市朝阳区芍药居3', row:false},
          address3: {text:'北京市朝阳区芍药居4', row:false},
          address4: {text:'北京市朝阳区芍药居5', row:false},
          address5: {text:'北京市朝阳区芍药居6', row:false},
          address6: {text:'北京市朝阳区芍药居7', row:false},
          address7: {text:'北京市朝阳区芍药居7', row:false},
          address8: {text:'北京市朝阳区芍药居7', row:false},
          address9: {text:'北京市朝阳区芍药居7', row:false},
        },
      ]
    };
  },
  methods: {
    Jump() {
      console.log('例子');
    },
  },
};
</script>
<style>
  .emfeTableBox{
    width: 1200px;
    height: 1000px;
    background-color: #ddd;
  }
</style>
