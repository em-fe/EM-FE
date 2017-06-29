<template>
  <div class="tooltip-page">
    <div class="tip-top">
      <emfe-tooltip placement="top-start">
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
        <p slot="tip">这是事件的示例</p>
      </emfe-tooltip>
    </div>
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
}

.demo-tooltip {
  background: rgba(0, 100, 0, 0.5);
}
</style>
