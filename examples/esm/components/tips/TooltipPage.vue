<template>
  <div class="tooltip-page">
    <h3>示例</h3>
    <div style="position: relative;width: 200px;height:100px;margin: 40px 0 0;border: 1px solid green;">
      <span>父级有相对定位的时候</span>
      <emfe-tooltip placement="left-end" style="margin: 40px 0 0;">
        <button slot="render" style="border: 1px solid yellow">有fixed, 有relative</button>
        <ul slot="tip">
          <li>a</li>
          <li>a</li>
          <li>a</li>
        </ul>
      </emfe-tooltip>
    </div>
    <div style="position: fixed;right: 0;">
      <emfe-tooltip placement="left-start" theme="light" :arrowStatus="false">
        <button slot="render">只有fixed</button>
        <ul slot="tip">
          <li>left</li>
        </ul>
      </emfe-tooltip>
    </div>
    <div style="position: fixed;right:0px;top: 2px;">
      <div style="position: relative;border: 1px solid red;">
        <emfe-tooltip placement="right-start" theme="light" :arrowStatus="false">
          <button slot="render">只有fixed，出现在右边<br>因为靠边了，处理到左边</button>
          <ul slot="tip">
            <li>left</li>
          </ul>
        </emfe-tooltip>
      </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <p>父级有相对定位的时候</p>
    <div style="position: relative;border: 1px solid red;">
      <emfe-tooltip placement="top-start" theme="light" :arrowStatus="false" style="margin-top: 40px;">
        <button slot="render">只有relative</button>
        <ul slot="tip">
          <li>这是top-start</li>
        </ul>
      </emfe-tooltip>
    </div>
    <br>
    <br>
    <br>
    <br>
    <div class="tip-top">
      <p>父级没有定位的时候</p>
      <emfe-tooltip placement="top-start" theme="light" :arrowStatus="false">
        <button slot="render">top-start</button>
        <ul slot="tip">
          <li>这是top-start1</li>
          <li>这是top-start2</li>
          <li>这是top-start3</li>
          <li>这是top-start4</li>
        </ul>
      </emfe-tooltip>
      <emfe-tooltip>
        <button slot="render">top</button>
        <ul slot="tip">
          <li>这是top1</li>
          <li>这是top2</li>
        </ul>
      </emfe-tooltip>
      <emfe-tooltip placement="top-end">
        <button slot="render">top-end</button>
        <ul slot="tip">
          <li>这是top-end1</li>
          <li>这是top-end2</li>
          <li>这是top-end3</li>
          <li>这是top-end4</li>
        </ul>
      </emfe-tooltip>
    </div>
    <br>
    <br>
    <div class="tip-center">
      <div class="tip-center-left">
        <emfe-tooltip placement="left-start">
          <button slot="render">left-start</button>
          <ul slot="tip">
            <li>这是left-start1</li>
            <li>这是left-start2</li>
            <li>这是left-start3</li>
            <li>这是left-start4</li>
          </ul>
        </emfe-tooltip>
        <br>
        <br>
        <br>
        <emfe-tooltip placement="left">
          <button slot="render">left</button>
          <ul slot="tip">
            <li>这是left1</li>
            <li>这是left2</li>
            <li>这是left3</li>
            <li>这是left4</li>
          </ul>
        </emfe-tooltip>
        <br>
        <br>
        <br>
        <emfe-tooltip placement="left-end">
          <button slot="render">left-end</button>
          <ul slot="tip">
            <li>这是left-end1</li>
            <li>这是left-end2</li>
            <li>这是left-end3</li>
            <li>这是left-end4</li>
          </ul>
        </emfe-tooltip>
      </div>
      <div class="tip-center-right">
        <emfe-tooltip placement="right-start">
          <button slot="render">right-start</button>
          <ul slot="tip">
            <li>这是right-start1</li>
            <li>这是right-start2</li>
            <li>这是right-start3</li>
            <li>这是right-start4</li>
          </ul>
        </emfe-tooltip>
        <br>
        <br>
        <br>
        <emfe-tooltip placement="right">
          <button slot="render">right</button>
          <ul slot="tip">
            <li>这是right1</li>
            <li>这是right2</li>
            <li>这是right3</li>
            <li>这是right4</li>
          </ul>
        </emfe-tooltip>
        <br>
        <br>
        <br>
        <emfe-tooltip placement="right-end">
          <button slot="render">right-end</button>
          <ul slot="tip">
            <li>这是right-end1</li>
            <li>这是right-end2</li>
            <li>这是right-end3</li>
            <li>这是right-end4</li>
          </ul>
        </emfe-tooltip>
      </div>
    </div>
    <br>
    <br>
    <div class="tip-bottom">
      <emfe-tooltip placement="bottom-start">
        <button slot="render">bottom-start</button>
        <p slot="tip">这是bottom-start1</p>
      </emfe-tooltip>
      <emfe-tooltip placement="bottom">
        <button slot="render">bottom</button>
        <ul slot="tip">
          <li>这是bottom1</li>
          <li>这是bottom2</li>
          <li>这是bottom3</li>
          <li>这是bottom4</li>
        </ul>
      </emfe-tooltip>
      <emfe-tooltip placement="bottom-end">
        <button slot="render">bottom-end</button>
        <ul slot="tip">
          <li>这是bottom-end1</li>
          <li>这是bottom-end2</li>
          <li>这是bottom-end3</li>
          <li>这是bottom-end4</li>
        </ul>
      </emfe-tooltip>
    </div>
    <br>
    <br>
    <br>
    <br>
    <div class="tip-offset">
      <emfe-tooltip offset="40" placement="right">
        <button slot="render">offset</button>
        <p slot="tip">这是offset的示例，距离为40px</p>
      </emfe-tooltip>
    </div>
    <br>
    <br>
    <br>
    <br>
    <div class="tip-delay">
      <emfe-tooltip className="demo" delay="1000">
        <button slot="render">delay</button>
        <p slot="tip">这是delay的示例，延时1秒</p>
      </emfe-tooltip>
    </div>
    <br>
    <br>
    <br>
    <br>
    <div class="tip-event">
      <emfe-tooltip className="demo" @before-show="beforeShow" @after-show="afterShow" @before-hide="beforeHide" @after-hide="afterHide">
        <button slot="render">event</button>
        <p slot="tip">这是事件的示例，有console.log输出</p>
      </emfe-tooltip>
    </div>
    <br>
    <br>
    <br>
    <br>
    <div class="tip-diy">
      <emfe-tooltip :styles="{position: 'absolute', top: 0, left: 0}" placement="right">
        <button slot="render">diy</button>
        <p slot="tip">自定义样式</p>
      </emfe-tooltip>
    </div>
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
          <td>theme</td>
          <td>主题设置。dark | light</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>arrowStatus</td>
          <td>小三角是否显示</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>offset</td>
          <td>提示框与选中文本之间的距离</td>
          <td>Number | String</td>
          <td>16</td>
        </tr>
        <tr>
          <td>delay</td>
          <td>延迟显示，单位毫秒</td>
          <td>Number | String</td>
          <td>0</td>
        </tr>
        <tr>
          <td>placement</td>
          <td>提示框出现的位置，可选值为toptop-starttop-endbottombottom-startbottom-endleftleft-startleft-endrightright-startright-end</td>
          <td>String</td>
          <td>top</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用提示框</td>
          <td>Boolean | String</td>
          <td>false</td>
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
      </thead>
      <tbody>
        <tr>
          <td>before-show</td>
          <td>显示之前触发</td>
          <td>-</td>
        </tr>
        <tr>
          <td>after-show</td>
          <td>显示之后触发</td>
          <td>-</td>
        </tr>
        <tr>
          <td>after-hide</td>
          <td>隐藏之后触发</td>
          <td>-</td>
        </tr>
        <tr>
          <td>after-hide</td>
          <td>隐藏之后触发</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'TooltipPage',
  methods: {
    beforeShow() {
      console.log('beforeShow');
    },
    afterShow() {
      console.log('afterShow');
    },
    beforeHide() {
      console.log('beforeHide');
    },
    afterHide() {
      console.log('afterHide');
    },
  },
};
</script>
<style lang="scss">
.tip {
  &-top {
    text-align: center;
  }

  &-center {
    overflow: hidden;
    width: 400px;
    margin: 0 auto;

    &-left {
      float: left;
      text-align: right;
    }

    &-right {
      float: right;
    }
  }

  &-bottom {
    text-align: center;
  }

  &-offset {
    text-align: center;
  }

  &-delay {
    text-align: center;
  }

  &-event {
    text-align: center;
  }

  &-diy {
    position: relative;
  }
}

.demo-tooltip {
  background: rgba(0, 100, 0, 0.5);
}
</style>
