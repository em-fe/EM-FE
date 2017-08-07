<template>
  <div class="emfe-steps" :class="stepsName">
    <div class="emfe-steps-line">
      <div :class="{'emfe-steps-item-first': dataIndex === 0, 'emfe-steps-item-last': dataIndex === datas.length - 1, 'emfe-steps-item': dataIndex !== datas.length - 1 && dataIndex !== 0}" v-for="(data, dataIndex) in datas">
        <template v-if="dataIndex === 0">
          <template v-if="dataIndex === active">
            <emfe-icon className="emfe-steps-item-first-on" :type="data.icon"></emfe-icon>
          </template>
          <template v-else>
            <emfe-icon className="emfe-steps-item-first" :type="data.icon"></emfe-icon>
          </template>
        </template>
        <template v-else-if="dataIndex === datas.length - 1">
          <template v-if="dataIndex === active">
            <emfe-icon className="emfe-steps-item-last-on" :type="data.icon"></emfe-icon>
          </template>
          <template v-else>
            <emfe-icon className="emfe-steps-item-last" :type="data.icon"></emfe-icon>
          </template>
        </template>
        <template v-else>
          <template v-if="dataIndex === active">
            <emfe-icon className="emfe-steps-item-on" :type="data.icon"></emfe-icon>
          </template>
          <template v-else>
            <emfe-icon className="emfe-steps-item" :type="data.icon"></emfe-icon>
          </template>
        </template>
        <span class="emfe-steps-item-text" :class="{'emfe-steps-item-on-text': active === dataIndex}">{{ data.title }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EmfeSteps',
  props: {
    datas: {
      type: Array,
      required: true,
    },
    active: {
      type: Number,
      required: true,
    },
    className: String,
  },
  computed: {
    stepsName() {
      return [
        {
          [`${this.className}-steps`]: !!this.className,
        },
      ];
    },
  },
};
</script>
