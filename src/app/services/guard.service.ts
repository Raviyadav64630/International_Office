import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor() { }

  isLoggedIn(): Boolean {
    const user = localStorage.getItem('uname');
    if (user) {
      return true
    }
    return false
  }

}
