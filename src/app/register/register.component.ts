import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,RouterModule,LoginComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  email: string ='';
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  register() {
    localStorage.setItem('email', this.email);
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);
    console.log('Registration successful');
    this.router.navigateByUrl("/login");
  }
 
}