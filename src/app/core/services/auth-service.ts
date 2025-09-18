import {
  inject,
  Injectable
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);

  constructor() { }

  login(username: string, password: string) {
    return this.http.post('/api/login', { username, password });
  }

  logout() {
    return this.http.post('/api/logout', {});
  }

  isAuthenticated() {
    return this.http.get('/api/is-authenticated');
  }

  register(username: string, password: string, email: string) {
    return this.http.post('/api/register', { username, password, email });
  }

  resetPassword(email: string) {
    return this.http.post('/api/reset-password', { email });
  }

  getUserProfile() {
    return this.http.get('/api/user-profile');
  }

  updateUserProfile(profileData: any) {
    return this.http.put('/api/user-profile', profileData);
  }

}
