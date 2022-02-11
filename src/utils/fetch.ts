import axios from "axios";
import qs from "qs";

const defaultOptions={
    timeout:10000,
    headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
    },
    paramsSerializer:(params:unknown)=>qs.stringify(params,{arrayFormat:'repeat'})

    }


const fetch=axios.create(defaultOptions)

export default fetch