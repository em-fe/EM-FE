<template>
  <div class="emfe-color">
    <!-- <div class="" style="background-color: rgb(212, 0, 255);">
      <emfe-drag className="emfe-color" @beforeDrag="beforeDrag" @drag="drag" @afterDrag="afterDrag" limit="true"></emfe-drag>
    </div> -->
    <emfe-drag className="emfe-color" limit="true" :dragEl="colorMove" style="background-color: rgb(212, 0, 255);">
      <div class="emfe-color-inner" ref="color"></div>
    </emfe-drag>
    <!-- <div class="emfe-color-color" style="background-color: rgb(212, 0, 255);">
      <emfe-drag className="emfe-color" @beforeDrag="beforeDrag" @drag="drag" @afterDrag="afterDrag" limit="true"></emfe-drag>
    </div> -->
    <emfe-drag className="emfe-color-hue" :dragEl="hueMove" initialValue="-4">
      <i class="emfe-color-left" style="top: -4px;" ref="hueMoveLeft"></i>
      <i class="emfe-color-right" style="top: -4px;" ref="hueMoveRight"></i>
    </emfe-drag>
    <!-- <div class="emfe-color-hue">
      <i class="emfe-color-left" style="top: -4px;"></i>
      <i class="emfe-color-right" style="top: -4px;"></i>
    </div> -->
    <div class="emfe-color-handle">
      <div class="emfe-color-show-color">
        <div class="emfe-color-new-color" style="background:red;"></div>
        <div class="emfe-color-current-color" style="background:blue;"></div>
      </div>
      <div class="emfe-color-field">
        <p class="emfe-color-title">R</p>
        <input type="tel" maxlength="3" size="3" class="emfe-color-inp">
      </div>
      <div class="emfe-color-field">
        <p class="emfe-color-title">G</p>
        <input type="tel" maxlength="3" size="3" class="emfe-color-inp">
      </div>
      <div class="emfe-color-field">
        <p class="emfe-color-title">B</p>
        <input type="tel" maxlength="3" size="3" class="emfe-color-inp">
      </div>
      <div class="emfe-color-field">
        <p class="emfe-color-title">#</p>
        <input type="tel" maxlength="6" size="6" class="emfe-color-inp">
      </div>
      <button class="emfe-color-sub">OK</button>
    </div>
  </div>
</template>
<script>
import EmfeDrag from '../../emfe-drag';

export default {
  name: 'EmfeColor',
  data() {
    return {
      hueMove: [],
      colorMove: [],
    };
  },
  mounted() {
    this.hueMove.push(this.$refs.hueMoveLeft);
    this.hueMove.push(this.$refs.hueMoveRight);
    this.colorMove.push(this.$refs.color);
    console.log(this.hueMove, 90);
  },
  component: {
    EmfeDrag,
  },
  methods: {
    beforeDrag() {
      console.log('beforeDrag');
    },
    drag() {
      console.log('drag');
    },
    afterDrag() {
      console.log('afterDrag');
    },
  },
};
</script>
