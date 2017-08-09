<template>
  <div class="emfe-edit" :class="editBox">
    <div class="emfe-edit-wrap" v-for="(one, index) in oneList" :key="index">
      <div class="emfe-edit-left" @click="openTwoList(index)">
        <div class="emfe-edit-left-one" :class="{'emfe-edit-left-one-open': one.openFlg}" ref="inputFocus">
          <emfe-input v-model="one.name" className='emfe-edit-left-one'></emfe-input>
        </div>
        <div class="emfe-edit-left-two" v-for="(two, ind) in one.twoList" v-show="one.openFlg">
          <div class="emfe-edit-left-two-text">
            <emfe-input v-model="two.name" className='emfe-edit-left-two'></emfe-input>
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
      this.oneList.forEach((ele) => {
        console.log(1, ele);
        ele.openFlg = false;
      });
      this.oneList[index].openFlg = true;
      console.log(index, this.oneList);
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
      this.oneList[index].twoList.splice(ind + 1, 0, O.copy(this.addTwoObj));
      this.twoReduceFlg = true;
    },
    reduceTwoList(index, ind) {
      if (this.oneList[index].twoList.length >= 2) {
        this.oneList[index].twoList.splice(ind, 1);
      }
      if (this.oneList[index].twoList.length <= 1) {
        this.twoReduceFlg = false;
      }
    },
  },
};
</script>
