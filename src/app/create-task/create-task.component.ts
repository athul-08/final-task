import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, FormsModule, CommonModule,ReactiveFormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent {
  [x: string]: any;
  createForm!: FormGroup;
  form: any;
  Form: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: ['', Validators.required],
      priority: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.createForm.valid) {
      this['http'].post('YOUR_BACKEND_URL', this.createForm.value)
        .subscribe((response: any) => {
          console.log('Task submitted successfully:', response);
          // Reset the form after successful submission
          this.createForm.reset();
        }, (error: any) => {
          console.error('Error submitting task:', error);
        });
    }
  }
}