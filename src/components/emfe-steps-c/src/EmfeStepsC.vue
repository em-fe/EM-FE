<template>
  <div class="emfe-steps-c" :class="stepscName">
    <div class="emfe-steps-c-text" v-if="datas.textPosition === 'top' || datas.textPosition !== 'bottom'" :class="textName">
      <p class="emfe-steps-c-text-top" v-for="(item, index) in datas.stepsText" :key="index">{{item.text}}</p>
    </div>
    <div class="emfe-steps-c-main" :class="boxName">
      <div v-for="i in datas.allStepsNums" :key="i"
           class="emfe-steps-c-main-item"
           :class="{'emfe-steps-c-main-flex': i !== datas.allStepsNums}">
        <p class="emfe-steps-c-main-item-text"
           v-if="i >= active"
           :class="{'emfe-steps-c-main-item-now': i === active}">{{i}}</p>
        <emfe-icon v-if="i < active" type="querentouxiang" className="emfe-steps-c"></emfe-icon>
        <div v-if="i !== datas.allStepsNums"
             class="emfe-steps-c-main-item-line"
             :class="{'emfe-steps-c-main-item-line-active': i < active}"></div>
      </div>
    </div>
    <div class="emfe-steps-c-text" v-if="datas.textPosition === 'bottom'" :class="textName">
      <div class="emfe-steps-c-text-item" v-for="(item, index) in datas.stepsText" :key="index">
        <div class="emfe-steps-c-text-item-bottom">
          <p class="emfe-steps-c-text-bottom-name" :class="{'emfe-steps-c-text-bottom-name-not': index >= active}">{{item.text}}</p>
          <p class="emfe-steps-c-text-bottom-describe" v-if="item.describe && index < active">
            <span class="emfe-steps-c-text-bottom-describe-item" v-for="describeItem in item.describe">{{describeItem}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EmfeStepsC',
  props: {
    datas: {
      type: Object,
      required: true,
    },
    active: {
      type: Number,
      required: true,
    },
    className: String,
  },
  computed: {
    stepscName() {
      return [
        {
          [`${this.className}-stepsc`]: !!this.className,
        },
      ];
    },
    textName() {
      return [
        {
          [`emfe-steps-c-${this.datas.textPosition}`]: !!this.datas,
        },
      ];
    },
    boxName() {
      return [
        {
          [`emfe-steps-c-main-${this.datas.textPosition}`]: !!this.datas,
        },
      ];
    },
  },
};
</script>
