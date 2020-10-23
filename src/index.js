import "./style.scss";
import Vue from "vue";
import axios from "axios";
import AppComponent from "../component/AppComponent.vue";

//vue에서 전역적으로 사용할 수 있는 메소드 추가
Vue.prototype.$http = axios;
new Vue({
  render: (h) => h(AppComponent),
}).$mount("#app");

// new Vue({
//   el: "#app",
//   components: {
//     "app-component": AppComponent,
//   },
// });
