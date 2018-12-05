import axios from 'axios'
export default {
    name: 'chart',
    head() {
        return {
            script:[
                { src: '../js/chart/Chart.js', type: 'text/javascript'}
            ]
        }
    },
    data(){
        return {
            val: '50',
            isloding: false,
            canvasdata: '',
        }
    },
    methods: {
        async start() {
            try {
                let {data} = await axios({
                    methods: 'get',
                    url: 'http://localhost:8080/getdata'
                })
                this.canvasdata = data
                this.myChart()
            }catch(err) {
                console.err(err)
            }
        },
        myChart() {
            document.querySelector('.canvasmain').innerHTML = '<canvas id="myChart"></canvas>'
            let ctx = document.getElementById("myChart").getContext('2d');
            let myChart = new Chart(ctx, this.canvasdata)
        },
        prompt() {
            this.start()
            this.isloding = true
            let data = {
                title: 'dnmd',
                message: 'wdnmd成功点击',
                type: 'success'
            }
            this.notification(data)
            this.isloding = false
        },
        notification (data) {
            this.$notify(data)
        }
    },
    mounted() {
        this.start()
    }
}