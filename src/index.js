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
import EmfeMessage from './components/emfe-message';

const emfe = {
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
};

//, opts = {}
const install = (Vue) => {
  if (install.installed) return;

  Object.keys(emfe).forEach((key) => {
    Vue.component(key, emfe[key]);
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
