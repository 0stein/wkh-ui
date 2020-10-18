<template>
    <div>
        <div class="form-group">
            <label for="workout_kind">종목</label>
            <select class="form-control" id="workout_kind">
                <optgroup label="가슴운동">
                    <option value="BENCH_PRESS">벤치프레스</option>
                    <option value="CHEST_PRESS">체스트프레스</option>
                </optgroup>
                <optgroup label="등운동">
                    <option value="DEAD_LIFT">데드리프트</option>
                    <option value="PULL_UP">풀업</option>
                </optgroup>
                <optgroup label="하체운동">
                    <option value="SQUAT">스쿼트</option>
                    <option value="LEG_PRESS">레그프레스</option>
                </optgroup>
            </select>
        </div>


        <div class="form-group row">
            <div class="input-group col-md">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">중량</span>
                </div>
                <input type="number" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group col-md">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">횟수</span>
                </div>
                <input type="number" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            <div class="input-group col-md">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">세트수</span>
                </div>
                <input type="number" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
            </div>
        </div>
        <button type="submit" @click="digit" class="btn btn-outline-secondary form-contol">button</button>
    </div>
</template>


<script>
    export default {

    }
</script>