<template>
  <div class="emfe-opations" :class="opationsName">
    <div class="emfe-opations-main" v-for="(item, index) in opationsData" :key="index" >
      <i class="emfe-opations-icon emfe-opations-radio"></i>
      <emfe-input :placeholder="item.text" className="emfe-opations"></emfe-input>
      <i class="emfe-opations-icon emfe-opations-plus" @click="plus(index)" v-show="item.plusFlg" 
      :class="{'emfe-opations-margin-right': !item.minusFlg}"></i>
      <i class="emfe-opations-icon emfe-opations-minus" @click="minus(index)" v-show="item.minusFlg"
      :class="{'emfe-opations-margin-left': !item.plusFlg}"></i>
      <i class="emfe-opations-icon emfe-opations-drag"></i>
    </div>
    <div class="emfe-opations-operation">
      <div class="emfe-opations-operation-other" @click="otherPlus">其他选项</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EmfeOpations',
  data() {
    return {
      clickNum: 0,
    };
  },
  props: {
    className: {
      type: String,
      default: '',
    },
    opationsItemData: {
      type: Object,
    },
    opationsData: {
      type: Array,
    },
    ind: {
      type: [String, Number],
    },
  },
  computed: {
    opationsName() {
      return [
        {
          [`${this.className}-opations`]: !!this.className,
        },
      ];
    },
  },
  methods: {
    plus(index) {
      const obj = {
        text: '选项',
        plusFlg: true,
        minusFlg: true,
      };
      this.opationsData.splice(index + 1, 0, obj);
      this.opationsData[index].minusFlg = true;
    },
    minus(index) {
      this.opationsData.splice(index, 1);
      if (this.opationsData.length <= 1) {
        this.opationsData[index - 1].minusFlg = false;
      }
      if (this.clickNum !== 0) {
        this.clickNum = 0;
      }
    },
    otherPlus() {
      const obj = {
        text: '其他',
        plusFlg: false,
        minusFlg: true,
      };
      if (this.clickNum === 0) {
        this.opationsData.splice(this.opationsData.length, 0, obj);
      }
      this.clickNum++;
    },
  },
};
</script>
