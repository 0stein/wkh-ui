<template>
    <div class="card-body">
        <h4 class="card-title">오늘의 운동</h4>
        <div class="list-group">
            <a href="#" :id="key" v-for="(log, l) in logForPrint" :key="l" @click="deleteLog"
                class="list-group-item list-group-item-action">
                {{ log }}
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                logForPrint: []
            }
        },
        props: ['logs'],
        methods: {
            deleteLog: function () {},
            initLogs: function () {
                this.logs.forEach(log => {
                    this.logForPrint.push(`${log.workout} ${log.weight}kg ${log.reps}reps ${log.set}sets`)
                });
            }
        },
        updated() {
            this.initLogs()
        }
    }
</script>

<style>

</style>