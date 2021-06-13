import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  sendPostRequest(data: any) {
  	console.log(data);
  	const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
     return this.httpClient.post('http://localhost:8000/app/create/', data, {headers:headers});
 }

 sendGetRequest(){
     return this.httpClient.get('http://localhost:8000/app/list/');
 }

 sendPutRequest(data) {
  	console.log(data);
  	const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
     return this.httpClient.put('http://localhost:8000/app/update/', data, {headers:headers});
 }

 deleteRequest(data, taskid) {
  	console.log(data);
  	const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
     return this.httpClient.delete('http://localhost:8000/app/delete/' + taskid + '/', data);
 }
}
