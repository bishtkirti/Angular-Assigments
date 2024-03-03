import { Component } from '@angular/core';
import { Model, TodoItem } from './model';
import { ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'todo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mytodo';
  checkBoxChecked = true;
  model = new Model();

  getName() {
    return this.model.user;
  }

  getTodoItems() {
    return this.model.items.filter((item) => !item.done);
  }

  addItem(newItem: string) {
    if (newItem != '') {
      this.model.items.push(new TodoItem(newItem, false));
    }
  }

  getCompletedTaskData(){
    return this.model.items.filter((item) => item.done);
  }

  getTotalTaskCount(){
    return this.model.items.length;
  }

  getAllTodoItems() {
    return this.model.items;
  }

 }

