<template>
  <div>
    <emfe-drop className="abc-drop" :opationsData="list"></emfe-drop>
    <pre>
      &lt;emfe-drop className="abc-drop" :opationsData="list"&gt;&lt;/emfe-drop&gt;
    </pre>
    <pre>
      list: [
        {
          title: 1,
        },
        {
          title: 2,
        },
        {
          title: 3,
        },
        {
          title: 4,
        },
        {
          title: 5,
        },{
          title: 6,
        },
        {
          title: 7,
        },
        {
          title: 8,
        },
        {
          title: 9,
        },
        {
          title: 10,
        },
      ],
    </pre>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h3>API</h3>
    <table>
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
          <td>opationsData</td>
          <td>数据 [{title: 'test'}]</td>
          <td>Array</td>
          <td>-</td>
        </tr>
        <tr>
          <td>className(class-name)</td>
          <td>自定义的 class 名称。</td>
          <td>String</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    <br>
    <h3>注册的方法</h3>
    <table>
      <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </tr>
        <tr>
          <td>swap</td>
          <td>触碰交换数据的时候</td>
          <td>各种数据</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>down</td>
          <td>点下</td>
          <td>各种数据</td>
        </tr>
        <tr>
          <td>move</td>
          <td>移动</td>
          <td>各种数据</td>
        </tr>
        <tr>
          <td>up</td>
          <td>抬起</td>
          <td>各种数据</td>
        </tr>
        <tr>
          <td>swap</td>
          <td>触碰交换数据的时候</td>
          <td>各种数据</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'drop-page',
  data() {
    return {
      list: [
        {
          title: 1,
        },
        {
          title: 2,
        },
        {
          title: 3,
        },
        {
          title: 4,
        },
        {
          title: 5,
        },{
          title: 6,
        },
        {
          title: 7,
        },
        {
          title: 8,
        },
        {
          title: 9,
        },
        {
          title: 10,
        },
      ],
    };
  },
  methods: {
    beforeDrag(e) {
      console.log('beforeDrag');
    },
    drag(e) {
      console.log('draging');
    },
    afterDrag(e) {
      console.log('afterDrag');
    },
    hit() {
      console.log('afterDrag');
    },
  },
};
</script>
<style>
.abc-drop {
  width: 720px;
  height: 32px;
  display: flex;
}
.abc-drop-drag {
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  height: 32px;
  line-height: 32px;
  border: 1px solid #dcdcdc;
  margin-left: -1px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: move;
}
</style>
