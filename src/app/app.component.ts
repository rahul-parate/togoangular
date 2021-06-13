import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'todo-application';
  todoList :any;
  todoItemTitle = '';
  todoItemDesc = '';
  taskid = '';
  msgTrue = false;


  constructor(public apiservice: ApiService){}
  

  ngOnInit(): void{
  	this.apiservice.sendGetRequest().subscribe(
  		res=> {
  			console.log(res);
  			this.todoList = res;
  		})

  }

  addTask(){
  	const task_details = {
  		'title': this.todoItemTitle,
  		'description': this.todoItemDesc,
  		'completed': 'False'
  	}

  	console.log(task_details);

  	this.apiservice.sendPostRequest(task_details).subscribe(
  		data => {
  			this.msgTrue = true;
  			window.location.reload();
  		})
  }

  updateTask(taskid){
  	const task_details = {
  		'title': this.todoItemTitle,
  		'description': this.todoItemDesc,
  		'completed': 'False',
  		'id': taskid,
  		'action': 'update'
  	}

  	console.log(task_details);

  	this.apiservice.sendPostRequest(task_details).subscribe(
  		data => {
  			this.msgTrue = true;
  			window.location.reload();
  		})
  }

  completeTask(taskid){
  	const task_details = {'id': taskid, 'action': 'completed'}


  	this.apiservice.sendPutRequest(task_details).subscribe(
  		data => {
  			this.msgTrue = true;
  			window.location.reload();
  		})
  }

  deleteTask(taskid){
  	const task_details = {};

  	this.apiservice.deleteRequest(task_details, taskid).subscribe(
  		data => {
  			this.msgTrue = true;
  			window.location.reload();
  		})
  }



}
