<template>
    <form class="form-row">
        <div class="col-3">
            <input v-model="alias" class="form-control" type="text" placeholder="닉네임">
        </div>
        <div class="col-7">
            <input v-model="listTitle" class="form-control" type="text" placeholder="루틴이름!">
        </div>
        <div class="col-2">
            <input @click="submit" class="form-control btn btn-info" type="button" value="제출">
        </div>
    </form>
</template>

<script>
    export default {
        data: function () {
            return {
                alias: '',
                listTitle: ''
            }
        },
        props: {
            logs: {
                type: Array,
                required: true
            }
        },
        methods: {
            submit: function () {
                let user = {
                    alias: this.alias
                }
                this.$_.forEach(this.logs, v => {
                    let data = this.$_.cloneDeep(v)
                    data.user = user
                })     
            }
        }
    }
</script>