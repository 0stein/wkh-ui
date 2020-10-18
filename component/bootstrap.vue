<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                운동 일지 작성
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md">
                        <worklog></worklog>
                    </div>
                    <div class="col-md">
                        <loglist></loglist>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import WorkLog from "./WorkLog"
    import WorkLogList from "./WorkLogList"

    export default {
        components: {
            worklog: WorkLog,
            loglist: WorkLogList
        }
    }
</script>