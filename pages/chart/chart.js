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
            foo: 'do',
            val: '50',
            userdata: '',
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            canvasdata: ''
        }
    },
    methods: {
        async start() {
            try {
                let {data} = await axios({
                    methods: 'get',
                    url: 'https://jsonplaceholder.typicode.com/posts/1/comments'
                })
                this.userdata = data
            }catch(err) {
                console.err(err)
            }
        },
        myChart() {
            
        }
    },
    mounted() {
        this.start()
    }
}