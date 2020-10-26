<template>
    <div class="card-body">
        <h4 class="card-title">기록하기!</h4>
        <div class="form-group">
            <label for="exercises">운동종목</label>
            <select v-model="workout" class="form-control">
                <optgroup label="가슴운동">
                    <option value="BENCH_PRESS">벤치프레스</option>
                    <option value="CHEST_PRESS">체스트프레스</option>
                </optgroup>
                <optgroup label="등운동">
                    <option value="DEAD_LIFT">데드리프트</option>
                    <option value="BARBELL_ROW">바벨로우</option>
                </optgroup>
                <optgroup label="하체운동">
                    <option value="SQUAT">스쿼트</option>
                    <option value="LEG_PRESS">레그프레스</option>
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
                    workout: null,
                    weight: null,
                    reps: null,
                    set: null
            }
        },
        methods: {
            sendMakeList: function () {
                const data_copy = new Object()
                Object.keys(this.$data).forEach(w => {
                    data_copy[w] = this.$data[w]
                });
                this.$emit('eventMakeList', data_copy)
            }
        }
    }
</script>