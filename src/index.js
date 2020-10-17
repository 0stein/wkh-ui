import "./style.scss";
import Vue from "vue";
import AppComponent from "../component/AppComponent.vue";

new Vue({
  render: (h) => h(AppComponent),
}).$mount("#app");
