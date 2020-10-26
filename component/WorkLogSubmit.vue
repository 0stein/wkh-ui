<template>
    <div class="card-body">
        <h4 class="card-title">제출하기!</h4>
        <div class="form-group">
            <label for="nickname" class="mr-2">닉네임</label>
            <input v-model="alias" type="text" id="nickname" class="form-control" placeholder="your nickname">
        </div>
        <div class="form-group">
            <input @click="postWorkLogs" type="button" class="btn btn-info form-control" value="제출">
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                alias: ""
            }
        },
        props: ['workDataProp'],
        methods: {
            postWorkLogs: function () {
                this.workDataProp.forEach(w => {
                    w.user.alias = this.alias
                    this.$http.post('http://localhost:8080/workout', w)
                });
                this.$emit('update:alias',this.alias)
            }
        }
    }
</script>