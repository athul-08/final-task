import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink,RouterModule,LoginComponent,CommonModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  @ViewChild('pieChart')
  pieChart!: ElementRef;

  tasks: Task[] = [];
  selectedStatus: string = 'all';
  router: any;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.loadTasks();
    this.generatePieChart();
  }

  loadTasks() {
    this.tasks = this.taskService.getTasks();
  }

  markAsCompleted(task: Task) {
    task.completed = true;
    this.taskService.updateTask(task);
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task);
    this.loadTasks();
  }

  generatePieChart() {
    const statuses = ['Pending', 'Completed', 'Overdue'];
    const counts = [
      this.tasks.filter(task => !task.completed && task.dueDate < new Date()).length,
      this.tasks.filter(task => task.completed).length,
      this.tasks.filter(task => !task.completed && task.dueDate >= new Date()).length
    ];

    const ctx = this.pieChart.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: statuses,
        datasets: [{
          data: counts,
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }
  // logout(){
  //   localStorage.clear()
  //   this.router.navigateByUrl("/login")
  // }
}