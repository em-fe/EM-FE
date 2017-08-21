<template>
  <div id="inputmore-page">
    <h3>基础</h3>
    <emfe-inputmore v-model="input1" @reduce="reduce1" @plus="plus1" :index="0"></emfe-inputmore>
    当前 {{ input1 }}
    <br>
    点击 {{ input1Number }} 下
    <br>
    <pre>
      &lt;emfe-inputmore v-model="input1" @reduce="reduce1" @plus="plus1" :index="0"&gt;&lt;/emfe-inputmore&gt;
    </pre>
    <br>
    <pre>
      reduce1() {
        this.input1Number--;
      },
      plus1() {
        this.input1Number++;
      },
    </pre>
    <br>
    <br>
    <h3>icon</h3>
    <emfe-inputmore type="number" icon="hint" v-model="input2" :index="0"></emfe-inputmore>
    {{ input2 }}
    <br>
    <pre>
      &lt;emfe-inputmore type="number" icon="hint" v-model="input2" :index="0"&gt;&lt;/emfe-inputmore&gt;
    </pre>
    <br>
    <br>
    <br>
    <h3>整体组合用法1</h3>
    <emfe-inputmore-group :datas="datas1" :inputHandle="inputdata1.bind(this)"></emfe-inputmore-group>
    {{ datas1 }}
    <pre>
      &lg;emfe-inputmore-group :datas="datas1" :inputHandle="inputdata1.bind(this)"&gt;&lg;/emfe-inputmore-group&gt;
    </pre>
    <pre>
      datas1: [222, 333],
    </pre>
    <pre>
      inputdata1(now, index) {
        this.datas1.splice(index, 1, now);
      },
    </pre>
    <br>
    <br>
    <br>
    <h3>整体组合用法2</h3>
    <!-- <emfe-inputmore-group :datas="datas" :new="news" :max="4" :min="1" @reduce="reduceGroup" @plus="plusGroup"></emfe-inputmore-group> -->
    <p v-show="groupNow">当前点击的数据 {{ groupNow }}</p>
    <pre>
      &lt;emfe-inputmore-group :datas="datas" :new="news" :max="4" :min="1" @reduce="reduceGroup" @plus="plusGroup"&gt;&lt;/emfe-inputmore-group&gt;
    </pre>
    <pre>
      datas: [
        {
          num: 111,
          icon: 'hint',
        },
        {
          num: 222,
          icon: 'hint',
        },
      ],
      news: {
        num: 1,
        icon: 'hint',
      },
    </pre>
    <pre>
      reduceGroup(now) {
        this.groupNow = now.num;
      },
      plusGroup(now) {
        this.groupNow = now.num;
      },
    </pre>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h3>emfe-inputmore 组件 API</h3>
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
          <td>type</td>
          <td>输入框类型</td>
          <td>String</td>
          <td>text</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>有icon</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>默认提示</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>index</td>
          <td>索引，必须</td>
          <td>Number</td>
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
    <h3>emfe-inputmore 组件 注册的方法</h3>
    <table>
      <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>reduce</td>
          <td>减号触发</td>
          <td>当前索引（ index ）</td>
        </tr>
        <tr>
          <td>plus</td>
          <td>加号触发</td>
          <td>当前索引（ index ）</td>
        </tr>
      </tbody>
    </table>
    <br>
    <br>
    <br>
    <br>
    <br>
    <h3>emfe-inputmore-group 组件 API</h3>
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
          <td>type</td>
          <td>如果没有数据中有 type 指定配置，所有输入框类型。</td>
          <td>String</td>
          <td>text</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>如果没有数据中有 icon 指定配置，所有图标。</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>如果没有数据中有 placeholder 指定配置，所有默认提示。</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>max</td>
          <td>添加限制</td>
          <td>Number</td>
          <td>Infinity</td>
        </tr>
        <tr>
          <td>max</td>
          <td>删除限制</td>
          <td>Number</td>
          <td>1</td>
        </tr>
        <tr>
          <td>datas</td>
          <td>数据，必须[
            {
              num: 111,
              icon: 'hint',
            },
            {
              num: 222,
              icon: 'hint',
            },
          ]</td>
          <td>Array</td>
          <td>-</td>
        </tr>
        <tr>
          <td>new</td>
          <td>添加数据，必须{
            num: 1,
            icon: 'hint',
          }</td>
          <td>Object</td>
          <td>-</td>
        </tr>
        <tr>
          <td>className(class-name)</td>
          <td>自定义的 class 名称。</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>reduceHandle</td>
          <td>减少的时候触发</td>
          <td>Function</td>
          <td>当前值, 当前数据, 所有数据, 当前索引</td>
        </tr>
        <tr>
          <td>plusHandle</td>
          <td>增加的时候触发</td>
          <td>Function</td>
          <td>当前值, 当前数据, 所有数据, 当前索引</td>
        </tr>
        <tr>
          <td>inputHandle</td>
          <td>输入的时候触发</td>
          <td>Function</td>
          <td>当前值, 当前数据, 所有数据, 当前索引</td>
        </tr>
      </tbody>
    </table>
    <br>
    <h3>emfe-inputmore-group 组件 注册的方法</h3>
    <table>
      <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>reduce</td>
          <td>减号触发</td>
          <td>当前数据，当前索引，所有数据</td>
        </tr>
        <tr>
          <td>plus</td>
          <td>加号触发</td>
          <td>当前数据，当前索引，所有数据</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input1: 'sss',
      input1Number: 0,
      input2: 111,
      datas1: [222, 333],
      datas: [
        {
          num: 111,
          icon: 'hint',
        },
        {
          num: 222,
          icon: 'hint',
        },
      ],
      news: {
        num: 1,
        icon: 'hint',
      },
      groupNow: '',
    };
  },
  methods: {
    reduce1() {
      this.input1Number--;
    },
    plus1() {
      this.input1Number++;
    },
    reduceGroup(now) {
      this.groupNow = now.num;
    },
    plusGroup(now) {
      this.groupNow = now.num;
    },
    inputdata1(now, index) {
      this.datas1.splice(index, 1, now);
    },
  },
};
</script>
<style>
</style>
