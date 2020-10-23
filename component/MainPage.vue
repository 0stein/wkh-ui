<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 card">
                <WorkOutLog v-on:eventMakeList="makeList" />
            </div>
            <div class="col-md-6 card">
                <WorkOutLogList :logs="worklogs" />
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 card">
                <WorkLogSubmit :workDataProp="workDataList" />
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
                workDataList: [],
                workdata: {
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
                }
            }
        },
        components: {
            WorkOutLogList,
            WorkOutLog,
            WorkLogSubmit
        },
        methods: {
            makeList: function (workdata) {
                this.workdata.workout = workdata.exercise
                this.workdata.weight = workdata.weight
                this.workdata.reps = workdata.reps
                this.workdata.set = workdata.set

                
                this.workDataList.push(this.workdata)

                this.worklogs.push(
                    `${workdata.exercise} ${workdata.weight}kg ${workdata.reps}reps ${workdata.set}sets`)
            }
        }
    }
</script>

<style>
</style>