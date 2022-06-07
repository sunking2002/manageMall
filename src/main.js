import Vue from 'vue'
import App from './App.vue'
import router from '../router'
import { Container, Aside,Header,Main,Menu,Submenu,MenuItem,MenuItemGroup,Button, Dropdown,DropdownMenu,DropdownItem,Row,Card,Col, TableColumn, Table, Breadcrumb, BreadcrumbItem, Tag, Form, FormItem, Input, Select, Switch, DatePicker, Dialog,Option, Pagination, Autocomplete} from 'element-ui';
import './assets/less/index.less'
import store from './store'
import http from 'axios'
import '../api/mock.js'


Vue.component('el-container' ,Container);
Vue.component('el-aside', Aside);
Vue.component('el-header', Header);
Vue.component('el-main',Main);
Vue.component('el-menu',Menu );
Vue.component('el-submenu',Submenu);
Vue.component('el-menu-item-group',MenuItemGroup);
Vue.component('el-menu-item',MenuItem);
Vue.component('el-button',Button)
Vue.component('el-dropdown-item',DropdownItem)
Vue.component('el-dropdown-menu',DropdownMenu)
Vue.component('el-dropdown',Dropdown)
Vue.component('el-row',Row)
Vue.component('el-card',Card)
Vue.component('el-col',Col)
Vue.component('el-table-column',TableColumn)
Vue.component('el-table',Table)
Vue.component('el-breadcrumb-item',BreadcrumbItem)
Vue.component('el-breadcrumb',Breadcrumb)
Vue.component('el-tag',Tag)
Vue.component('el-form',Form)
Vue.component('el-form-item',FormItem)
Vue.component('el-input',Input)
Vue.component('el-select',Select)
Vue.component('el-option',Option)
Vue.component('el-switch',Switch)
Vue.component('el-date-picker',DatePicker)
Vue.component('el-dialog',Dialog)
Vue.component('el-pagination',Pagination)
Vue.component('el-autocomplete',Autocomplete)




Vue.prototype.$http = http







Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')

