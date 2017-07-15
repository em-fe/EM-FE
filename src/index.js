// 组件
import Grid from './components/emfe-grid';
import EmfeIcon from './components/emfe-icon';
import EmfeTooltip from './components/emfe-tooltip';
import EmfeTransition from './components/emfe-transition';
import EmfeMenu from './components/emfe-menu';
import EmfeCopy from './components/emfe-copy';
import EmfeUpload from './components/emfe-upload';
import EmfeColor from './components/emfe-color';
import EmfeDrag from './components/emfe-drag';
import EmfeInput from './components/emfe-input';
import EmfeButton from './components/emfe-button';
import EmfeDate from './components/emfe-date';
import EmfeTime from './components/emfe-time';
import EmfeDatetime from './components/emfe-datetime';
// 服务
import EmfeMessage from './components/emfe-message';
// 指令
import emfeDocumentclick from './directives/emfe-documentclick';

const emfeCpt = {
  EmfeCol: Grid.EmfeCol,
  EmfeRow: Grid.EmfeRow,
  EmfeIcon,
  EmfeTooltip,
  EmfeTransition,
  EmfeMenu,
  EmfeCopy,
  EmfeUpload,
  EmfeColor,
  EmfeDrag,
  EmfeInput,
  EmfeButton,
  EmfeDate,
  EmfeTime,
  EmfeDatetime,
};

const emfeDir = {
  emfeDocumentclick,
};

//, opts = {}
const install = (Vue) => {
  if (install.installed) return;

  Object.keys(emfeCpt).forEach((key) => {
    Vue.component(key, emfeCpt[key]);
  });

  Object.keys(emfeDir).forEach((key) => {
    Vue.directive(key, emfeDir[key]);
  });

  Vue.prototype.$EmfeMessage = EmfeMessage;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.0',
  install,
};
