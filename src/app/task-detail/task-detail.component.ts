import { Component, OnInit } from '@angular/core';
import { Task1 } from '../models/task1.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { TserviceService } from '../services/t.service';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterModule],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})
export class TaskDetailComponent implements OnInit {
  task!: Task1;

  constructor(
    private route: ActivatedRoute,
    private tservice: TserviceService
  ) { }

  ngOnInit(): void {
    const taskIdParam = this.route.snapshot.paramMap.get('id');
    if (taskIdParam !== null) {
      const taskId = +taskIdParam;
      this.tservice.getTask(taskId).subscribe(task => {
        this.task = task;
      });
    } else {
      console.error("'id' parameter is null");
    }
  }
  

  updateTask(): void {
    this.tservice.updateTask(this.task).subscribe(updatedTask => {
      if (updatedTask) {
        console.log('Task updated successfully:', updatedTask);
        this.task = updatedTask;
      } else {
        console.error('Failed to update task');
      }
    });
  }

  deleteTask(): void {
    this.tservice.deleteTask(this.task.id).subscribe(() => {
      console.log('Task deleted successfully');
    });
  }

  changeTaskStatus(newStatus: string): void {
    this.tservice.changeTaskStatus(this.task.id, newStatus).subscribe(updatedTask => {
      if (updatedTask) {
        console.log('Task status changed successfully:', updatedTask);
        this.task = updatedTask;
      } else {
        console.error('Failed to change task status');
      }
    });
  }
}