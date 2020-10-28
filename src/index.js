import "./style.scss";
import Vue from "vue";
import axios from "axios";
import _ from "lodash";
import Chartkick from "vue-chartkick";
import Chart from "chart.js";
import AppComponent from "../component/AppComponent.vue";

Vue.use(Chartkick.use(Chart));

//vue에서 전역적으로 사용할 수 있는 메소드 추가
Object.defineProperty(Vue.prototype, "$_", { value: _ });

new Vue({
  render: (h) => h(AppComponent),
}).$mount("#app");

// new Vue({
//   el: "#app",
//   components: {
//     "app-component": AppComponent,
//   },
// });
