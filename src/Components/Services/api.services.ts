import axios from "axios";


const getApi = (url: string) => {
    return axios.get(url)
}

const postApi = (url: string, body: any) => {
    return axios.post(url, body)
}

export { getApi, postApi }