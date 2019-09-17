import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  getTasks(){
    return this._http.get('/task')
  }
  getById(id){
    return this._http.get(`/task/${id}`)
  }
  createTask(task){
    return this._http.post('task/create',task)
  }
  edTask(task){
    console.log(task._id, task)
    return this._http.put(`/task/${task._id}`,task)
  }
  deleteTask(id_num){
    return this._http.delete(`/task/${id_num}`)
  }
}
