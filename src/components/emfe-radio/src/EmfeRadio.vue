<template>
  <!-- 去掉 label 解决店铺显示隐藏之后无效的问题 -->
  <div :class="[{'emfe-radio-checked': status},labelClass]" class="emfe-radio clearfix" @click="changeFn">
    <i class="emfe-radio-img" :style="baseStyle" :class="{'emfe-radio-img-checked': status, 'emfe-radio-img-disabled': disabled}"></i>
    <input :class="inputClass" type="radio" :name="name" :disabled="disabled" class="emfe-radio-input" @change="changeFn">
    <span :class='textClass' class="emfe-radio-text"><slot></slot></span>
    <emfe-tooltip className="emfe-radio" theme="light" :placement="placement" v-if="tip">
      <emfe-icon type="tishi" slot="render" className="emfe-radio-tip"></emfe-icon>
      <div slot="tip" v-html="tip"></div>
    </emfe-tooltip>
    <div class="emfe-radio-slide" v-if="slideShow">
      <transition name="fade">
        <div class="emfe-radio-slide-wrap" v-show="status">
          <slot name="slide"></slot>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
  import backgUrl from './colors';

  export default {
    name: 'EmfeRadio',
    data() {
      return {
        status: this.statu,
        backgUrl,
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
      tip: {
        type: String,
        default: '',
      },
      placement: {
        type: String,
        default: 'bottom',
      },
      styleIndex: {
        type: String,
        default: 'bule',
      },
    },
    computed: {
      labelClass() {
        // return this.className ? `${this.className}-radio` : '';
        return [
          {
            [`${this.className}-radio`]: !!this.className,
            'emfe-radio-inline': this.inline,
            'emfe-radio-disabled': this.disabled,
          },
        ];
      },
      inputClass() {
        return this.className ? `${this.className}-radio-input` : '';
      },
      textClass() {
        return [
          {
            [`${this.className}-radio-input-text`]: !!this.className,
            'emfe-radio-text-notip': !this.tip,
            [`${this.className}-radio-input-text-checked`]: !!this.className && this.status,
          },
        ];
      },
      baseStyle() {
        const style = {};
        if (this.status) {
          style.backgroundImage = `url(${this.backgUrl[this.styleIndex]})`;
        } else {
          style.backgroundImage = 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAWFJREFUOBGdVM1OhDAQpoVE5UzYo0B4AuNJ7xx9iH0CPbgPoW/EfT2tPgF/HpdwopHVBFjn25SVBYmVScrQ6XzfNNN+ZdqEJUmyoKWABjxsSyP0PA9+ZGwYybLspm3bJ4pfm6b5aRjGBXLqut5VVXXOGHttmmbl+/56iD3O4zi+p52Isiyb/YRhLYqiPeUuj8D+DxHc0aDC9QTFTxg5yEXhPodGFW5RRYWko5NkAq0AGcdH1/Vn27Zb8pgqGXItyzJlPzVGW8SpvLuue6bEMEhK0/SLQpfYUYDTGawrTyU2AJHdHbEyupcosYtDj3rx2b8gyukEdnMZJHYLohA3di6RxIZcamcjhGj/SwYMSeYNHIcecc5XRVFUpCFlLuTmec7JP56A6Lo/zJDI8oSkm0CIdME+/hItFRRDnY2eEegOkiFNXf32jFDRDVrhOM5LtwH4EVG3KKWDh82WsZz85MP2DRyubnWoFdQHAAAAAElFTkSuQmCC)';
        }
        return style;
      },
    },
    methods: {
      changeFn() {
        if (!this.disabled) {
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
        }
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
