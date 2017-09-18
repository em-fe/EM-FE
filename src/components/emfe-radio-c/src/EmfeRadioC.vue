<template>
  <label :class="[{'emfe-radio-c-checked': status},labelClass]" class="emfe-radio-c clearfix">
    <i class="emfe-radio-c-img" :class="{'emfe-radio-c-img-checked': status, 'emfe-radio-c-img-disabled': disabled}"></i>
    <input :class="inputClass" type="radio" @change="changeFn" :name="name" :disabled="disabled" class="emfe-radio-c-input">
    <span :class='textClass' class="emfe-radio-c-text"><slot></slot></span>
    <div class="emfe-radio-c-slide" v-if="slideShow">
      <transition name="fade">
        <div class="emfe-radio-c-slide-wrap" v-show="status">
          <slot name="slide"></slot>
        </div>
      </transition>
    </div>
  </label>
</template>
<script>
  export default {
    name: 'EmfeRadioC',
    data() {
      return {
        status: this.statu,
      };
    },
    props: {
      slideShow: {
        type: Boolean,
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
      className: {
        type: String,
        default: '',
      },
      inline: String,
      change: Function,
    },
    computed: {
      labelClass() {
        // return this.className ? `${this.className}-radio` : '';
        return [
          {
            [`${this.className}-radio`]: !!this.className,
            'emfe-radio-inline': this.inline,
          },
        ];
      },
      inputClass() {
        return this.className ? `${this.className}-radio-input` : '';
      },
      textClass() {
        return this.className ? `${this.className}-radio-input-text` : '';
      },
    },
    methods: {
      changeFn() {
        let index = 0;
        this.$parent.$children.forEach((element) => {
          element.status = this.index === element.index;
          if (element.status) {
            index = element.index;
          }
        });
        if (this.change) {
          this.change(index);
        }
        this.$emit('change', index);
      },
    },
    watch: {
      statu(val, oldVal) {
        if (val !== oldVal) {
          this.status = val;
        }
      },
    },
  };
</script>
