<template>
    <div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>title</th>
                    <th>weight</th>
                    <th>reps</th>
                    <th>sets</th>
                </tr>
            </thead>
            <tbody>
                <tr @click="remove(log)" v-for="log in logs" :key="log.key">
                    <td v-for="e in log" :key="e.key">
                        {{e}}
                    </td>
                </tr> 
            </tbody>
        </table>
        <log-submit :logs="logs"></log-submit>
    </div>
</template>

<script> 
import LogSubmit from './LogSubmit'
    export default {
        data: function () {
            return {
         
            }
        },
        props: {
            logs: {
                type: Array,
                required: true
            }
        },
        components: {
            LogSubmit
        },
        methods: {
            remove: function(log) {
                this.$emit('logs:remove', log)
            }
        }
    }
</script>