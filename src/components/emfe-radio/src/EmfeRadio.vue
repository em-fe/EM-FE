<template>
  <label :class="{'emfe-radio-checked': status}" class="emfe-radio clearfix">
    <i class="emfe-radio-img" :class="{'emfe-radio-img-checked': status, 'emfe-radio-img-disabled': disabled}"></i>
    <input type="radio" @change="change" :name="name" :disabled="disabled" class="emfe-radio-input">
    <span class="emfe-radio-text"><slot></slot></span>
    <div class="emfe-radio-slide" v-if="slideShow">
      <transition name="fade">
        <div class="emfe-radio-slide-wrap" v-show="status">
          <slot name="slide"></slot>
        </div>
      </transition>
    </div>
  </label>
</template>
<script>
  export default {
    name: 'EmfeRadio',
    data() {
      return {
        status: this.statu,
      };
    },
    props: {
      slideShow: {
        tyep: Boolean,
        default: false,
      },
      index: {
        tyep: String,
        required: true,
      },
      name: {
        type: String,
      },
      disabled: {
        type: Boolean,
      },
      statu: {
        tyep: Boolean,
        default: false,
      },
      inline: String,
    },
    computed: {

    },
    methods: {
      change() {
        let index = 0;
        this.$parent.$children.forEach((element) => {
          element.status = this.index === element.index;
          if (element.status) {
            index = element.index;
          }
        });
        this.$emit('change', index);
      },
      slideChange() {
        let i = 0;
        this.$parent.$children.forEach((element) => {
          element.status = this.i === element.i;
          if (element.status) {
            i = element.i;
          }
        });
        this.$emit('slideChange', i);
      },
    },
  };
</script>
