<template>
  <div class="emfe-edit">
    <div class="emfe-edit-wrap" v-for="(one, index) in oneList" :key="index">
      <div class="emfe-edit-left" @click="openTwoList(index)">
        <div class="emfe-edit-left-one" :class="{'emfe-edit-left-one-open': one.openFlg}" ref="inputFocus">
          <emfe-input :value="one.name" className='emfe-edit-left-one'></emfe-input>
        </div>
        <div class="emfe-edit-left-two" v-for="(two, ind) in one.twoList" v-show="one.openFlg">
          <div class="emfe-edit-left-two-text">
            <emfe-input :value="two.name" className='emfe-edit-left-two'></emfe-input>
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
const prefixCls = 'emfe-edit';
export default {
  name: 'EmfeEdit',
  data() {
    return {
      oneReduceFlg: true,
      twoReduceFlg: true,
      focusFlg: false,
      oneList: [
        {
          name: '选项1',
          openFlg: false,
          twoList: [
            {
              name: '二级选项1',
            },
            {
              name: '二级选项2',
            },
          ],
        },
        {
          name: '选1项2',
          openFlg: false,
          twoList: [
            {
              name: '二级a选项',
            },
            {
              name: '二s级选项',
            },
          ],
        },
      ],
    };
  },
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    textereaName() {
      return [
        {
          [`${prefixCls}-${this.className}`]: !!this.className,
        },
      ];
    },
  },
  methods: {
    openTwoList(index) {
      this.oneList.forEach((ele) => {
        ele.openFlg = false;
      });
      this.oneList[index].openFlg = true;
    },
    addOneList(index) {
      const addObj = {
        name: '一级选项',
        openFlg: true,
        twoList: [
          {
            name: '二级选项',
          },
          {
            name: '二级选项',
          },
        ],
      };
      this.oneList.splice(index + 1, 0, addObj);
      this.openTwoList(index + 1);
      this.oneReduceFlg = true;
      setTimeout(() => {
        this.$emit('addLsit', this.oneList, index);
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
      this.oneList[index].twoList.splice(ind + 1, 0, { name: '二级选项' });
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
