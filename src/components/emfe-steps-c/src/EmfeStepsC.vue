<template>
  <div class="emfe-steps-c" :class="stepscName">
    <div class="emfe-steps-c-text">
      <p class="emfe-steps-c-text-item" v-for="item in datas.stepsText">{{item.text}}</p>
    </div>
    <div class="emfe-steps-c-main">
      <div v-for="i in datas.allStepsNums" 
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
  </div>
</template>
<script>
export default {
  name: 'EmfeSteps',
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
  },
};
</script>
