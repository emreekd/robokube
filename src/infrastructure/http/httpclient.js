import axios from 'axios';

export default class HttpClient{

    static _instance = null;

    static getInstance(){
        if(HttpClient._instance != null){
            return HttpClient._instance;
        }

        this._instance = new HttpClient();
        return this._instance
    }
    post(url,request){
        return new Promise((resolve,reject) =>{
            axios.post(url,request).then((response) => {
                resolve(response);
            }, (error) => {
                reject(error);
            });
        });
    }
}