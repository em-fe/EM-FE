<template>
  <div class="emfe-upload" :class="uploadName">
    <template v-if="type === 'icon'">
      <emfe-button :disabled="disabled" v-show="!src" theme="default" className="ddd" type="hint">上传图片</emfe-button>
      <input v-show="!src" class="emfe-upload-file" :class="fileName" :disabled="disabled" type="file" @change="change" ref="upload">
      <div v-show="src" :style="{opacity: canShow ? 1 : 0}" class="emfe-upload-icon-wrap">
        <div class="emfe-upload-icon-wrap-box" :class="[`emfe-upload-icon-wrap-box-${align}`]">
          <img class="emfe-upload-icon-wrap-box-img" :class="[`emfe-upload-img-${align}`]" :src="src" ref="img">
        </div>
        <i class="emfe-upload-icon-wrap-close" @click="closeFn"></i>
      </div>
    </template>
    <template v-if="type === 'plus'">
      <button v-show="!src" class="emfe-upload-btn" :class="btnName">+</button>
      <input v-show="!src" class="emfe-upload-file" :class="fileName" :disabled="disabled" type="file" @change="change" ref="uploadPlus">
      <div v-show="src" class="emfe-upload-plus-box" :class="[`emfe-upload-plus-box-${align}`]" :style="{opacity: canShow ? 1 : 0}" @click="closePlusFn">
        <img :class="[`emfe-upload-img-${align}`]" v-show="src" :src="src" ref="img">
      </div>
    </template>
    <emfe-modal :show="interceptModal" title="截取器" @close="formClose" @cancel="formCancel" @ok="formOk" okText="保存" className="form">
      <div slot="modal-main" class="emfe-upload-intercept-wrap">
        <img :src="img" class="emfe-upload-intercept-img" :style="{ height: `${interceptCanvasHeight}px`, 'margin-top': `-${interceptCanvasHeight / 2}px`, 'margin-left': `-${interceptCanvasWidth / 2}px`}" ref="previewImg">
        <div class="emfe-upload-intercept" :style="{width: `${interceptCanvasWidth}px`, height: `${interceptCanvasHeight}px`, 'margin-top': `-${interceptCanvasHeight / 2}px`, 'margin-left': `-${interceptCanvasWidth / 2}px`}"></div>
      </div>
    </emfe-modal>
  </div>
</template>
<script>
import _ from '../../../tools/lodash';
import EmfeMessage from '../../emfe-message/index';
import ajax from './ajax';

let canUpload = true;

export default {
  name: 'upload',
  data() {
    return {
      src: '',
      canShow: false,
      fileList: [],
      tempIndex: 1,
      img: '',
      align: '',
      interceptModal: false,
      interceptWidth: 440,
      interceptCanvasWidth: 440,
      interceptCanvasHeight: 440,
      canvas: null,
      canvasContext: null,
    };
  },
  props: {
    type: {
      validator(value) {
        return _.has(value, ['plus', 'icon']);
      },
      default: 'plus',
    },
    disabled: Boolean,
    className: {
      type: String,
      default: '',
    },
    action: {
      type: String,
      required: true,
    },
    headers: {
      type: Object,
      default() {
        return {};
      },
    },
    handleDatas: Object,
    data: {
      type: Object,
    },
    name: {
      type: String,
      default: 'file',
    },
    withCredentials: {
      type: Boolean,
      default: false,
    },
    format: {
      type: Array,
      default() {
        return [];
      },
    },
    maxSize: {
      type: Number,
    },
    url: String,
    success: {
      type: Function,
      default: () => {},
    },
    exceededSize: {
      type: Function,
      default: () => {},
    },
    formatError: {
      type: Function,
      default: () => {},
    },
    beforeUpload: {
      type: Function,
      default: () => {},
    },
    error: {
      type: Function,
      default: () => {},
    },
    close: {
      type: Function,
      default: () => {},
    },
    intercept: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    uploadName() {
      return [
        `emfe-upload-${this.type}`,
        {
          [`${this.className}-upload`]: !!this.className,
        },
        {
          [`${this.className}-upload-${this.type}`]: !!this.className,
        },
        {
          'emfe-upload-disabled': this.disabled,
        },
      ];
    },
    btnName() {
      return [
        [`emfe-upload-${this.type}-btn`],
        {
          [`${this.className}-upload-${this.type}-btn`]: !!this.className,
        },
      ];
    },
    fileName() {
      return [
        [`emfe-upload-${this.type}-file`],
        {
          [`${this.className}-upload-${this.type}-file`]: !!this.className,
        },
        {
          'emfe-upload-file-disabled': this.disabled,
        },
      ];
    },
  },
  mounted() {
    if (this.url) {
      const imgObject = new Image();
      imgObject.src = this.url;
      imgObject.onload = () => {
        this.src = this.url;
        setTimeout(this.setAlign.bind(this), 0);
      };
    }
    // 截取器
    if (this.intercept.length > 0) {
      this.interceptCanvasHeight = this.intercept[1] - 0;
      this.interceptCanvasWidth = this.intercept[0] - 0;
    }
  },
  methods: {
    formBtn() {
      this.interceptModal = true;
    },
    formClose() {
      this.interceptModal = false;
    },
    formCancel() {
      this.interceptModal = false;
    },
    formOk() {
      this.getImageUrl();
      console.log(this.clipData, 'this.clipData');
      this.interceptModal = false;
    },
    initCanvas() {
      const img = new Image();
      img.src = this.img;
      img.height = this.interceptCanvasHeight;
      img.onload = () => {
        this.canvas = document.createElement('canvas');
        this.canvasContext = this.canvas.getContext('2d');
        this.canvas.width = this.interceptCanvasWidth;
        this.canvas.height = this.interceptCanvasHeight;
        this.previewImg = this.$refs.previewImg;
      };
    },
    getImageUrl() {
      const { clientWidth, clientHeight } = this.previewImg;
      this.canvasContext.drawImage(this.previewImg, 0, 0, clientWidth, clientHeight);
      this.clipData = this.canvas.toDataURL('image/jpeg');
    },
    setAlign() {
      const { clientWidth, clientHeight } = this.$refs.img;
      if (clientWidth !== 0 && clientHeight !== 0) {
        if (clientWidth > clientHeight) {
          this.align = 'horizontal';
        } else if (clientWidth < clientHeight) {
          this.align = 'vertical';
        } else {
          this.align = 'normal';
        }
      }
      this.canShow = true;
    },
    change(e) {
      const files = e.target.files;

      if (!files) {
        return;
      }

      const postFiles = Array.prototype.slice.call(files);

      if (this.intercept.length === 0) {
        postFiles.forEach((file) => {
          this.postHandle(file);
        });
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(postFiles[0]);
        reader.onload = (readerEvent) => {
          this.img = readerEvent.target.result;
          this.interceptModal = true;
          this.initCanvas();
        };
      }
    },
    postHandle(file) {
      // check format
      if (this.format.length) {
        const fileFormat = file.name.split('.').pop().toLocaleLowerCase();
        const checked = this.format.some(item => item.toLocaleLowerCase() === fileFormat);
        if (!checked) {
          this.formatError(file, this.fileList, EmfeMessage);
          this.$emit('formatError', file, this.fileList, EmfeMessage);
          return false;
        }
      }
      // check maxSize
      if (this.maxSize) {
        if (file.size > this.maxSize * 1024) {
          this.exceededSize(file, this.fileList, EmfeMessage);
          this.$emit('exceededSize', file, this.fileList, EmfeMessage);
          return false;
        }
      }

      if (canUpload) {
        this.handleStart(file);
        this.beforeUpload(file, EmfeMessage);
        this.$emit('beforeUpload', file, EmfeMessage);
        this.canUpload = false;

        ajax({
          headers: this.headers,
          withCredentials: this.withCredentials,
          file,
          data: this.data,
          filename: this.name,
          action: this.action,
          onSuccess: (res) => {
            canUpload = true;
            if (!res.code) {
              this.handleSuccess(res, file);
            } else {
              this.handleError('上传失败', res, file);
            }
          },
          onError: (err, response) => {
            canUpload = true;
            this.handleError(err, response, file);
          },
        });
      }

      return false;
    },
    handleStart(file) {
      file.uid = Date.now() + this.tempIndex++;
      const fileData = {
        status: 'uploading',
        name: file.name,
        size: file.size,
        percentage: 0,
        uid: file.uid,
        showProgress: true,
      };
      this.fileList.push(fileData);
    },
    handleSuccess(res, file) {
      const fileData = this.getFile(file);

      if (fileData) {
        fileData.status = 'finished';
        fileData.response = res;
        this.loadImg(res.url, res, fileData);
      }
    },
    handleError(err, response, file) {
      const fileData = this.getFile(file);
      const fileList = this.fileList;

      fileData.status = 'fail';

      fileList.splice(fileList.indexOf(fileData), 1);
      this.error(err, response, file, EmfeMessage);
      this.$emit('error', err, response, file, EmfeMessage);
    },
    getFile(file) {
      const fileList = this.fileList;
      let target;
      fileList.every((item) => {
        target = file.uid === item.uid ? item : null;
        return !target;
      });
      return target;
    },
    loadImg(src, res, fileData) {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        this.src = src;
        setTimeout(this.setAlign.bind(this), 0);
        this.success(res, fileData, this.fileList, EmfeMessage);
        this.$emit('success', res, fileData, this.fileList, EmfeMessage);
      };
    },
    closeFn() {
      this.$refs.upload.value = '';
      this.closeCommon();
    },
    closePlusFn() {
      this.$refs.uploadPlus.value = '';
      this.closeCommon();
    },
    closeCommon() {
      this.src = '';
      this.canShow = false;
      this.close(EmfeMessage);
      this.$emit('close', EmfeMessage);
    },
  },
};
</script>
