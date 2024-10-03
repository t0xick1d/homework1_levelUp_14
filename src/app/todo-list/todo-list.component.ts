import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.interface';
import { TodoRepository } from '../todo.repository';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  public todos: Todo[] = [];
  constructor(private todoReposytory: TodoRepository) {}
  // ngOnInit(): void {
  //   this.todos = this.todoReposytory.getTodoList();
  // }
  public getTodo(): Todo[] {
    return this.todoReposytory.getTodoList();
  }
  public onDeleteTodo(id: number): void {
    this.todoReposytory.deleteTodo(id);
  }
  public activeTodo(id: number): void {
    this.todoReposytory.activeTodo(id);
  }
}
