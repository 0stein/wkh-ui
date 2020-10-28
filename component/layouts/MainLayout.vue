<template>
  <div class="container">
      <div class="row">
          <card-layout>
              <template v-slot:title>운동 기록하기</template>
              <template v-slot:content>
                <log-form @logs:update="l => logs.push(l)"></log-form>
              </template>
          </card-layout>
          <card-layout>
              <template v-slot:title>오늘의 운동</template>
              <template v-slot:content>
                <log-list @logs:remove="removeLog" :logs="logs"></log-list>
              </template>
          </card-layout>
      </div>
      <div class="row">
          <card-layout>
              hello vue
          </card-layout>
          <card-layout>
              hello vue
          </card-layout>
      </div>
  </div>
</template>

<script>
import CardLayout from './CardLayout'
import LogForm from '../logging_form_component/LogForm'
import LogList from '../list_view_component/LogList'

export default {
    data: function() {
        return {
            logs: []
        }
    },
    components: {
        CardLayout,
        LogForm,
        LogList
    },
    methods: {
        removeLog: function(log){
            const index = this.logs.indexOf(log)
            this.logs.splice(index, 1)
        }
    }
}
</script>