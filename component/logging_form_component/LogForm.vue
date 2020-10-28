<template>
    <div>
        <div class="form-group">
            <label for="work-selection">
                운동종목
            </label>
            
            <select v-model="title" class="form-control" id="work-selection">
                <optgroup v-for="t in titles" :key="t" :label="t">
                    <option v-for="w in workouts[getIndex(titles, t)]" :key="w">
                        {{w}}
                    </option>
                </optgroup>
            </select>
            
        </div>
        <div class="row form-group">
            <work-input @value:update="v => weight = v" :flag="flag[0]"></work-input>
            <work-input @value:update="v => reps = v" :flag="flag[1]"></work-input>
            <work-input @value:update="v => sets = v" :flag="flag[2]"></work-input>
        </div>
        <div class="form-group">
            <input type="button" @click="output" class="form-control btn btn-info" value="클릭">
        </div>
    </div>
</template>

<script>
    import WorkInput from './WorkInput'
    
    export default {
        data: function () {
            return {
                flag: ['weight', 'reps', 'sets'],
                title: "",
                weight: "",
                reps: "",
                sets: ""
            }
        },
        components: {
            WorkInput
        },
        methods: {
            getIndex: function(arr, e) {
                return this.$_.indexOf(arr,e)
            },
            output: function(){
                //깊은 복사하기.
                const value = {}
                value.title = this.title
                value.weight = this.weight
                value.reps = this.reps
                value.sets = this.sets
                this.$emit('logs:update', value)
            }
        },
        created() {
            //api 로 대체 되어야한다.
            const titles = ['가슴운동', '등운동', '하체운동']
            const workouts = [
                ['벤치프레스', '체스트프레스'], ['바벨로우', '데드리프트'], ['스쿼트', '레그프레스']
            ]
            //반응형이 아니여도 상관없을 것 같음.
            this.titles = titles
            this.workouts = workouts
        }
    }
</script>