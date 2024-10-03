import { Component } from '@angular/core';
import { TodoRepository } from '../todo.repository';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent {
  public todoTitle = '';

  constructor(private todoRepository: TodoRepository) {}

  public onAddTodo(title: string): void {
    this.todoRepository.addTodo(title);
    this.todoTitle = '';
  }
}
