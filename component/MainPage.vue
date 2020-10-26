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
                <WorkLogSubmit @update:alias="a => alias = a" :workDataProp="workDataList" />
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 card">
                <WorkChart :alias="alias"/>
            </div>
        </div>
    </div>

</template>

<script>
    import WorkOutLogList from './WorkOutLogList.vue'
    import WorkOutLog from './WorkOutLog.vue'
    import WorkLogSubmit from './WorkLogSubmit.vue'
    import WorkChart from './WorkChart.vue'

    export default {
        data: function () {
            return {
                worklogs: [],
                workDataList: [],
                alias: ''
            }
        },
        components: {
            WorkOutLogList,
            WorkOutLog,
            WorkLogSubmit,
            WorkChart
        },
        methods: {
            makeList: function (workdata) {
                let worklog = {}
                worklog = workdata
                this.worklogs.push(worklog)
                
                const workdata_c = new Object({
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
                Object.keys(workdata).forEach(w => {
                    workdata_c[w] = workdata[w];
                });
                this.workDataList.push(workdata_c)
            }
        }
    }
</script>

<style>
</style>