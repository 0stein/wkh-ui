<template>
    <div class="col">
        <label>
            {{flag}}
            <input @input="output($event.target.value)" type="number" class="form-control" name="flag">
        </label>
    </div>

</template>

<script>
    export default {
        props: ['flag'],
        methods: {
            output: function(value) {
                this.$emit('value:update', Number(value))
            }
        }
    }
</script>
