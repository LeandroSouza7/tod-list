import { Component } from '@angular/core';

//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

    public taskList: Array <TaskList> = [
      {task: "Minha tarefa", checked: true},
      {task: "Minha tarefa 2", checked: false}
    ];

    constructor(){}

    public deleteItemTaskList(event: number){
      this.taskList.splice(event, 1);
    }

    public deleteAllTaskList(){
      const confirm = window.confirm("Você realmente deseja deletar tudo?");
      if(confirm){ 
        this.taskList = [];
      }
    }
}
