<template>
  <div class="emfe-table-box">
    <p>如果你希望传入多个slot，需要把数据里的slot设置为a-i，插入的slot对应a-i</p>
    <emfe-table :columns="columnSlot" classAddName="add" :data="dataSlot" type="true">
      <emfe-table-head  slot="head" >
      </emfe-table-head>
      <emfe-table-body slot="body" @jump="Jump" v-for="(dataList,index) in dataSlot" :ind="index" key="index" :dataList="dataList">
        <div slot="a">
          <emfe-checkout color="#1996F9" :title="dataList.name.text">
          </emfe-checkout>
          <emfe-checkout color="#1996F9" :title="dataList.name.text">
          </emfe-checkout>
        </div>
        <div slot="c">
          <emfe-checkout color="#1996F9" :title="dataList.name.text">
          </emfe-checkout>
          <emfe-checkout color="#1996F9" :title="dataList.name.text">
          </emfe-checkout>
        </div>
        <div slot="b">dddd</div>
      </emfe-table-body>
    </emfe-table>
   <br><br>
   <p>每个td平均分的列子</p>
  <emfe-table :columns="column1" :data="data1">
    <emfe-table-head  slot="head" >
    </emfe-table-head>
    <emfe-table-body slot="body"  v-for="(dataList,index) in data1" :ind="index" key="index" :dataList="dataList">
    </emfe-table-body>
  </emfe-table>
     <br>
    <p>td自适应宽度</p>
    <emfe-table classAddName="add" type="true" :columns="column1" :data="data2">
      <emfe-table-head slot="head" >
      </emfe-table-head>
      <emfe-table-body slot="body" v-for="(dataList,index) in data2" :ind="index" key="index" :dataList="dataList">
        <emfe-checkout color="#1996F9" :title="dataList.name.text">
        </emfe-checkout>
      </emfe-table-body>
    </emfe-table>
    <br>
    <p>在使用rowspan的时候，必须要传入row="true",row是确定那个td要合并，在该td下的td的text需要传""。</p>
    <emfe-table :columns="column1" :data="data" type="true">
      <emfe-table-head  slot="head" >
      </emfe-table-head>
      <emfe-table-body slot="body"  v-for="(dataList,index) in data" :ind="index" key="index" :dataList="dataList">
      </emfe-table-body>
    </emfe-table>
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
        <tr height="100px">
          <td>classAddName</td>
          <td>自定义class,例如传入'aa',table的class会添加class, aa-table,表头aa-table-thead，tr添加class为aa-table-thead-tr,th为aa-table-thead-tr-th,tbody没有添加class,tbody下的tr添加class为aa-table-tbody-tr,td为aa-table-tbody-tr-td</td>
          <td>String</td>
          <td>默认为""</td>
        </tr>
        <tr height="100px">
          <td>columns</td>
          <td>表格thead数据</td>
          <td>Array</td>
          <td>-</td>
        </tr>
        <tr height="100px">
          <td>slot</td>
          <td>slot為a-i时，表示当前td为slot插入数据,slot的name分别为a-i，暂时先设置10个slot</td>
          <td>String</td>
          <td>默认为''</td>
        </tr>
        <tr height="100px">
          <td>data</td>
          <td>表格主体数据</td>
          <td>Array</td>
          <td>-</td>
        </tr>
        <tr height="100px">
          <td>表格不固定宽度传type</td>
          <td>type为 ‘true’时，表格不固定宽度，默认显示10列，超出10列出现滚动条</td>
          <td>Boolean, String</td>
          <td>false</td>
        </tr>
        <tr height="100px">
          <td>当表格需要合并行时(rowspan)</td>
          <td>需要type传 ‘true’，同时，data数据中row的value要传ture,row是确定那个td要合并，在该td下的td的text需要传""。</td>
          <td>Boolean</td>
          <td>false</td>
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
          <td>jump事件</td>
          <td>点击tr出发，返回值为tr的index</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>
<script>
export default {
  name: 'table-page',
  data() {
    return {
      column1:[
        {
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
      columnSlot:[
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
      ],
      data1: [
        {
          name: {text:'王小明', row:false},
          age: {text:'北京市朝阳区芍药居1', row:false},
          address: {text:'北京市朝阳区芍药居2', row:false},
          address2: {text:'北京市朝阳区芍药居3', row:false},
          address3: {text:'北京市朝阳区芍药居4', row:false},
          address4: {slot: 'a',text:'北京市朝阳区芍药居4', row:false},
          address5: {slot: 'd', row:false},
          address6: {text:'北京市朝阳区芍药居7', row:false},
          address7: {text:'北京市朝阳区芍药居7', row:false},
          address8: {text:'北京市朝阳区芍药居7', row:false},
          address9: {text:'北京市朝阳区芍药居7', row:false},
        },
      ],
      dataSlot: [
        {
          name: {text:'王小明', row:false},
          age: {text:'北京市朝阳区芍药居1', row:false},
          address: {text:'北京市朝阳区芍药居2', row:false},
          address2: {text:'北京市朝阳区芍药居3', row:false},
          address3: {text:'北京市朝阳区芍药居4', row:false},
          address4: {slot: 'a',text:'北京市朝阳区芍药居4', row:false},
          address5: {slot: 'b', row:false},
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
          address4: {slot: 'a',text:'北京市朝阳区芍药居4', row:false},
          address5: {slot: 'd', row:false},
          address6: {text:'北京市朝阳区芍药居7', row:false},
          address7: {text:'北京市朝阳区芍药居7', row:false},
          address8: {text:'北京市朝阳区芍药居7', row:false},
          address9: {text:'北京市朝阳区芍药居7', row:false},
        },
      ],
      data: [
        {
          name: {text:'王小明', row:false},
          age: {text:'北京市朝阳区芍药居1', row:false},
          address: {text:'北京市朝阳区芍药居2', row:false},
          address2: {text:'北京市朝阳区芍药居2', row:true},
          address3: {text:'北京市朝阳区芍药居4', row:false},
          address4: {text:'北京市朝阳区芍药居4', row:false},
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
          address2: {text:'',hebing:true,row:true,},
          address3: {text:'北京市朝阳区芍药居4', row:false},
          address4: {text:'北京市朝阳区芍药居5', row:false},
          address5: {text:'北京市朝阳区芍药居6', row:false},
          address6: {text:'北京市朝阳区芍药居7', row:false},
          address7: {text:'北京市朝阳区芍药居2', row:false},
          address8: {text:'北京市朝阳区芍药居7', row:false},
          address9: {text:'北京市朝阳区芍药居7', row:false},
        },
      ],
      data2: [
        {
          name: {text:'王小明', row:false},
          age: {text:'18', row:false,hebing:false},
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
      ],
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
  .emfe-table-box{
    width: 1500px;
    height: 1500px;
  }
</style>
