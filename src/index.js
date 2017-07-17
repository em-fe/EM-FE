// 组件
const emfe = {
import Grid from './components/emfe-grid/index';
import EmfeIcon from './components/emfe-icon/index';
import EmfeTooltip from './components/emfe-tooltip/index';
import EmfeTransition from './components/emfe-transition/index';
import EmfeMenu from './components/emfe-menu/index';
import EmfeCopy from './components/emfe-copy/index';
import EmfeUpload from './components/emfe-upload/index';
import EmfeDrag from './components/emfe-drag/index';
import EmfeColor from './components/emfe-color/index';
import EmfeInput from './components/emfe-input/index';
import EmfeButton from './components/emfe-button/index';
import EmfeDate from './components/emfe-date/index';
import EmfeTime from './components/emfe-time/index';
import EmfeDatetime from './components/emfe-datetime/index';
// 服务
import EmfeMessage from './components/emfe-message/index';
// 指令
import emfeDocumentclick from './directives/emfe-documentclick';
import Table from './components/emfe-table/index';

const emfeCpt = {
  EmfeCol: Grid.EmfeCol,
  EmfeRow: Grid.EmfeRow,
  EmfeIcon,
  EmfeTooltip,
  EmfeTransition,
  EmfeMenu,
  EmfeCopy,
  EmfeUpload,
  EmfeDrag,
  EmfeColor,
  EmfeInput,
  EmfeButton,
  EmfeTable: Table.EmfeTable,
  EmfeTableHead: Table.EmfeTableHead,
  EmfeTableBody: Table.EmfeTableBody,
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
