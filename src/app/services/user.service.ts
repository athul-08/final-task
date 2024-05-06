import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User = {
    username: 'example_user',
    email: 'user@example.com',
    profilePictureUrl: 'assets/profile.jpg',
    id: 0
  };

  constructor() { }

  getUser(): Observable<User> {
    return of(this.user);
  }

  updateUser(updatedUser: User): Observable<User> {
    this.user = updatedUser;
    return of(this.user);
  }

  changePassword(newPassword: string): Observable<boolean> {
    // Implement password change logic
    return of(true);
  }
}