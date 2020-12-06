
const axios = require('axios')

export default class getAxios {

    constructor(url) {
        this.url = url
        this.data;
    }

    getData() {
        axios.get(this.url).then((res) => {
            this.data = res.data
        })

    }
    
}
    