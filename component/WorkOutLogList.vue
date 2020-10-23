<template>
    <div class="card-body">
        <h4 class="card-title">오늘의 운동</h4>
        <div class="list-group">
            <a href="#" v-for="(log, l) in logs" :key="l" class="list-group-item list-group-item-action">
                {{ log }}
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data: function (){
            return {
                
            }
        },
        props: ['logs']
    }
</script>

<style>

</style>