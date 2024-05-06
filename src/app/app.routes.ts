import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { regauthGuard } from './services/regauth.guard';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminComponent } from './admin/admin.component';


export const routes: Routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent, canActivate: [regauthGuard] },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'task-detail', component: TaskDetailComponent },
  { path: 'create-task', component: CreateTaskComponent},
  { path: 'user-profile',component: UserProfileComponent},
  { path: 'admin',component:AdminComponent},
];
