import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [RouterLink,RouterModule,CommonModule,FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit {
  user!: User;
  updatedEmail!: string;
  updatedProfilePictureUrl!: string;
  newPassword!: string;
  passwordChangeSuccess = false;
  profileChangeSuccess: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {
      this.user = user;
      this.updatedEmail = user.email;
      this.updatedProfilePictureUrl = user.profilePictureUrl;
    });
  }

  updateProfile(): void {
    const updatedUser: User = { ...this.user, email: this.updatedEmail, profilePictureUrl: this.updatedProfilePictureUrl };
    this.userService.updateUser(updatedUser).subscribe(() => {
      this.profileChangeSuccess = true;

    });
  }

  changePassword(): void {
    this.userService.changePassword(this.newPassword).subscribe(() => {
      this.passwordChangeSuccess = true;
    });
  }
}