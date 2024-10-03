import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.interface';
import { TodoRepository } from '../todo.repository';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public todo: Todo[] = [];
  constructor(private todoReposytory: TodoRepository) {}
  ngOnInit(): void {
    this.todo = this.todoReposytory.getTodoList();
  }
  public onDeleteTodo(id: string): void {
    this.todoReposytory.deleteTodo(id);
  }
  public activeTodo(id: string): void {
    this.todoReposytory.completedTodo(id);
  }
}
