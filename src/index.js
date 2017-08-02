// 组件
import EmfeBar from './components/emfe-bar/index';
import Grid from './components/emfe-grid/index';
import EmfeIcon from './components/emfe-icon/index';
import EmfeTooltip from './components/emfe-tooltip/index';
import EmfeTransition from './components/emfe-transition/index';
import EmfeMenu from './components/emfe-menu/index';
import EmfeHeader from './components/emfe-header/index';
import EmfeFooter from './components/emfe-footer/index';
import EmfeCopy from './components/emfe-copy/index';
import EmfeUpload from './components/emfe-upload/index';
import EmfeDrag from './components/emfe-drag/index';
import EmfeColor from './components/emfe-color/index';
import EmfeInput from './components/emfe-input/index';
import EmfeTel from './components/emfe-tel/index';
import EmfeNumber from './components/emfe-number/index';
import EmfeDate from './components/emfe-date/index';
import EmfeTime from './components/emfe-time/index';
import EmfeDatetime from './components/emfe-datetime/index';
import EmfeLink from './components/emfe-link/index';
import EmfeSwitch from './components/emfe-switch/index';
import EmfeTitle from './components/emfe-title/index';
import Radio from './components/emfe-radio/index';
import Button from './components/emfe-button/index';
import EmfePagination from './components/emfe-pagination/index';
import EmfeSelect from './components/emfe-select/index';
import EmfeModal from './components/emfe-modal/index';
import EmfeCheckout from './components/emfe-checkout/index';
import EmfeDrop from './components/emfe-drop/index';
import Table from './components/emfe-table/index';
import EmfeTextarea from './components/emfe-textarea/index';
import EmfeDatapanel from './components/emfe-datapanel/index';
import Tag from './components/emfe-tag/index';
import EmfePanel from './components/emfe-panel/index';
import EmfeSlide from './components/emfe-slide/index';
import EmfeHottip from './components/emfe-hottip/index';
import EmfeCrumb from './components/emfe-crumb/index';
import EmfeEdit from './components/emfe-edit/index';
// 服务
import EmfeMessage from './components/emfe-message/index';
// 指令
import emfeDocumentclick from './directives/emfe-documentclick';
import emfeDocumentfocus from './directives/emfe-documentfocus';

const emfeCpt = {
  EmfeCol: Grid.EmfeCol,
  EmfeRow: Grid.EmfeRow,
  EmfeBar,
  EmfeIcon,
  EmfeTooltip,
  EmfeTransition,
  EmfeModal,
  EmfeMenu,
  EmfeHeader,
  EmfeFooter,
  EmfeCopy,
  EmfeUpload,
  EmfeDrag,
  EmfeColor,
  EmfeInput,
  EmfeNumber,
  EmfeTel,
  EmfeButton: Button.EmfeButton,
  EmfeButtonGroup: Button.EmfeButtonGroup,
  EmfeSwitch,
  EmfeTitle,
  EmfeRadio: Radio.EmfeRadio,
  EmfeRadioGroup: Radio.EmfeRadioGroup,
  EmfeTable: Table.EmfeTable,
  EmfeTableHead: Table.EmfeTableHead,
  EmfeTableBody: Table.EmfeTableBody,
  EmfeDate,
  EmfeTime,
  EmfeDatetime,
  EmfePagination,
  EmfeSelect,
  EmfeCheckout,
  EmfeDrop,
  EmfeLink,
  EmfeTextarea,
  EmfeDatapanel,
  EmfeTag: Tag.EmfeTag,
  EmfeTagParent: Tag.EmfeTagParent,
  EmfePanel,
  EmfeSlide,
  EmfeCrumb,
  EmfeHottip,
  EmfeEdit,
};

const emfeDir = {
  emfeDocumentclick,
  emfeDocumentfocus,
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
