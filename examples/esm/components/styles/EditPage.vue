<template>
  <div>
    <emfe-edit :oneList="oneList" :addOneObj="addOneObj" @addLsit="add" :addTwoObj="addTwoObj"></emfe-edit>
    <br>
    <br>
    <br>
    <br>
    <h3>API</h3>
    <table style="width: 100%;text-align: center;">
      <thead>
        <tr>
          <th>属性</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>className</td>
          <td>需要修改的样式</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>oneList</td>
          <td>默认显示的一级和二级内容</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>addOneObj</td>
          <td>点击一级添加按钮需要添加的内容</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>addTwoObj</td>
          <td>点击二级添加按钮需要添加的内容</td>
          <td>String</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    <h3>注册的方法</h3>
    <table style="width: 100%;text-align: center;">
      <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>add</td>
          <td>点击一级选项添加按钮触发</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'editPage',
  data() {
    return {
      oneList: [
        {
          name: '选项1',
          openFlg: false,
          twoList: [
            {
              name: '二级选项',
            },
            {
              name: '二级选项',
            },
          ],
        },
        {
          name: '选项2',
          openFlg: false,
          twoList: [
            {
              name: '二级选项',
            },
            {
              name: '二级选项',
            },
          ],
        },
      ],
      addOneObj: {
        name: '一级选项',
        openFlg: false,
        twoList: [
          {
            name: '二级选项',
          },
          {
            name: '二级选项',
          },
        ],
      },
      addTwoObj: {
        name: '二级选项',
      },
    }
  },
  methods: {
    add(datas, index) {
      console.log(datas, index);
    }
  }
}
</script>
