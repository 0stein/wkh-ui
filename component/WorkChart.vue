<template>
    <div class="card-body">
        <h4 class="card-title">운동 volume 그래프</h4>
        {{ alias }}
        <line-chart :data="chartData"></line-chart>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                chartData: {}
            }
        },
        props: ['alias'],
        methods: {
            filterData: function (data) {
                let chartdata = {}
                data.forEach(element => {
                    let str = Object.values(element);
                    chartdata[str[0]] = str[1]
                });
                this.chartData = chartdata;
            },
            getChartData: function () {
                if (this.alias) {
                    this.$http.get(
                        'http://localhost:8080/workout/statistics/' + this.alias
                    ).then(res => {
                        this.filterData(res.data)
                    }).catch(err => {
                        console.log(err)
                    })
                }
            }
        },
        updated() {
            this.getChartData()
        }
    }
</script>