import { Injectable } from '@angular/core';
import { Todo } from './shared/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoRepository {
  private todos: Todo[] = [];
  public getTodoList(): Todo[] {
    return this.todos;
  }
  public addTodo(title: string): void {
    let randomId = (Math.random() + 1).toString(36).substring(7);
    const newTodo: Todo = { id: randomId, complited: false, title: title };
    this.todos.push(newTodo);
  }
  public completedTodo(id: string): void {
    this.todos = this.todos.map((item) => {
      if (id === item.id) {
        return { ...item, complited: !item.complited };
      }
      return item;
    });
  }
  public deleteTodo(id: string): void {
    this.todos = this.todos.filter((item) => item.id !== id);
  }
}
