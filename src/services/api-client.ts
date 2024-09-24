import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    results: T[];
}

const axiosInstance = axios.create({
    // baseURL: "https://relicbot-api.onrender.com/api",
    baseURL: "http://localhost:3000/api",
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = async (config?: AxiosRequestConfig) => {
        return axiosInstance
        .get<FetchResponse<T>>(this.endpoint, config)
        .then(res => res.data);
    }

    get = async (id: number | string) => {
        return axiosInstance
        .get<T>(`${this.endpoint}/${id}`)
        .then(res => res.data)
    }
}

export default APIClient;
