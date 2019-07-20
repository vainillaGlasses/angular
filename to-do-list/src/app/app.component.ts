import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public newTaskTitle: string = '';
  public newTask: any = {};
  public taskList: Array<any> = [];
  public createTask(): void {
    this.newTask={
      title: this.newTaskTitle,
      date: new Date()
    }
    this.taskList.push(this.newTask);
    this.newTask = {};
  }
}
