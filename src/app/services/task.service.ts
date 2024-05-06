import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  getTask(taskId: number): import("../models/task.model").Task {
    throw new Error('Method not implemented.');
  }
  private tasks: Task[] = [
    { id: 1, title: 'Task 1', dueDate: new Date('2024-05-31'),completed: false },
    { id: 2, title: 'Task 2', dueDate: new Date('2024-06-15'), completed: false },
    { id: 3, title: 'Task 3', dueDate: new Date('2024-06-30'), completed: true }
  ];

  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  updateTask(task: Task): void {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
    }
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
  }
}
