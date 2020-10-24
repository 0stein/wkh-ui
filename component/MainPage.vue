<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 card">
                <WorkOutLog @eventMakeList="makeList" />
            </div>
            <div class="col-md-6 card">
                <WorkOutLogList :logs="worklogs" />
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 card">
                <WorkLogSubmit @reset="resetForm" :workDataProp="workDataList" />
            </div>
        </div>
    </div>

</template>

<script>
    import WorkOutLogList from './WorkOutLogList.vue'
    import WorkOutLog from './WorkOutLog.vue'
    import WorkLogSubmit from './WorkLogSubmit.vue'

    export default {
        data: function () {
            return {
                worklogs: [],
                workDataList: []
            }
        },
        components: {
            WorkOutLogList,
            WorkOutLog,
            WorkLogSubmit
        },
        methods: {
            makeList: function (workdata) {
                let workdata_c = new Object({
                    workoutId: null,
                    user: {
                        userId: null,
                        alias: ""
                    },
                    date: null,
                    workout: "",
                    weight: null,
                    reps: null,
                    set: null,
                    volume: null
                })
                workdata_c.workout = workdata.exercise
                workdata_c.weight = workdata.weight
                workdata_c.reps = workdata.reps
                workdata_c.set = workdata.set

                this.workDataList.push(workdata_c)

                this.worklogs.push(
                    `${workdata.exercise} ${workdata.weight}kg ${workdata.reps}reps ${workdata.set}sets`)
            },
            resetForm: function(){
                
                Object.assign(this.$data, this.$options.data());
            }
        }
    }
</script>

<style>
</style>