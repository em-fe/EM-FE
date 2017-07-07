<template>
  <div id="emfe-color" class="emfe-color">
    <div id="emfe-color-color" class="emfe-color-color" style="background-color: rgb(212, 0, 255);">
      <div id="emfe-inner" class="emfe-color-selector-inner"></div>
    </div>
    <div class="emfe-color-hue">
      <i class="emfe-color-left" style="top: -4px;"></i>
      <i class="emfe-color-right" style="top: -4px;"></i>
    </div>
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
export default {
  name: 'EmfeColor',
};
</script>
