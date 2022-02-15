import axios from "axios";

const defaultOptions={
    baseURL: 'https://gorest.co.in/public/v1/',
    timeout:10000,
    headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
        Authorization: 'Bearer eb5cf27cfe9705e8d4ca736d0d8486945cb40a00d0c3b843aeb404f42731b270'
    }

    }


const Axios=axios.create(defaultOptions)

export default Axios