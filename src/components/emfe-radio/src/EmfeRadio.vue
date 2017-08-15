<template>
  <label :class="[{'emfe-radio-checked': status},labelClass]" class="emfe-radio clearfix">
    <i class="emfe-radio-img" :class="{'emfe-radio-img-checked': status, 'emfe-radio-img-disabled': disabled}"></i>
    <input :class="inputClass" type="radio" @change="change" :name="name" :disabled="disabled" class="emfe-radio-input">
    <span :class='textClass' class="emfe-radio-text"><slot></slot></span>
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
