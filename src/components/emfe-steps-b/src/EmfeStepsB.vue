<template>
  <div class="emfe-steps-b" :class="stepscName">
    <div class="emfe-steps-b-main">
      <div v-for="i in datas.allStepsNums" :key="i"
           class="emfe-steps-b-main-item"
           :class="{'emfe-steps-b-main-flex': i !== datas.allStepsNums}">
        <p class="emfe-steps-b-main-item-text"
           v-if="i >= active"
           :class="{'emfe-steps-b-main-item-now': i === active}">{{i}}</p>
        <emfe-icon v-if="i < active" type="querentouxiang" className="emfe-steps-b"></emfe-icon>
        <div v-if="i !== datas.allStepsNums" 
             class="emfe-steps-b-main-item-line"
             :class="{'emfe-steps-b-main-item-line-active': i < active}"></div>
      </div>
    </div>
    <div class="emfe-steps-b-text">
      <p class="emfe-steps-b-text-item" v-for="(item, index) in datas.stepsText" :key="index">{{item.text}}</p>
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
          [`${this.className}-stepsb`]: !!this.className,
        },
      ];
    },
  },
};
</script>
