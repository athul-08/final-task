import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task1 } from '../models/task1.model';

@Injectable({
  providedIn: 'root'
})
export class TserviceService {
  private tasks: Task1[] = [
    { id: 1, title: 'Task 1', description: 'Description 1', dueDate: new Date(), priority: 'low', status: 'pending' },
    { id: 2, title: 'Task 2', description: 'Description 2', dueDate: new Date(), priority: 'medium', status: 'pending' },
    { id: 3, title: 'Task 3', description: 'Description 3', dueDate: new Date(), priority: 'high', status: 'completed' },
  ];

  constructor() { }

  getTask(id: number): Observable<Task1> {
    const task = this.tasks.find(t => t.id === id);
    return of(task || { id: 0, title: '', description: '', dueDate: new Date(), priority: 'low', status: 'pending' });
  }
  

  updateTask(task: Task1): Observable<Task1> {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
      return of(task);
    }
    return of({ id: 0, title: '', description: '', dueDate: new Date(), priority: 'low', status: 'pending' });
  }

  deleteTask(id: number): Observable<void> {
    this.tasks = this.tasks.filter(t => t.id !== id);
    return of();
  }

  changeTaskStatus(id: number, newStatus: string): Observable<Task1> {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.status = newStatus as 'pending' | 'completed' | 'overdue';
      return of(task);
    }
    return of({ id: 0, title: '', description: '', dueDate: new Date(), priority: 'low', status: 'pending' });
  }

  getAllTasks(): Observable<Task1[]> {
    return of(this.tasks);
  }
}