import { Component } from '@angular/core';
import { Todo } from '../shared/todo.interface';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  private todo: Todo[] = [{ title: 'test', complited: false, id: 1 }];

  public getTodo(): Todo[] {
    return this.todo;
  }
}
