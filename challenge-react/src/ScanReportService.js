// import React from 'react';
import axios from 'axios'
const baseUrl = `http://localhost:4000/api/v1/results`
console.log('connected with Backend URL : '+ baseUrl);

class ScanReportService {

    static create(data) {
        return axios.post(baseUrl, data);
    }

    static getList() {
        return axios.get(baseUrl);
    }

    static getById(id) {
        return axios.get(baseUrl + '/' + id);
    }
}

export default ScanReportService