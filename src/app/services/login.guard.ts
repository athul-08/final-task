import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class loginGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
      this.router.navigateByUrl('/dashboard'); 
      return false; 
    } else {
      return true;
    }
  }
}
