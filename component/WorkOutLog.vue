<template>
    <div class="card-body">
        <h4 class="card-title">기록하기!</h4>
        <div class="form-group">
            <label for="exercises">운동종목</label>
            <select v-model="exercise" class="form-control">
                <optgroup label="가슴운동">
                    <option value="c_BENCH_PRESS">벤치프레스</option>
                </optgroup>
            </select>
        </div>
        <div class="row form-group">
            <div class="col">
                <label for="weight">무게</label>
                <input v-model="weight" type="number" class="form-control" name="weight" id="weight" placeholder="kg">
            </div>
            <div class="col">
                <label for="reps">반복수</label>
                <input v-model="reps" type="number" class="form-control" name="weight" id="reps" placeholder="reps">
            </div>
            <div class="col">
                <label for="set">세트수</label>
                <input v-model="set" type="number" class="form-control" name="weight" id="set" placeholder="sets">
            </div>
        </div>
        <div class="form-group">
            <input type="button" @click="sendMakeList" class="form-control btn btn-info" value="클릭">
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                    exercise: null,
                    weight: null,
                    reps: null,
                    set: null,
            }
        },
        methods: {
            sendMakeList: function () {
                let data = {
                    exercise: this.exercise,
                    weight: this.weight,
                    reps: this.reps,
                    set: this.set
                }
                this.$emit('eventMakeList', data)
            }
        }
    }
</script>