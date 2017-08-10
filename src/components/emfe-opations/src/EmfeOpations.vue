<template>
  <div class="emfe-opations" :class="opationsName">
    <div class="emfe-opations-box" ref="dropBox">
      <div class="emfe-opations-main" v-for="(item, index) in opationsData" :key="index" ref="dragBox" :index="index">
        <i class="emfe-opations-icon emfe-opations-radio"></i>
        <emfe-input :placeholder="item.text" className="emfe-opations"></emfe-input>
        <i class="emfe-opations-icon emfe-opations-plus" @click="plus(index)" v-show="item.plusFlg" 
        :class="{'emfe-opations-margin-right': !item.minusFlg}"></i>
        <i class="emfe-opations-icon emfe-opations-minus" @click="minus(index)" v-show="item.minusFlg"
        :class="{'emfe-opations-margin-left': !item.plusFlg}"></i>
        <i class="emfe-opations-icon emfe-opations-drag"></i>
      </div>
    </div>
    <div class="emfe-opations-operation">
      <div class="emfe-opations-operation-other" @click="otherPlus" v-show="clickFlg">其他选项</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EmfeOpations',
  data() {
    return {
      clickFlg: true,
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
      if (!this.clickFlg) {
        if (index === this.opationsData.length - 1) {
          this.opationsData.splice(index, 1);
          this.clickFlg = true;
        } else {
          this.opationsData.splice(index, 1);
          if (this.opationsData.length <= 2) {
            if (index === 0) {
              this.opationsData[index].minusFlg = false;
            } else {
              this.opationsData[index - 1].minusFlg = false;
            }
          }
        }
      } else {
        this.opationsData.splice(index, 1);
        if (this.opationsData.length <= 1) {
          if (index === 0) {
            this.opationsData[index].minusFlg = false;
          } else {
            this.opationsData[index - 1].minusFlg = false;
          }
        }
      }
    },
    otherPlus() {
      const obj = {
        text: '其他',
        plusFlg: false,
        minusFlg: true,
      };
      if (this.clickFlg) {
        this.opationsData.splice(this.opationsData.length, 0, obj);
      }
      this.clickFlg = false;
    },
  },
};
</script>
