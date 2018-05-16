<template>
  <div class="emfe-edit" :class="editBox">
    <div class="emfe-edit-wrap" v-for="(one, index) in oneList" :key="index">
      <div class="emfe-edit-left" @click="openTwoList(index)">
        <div class="emfe-edit-left-one" :class="{'emfe-edit-left-one-open': openFlg === index}" ref="inputFocus">
          <emfe-input :placeholder="onePlaceholder" v-model="one.name" className='emfe-edit-left-one'></emfe-input>
        </div>
        <div class="emfe-edit-left-two" v-for="(two, ind) in one.sub_choices" v-show="openFlg === index">
          <div class="emfe-edit-left-two-text">
            <emfe-input :placeholder="twoPlaceholder" v-model="two.name" className='emfe-edit-left-two'></emfe-input>
          </div>
          <div class="emfe-edit-left-two-btn" @click="addTwoList(index, ind)">+</div>
          <div v-show="twoReduceFlg" class="emfe-edit-left-two-btn" @click="reduceTwoList(index, ind)">-</div>
        </div>
      </div>
      <div class="emfe-edit-right">
        <div class="emfe-edit-right-btn" @click="addOneList(index)">+</div>
        <div v-show="oneReduceFlg" class="emfe-edit-right-btn" @click="reduceOneList(index)" style="line-height:11px;">-</div>
      </div>
    </div>
  </div>
</template>
<script>
import O from '../../../tools/o';

export default {
  name: 'EmfeEdit',
  data() {
    return {
      oneReduceFlg: true,
      twoReduceFlg: true,
      openFlg: -1,
    };
  },
  props: {
    className: {
      type: String,
      default: '',
    },
    oneList: {
      type: Array,
    },
    onePlaceholder: {
      type: String,
      default: '选项',
    },
    twoPlaceholder: {
      type: String,
      default: '二级选项',
    },
    addOneObj: {
      type: Object,
    },
    addTwoObj: {
      type: Object,
    },
  },
  computed: {
    editBox() {
      return [
        {
          [`${this.className}-edit`]: !!this.className,
        },
      ];
    },
  },
  methods: {
    openTwoList(index) {
      this.openFlg = index;
    },
    addOneList(index) {
      const newAddObj = O.copy(this.addOneObj);
      this.oneList.splice(index + 1, 0, newAddObj);
      this.openTwoList(index + 1);
      this.oneReduceFlg = true;
      setTimeout(() => {
        this.$refs.inputFocus[index + 1].querySelector('input').focus();
      }, 0);
    },
    reduceOneList(index) {
      if (this.oneList.length >= 2) {
        this.oneList.splice(index, 1);
      }
      if (this.oneList.length <= 1) {
        this.oneReduceFlg = false;
      }
    },
    addTwoList(index, ind) {
      this.oneList[index].sub_choices.splice(ind + 1, 0, O.copy(this.addTwoObj));
      this.twoReduceFlg = true;
    },
    reduceTwoList(index, ind) {
      if (this.oneList[index].sub_choices.length >= 2) {
        this.oneList[index].sub_choices.splice(ind, 1);
      }
      if (this.oneList[index].sub_choices.length <= 1) {
        this.twoReduceFlg = false;
      }
    },
  },
};
</script>
